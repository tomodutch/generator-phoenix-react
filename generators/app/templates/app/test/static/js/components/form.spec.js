import React from 'react';
import Chai, {expect} from 'chai';
import sinon from 'sinon';
import {mount} from 'enzyme';
import sinonChai from 'sinon-chai';
import Form from '<%= atomName %>/components/form';
Chai.use(sinonChai);

describe('Form', () => {
  it('submits a message', () => {
    const handleSubmit = sinon.spy();
    const wrapper = mount(
      <Form handleSubmit={handleSubmit} />
    );
    const message = 'Hello, my name is Bob!';
    const {node} = wrapper.find('input');

    node.value = message;
    wrapper.find('form').simulate('submit');

    expect(handleSubmit).to.have.been.calledWith(message);
    expect(node.value).to.equal('');
  });
});
