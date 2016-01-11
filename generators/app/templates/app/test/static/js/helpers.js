import React from 'react';
import TestUtils from 'react-addons-test-utils';

export const render = (component) => {
  const renderer = TestUtils.createRenderer();
  renderer.render(component);
  return renderer.getRenderOutput();
}

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
