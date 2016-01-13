export const stubChannel = (triggerEvent, payload) => {
  const channel = {
    join: () => {
      return channel;
    },
    receive: (event, cb) => {
      if (triggerEvent === event) {
        cb(payload);
      }
    }
  };

  return channel;
};
