import React from 'react';
import {expect} from 'chai';
import App from '<%= atomName %>/components/app';
import {render} from 'test_helpers';


describe('App', () => {
  it ('renders html', () => {
    let output = render(<App />);
    expect(output.props.children).to.have.length.above(0);
  });
});
