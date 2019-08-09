import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { title, id } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            defaultChecked={this.props.todo.completed}
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
          <button
            onClick={this.props.deleteTodo.bind(this, id)}
            style={btnDeleteStyle}
          >
            x
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const btnDeleteStyle = {
  background: '#ff0000',
  float: 'right',
  border: 'none',
  padding: '5px 9px',
  color: '#fff',
  fontSize: '11px',
  cursor: 'pointer',
  borderRadius: '50%',
  fontWeight: 'bold',
};

export default TodoItem;
