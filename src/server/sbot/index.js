const Invites = require('./invites');

module.exports = {
  init(ssb, config) {
    const invites = Invites(ssb, config);
    // console.log(invites);

    return {
      acceptInvite: invites.accept,
    };
  },
};
