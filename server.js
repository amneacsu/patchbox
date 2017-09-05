const sb = require('./server');

const client = sb();

const ipcMain = require('electron').ipcMain;
ipcMain.on('createFeedStream', function(event, arg) {
  console.log(arg);
  // const str = client.createFeedStream({
  //
  // });
});
