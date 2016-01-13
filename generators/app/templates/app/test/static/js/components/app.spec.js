import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import App from '<%= atomName %>/components/app';
import Form from '<%= atomName %>/components/form';

describe('App', () => {
  it ('renders html', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Form)).to.have.length(1);
  });
});
