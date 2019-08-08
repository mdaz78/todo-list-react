import React, { Component } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='add todo'
          style={{ flex: '10' }}
        />
        <input
          type='submit'
          value='Submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}
