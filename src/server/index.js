const pull = require('pull-stream');
const ssbKeys = require('ssb-keys');
const path = require('path');

const createSbot = require('scuttlebot')
  .use(require('scuttlebot/plugins/invite'))
  .use(require('./sbot'));

function ScuttlebuttClient(config) {
  config.keys = ssbKeys.loadOrCreateSync(path.join(config.path, 'secret'));

  const sbot = createSbot(config);

  const stream = sbot.createFeedStream({
    limit: 3,
  });

  pull(
    stream,
    pull.collect(function (err, msgs) {
      msgs.forEach(msg => console.log(msg.value.content));
      sbot.close();
    })
  );
}

return new ScuttlebuttClient({
  path: '/Users/andrei/.ssb',
});

