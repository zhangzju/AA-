import React from 'react';
import './App.css';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.cost}</td>
        <td>{this.props.count}</td>
      </tr>
    )
  }
}