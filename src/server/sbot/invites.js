module.exports = (ssb, config) => {
  return {
    accept: (invitecode, cb) => {
      const x = ssb.accept(invitecode, cb);
      console.log(x);
      cb && cb();
    },
  };
};
