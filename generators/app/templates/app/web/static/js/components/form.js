import React from 'react';

export default ({handleSubmit}) => {
  let input;

  return (
    <form onSubmit={
      e => {
        e.preventDefault();
        handleSubmit(input.value);
        input.value = '';
      }
    }>
      <div className='form-group'>
        <input
          className='form-control'
          type="text"
          name="message"
          ref={node => input = node}
        />
      </div>

      <div className='form-group'>
        <button className='btn btn-default'>submit</button>
      </div>
    </form>
  )
};
