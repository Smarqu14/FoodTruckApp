/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class itemRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.item}</td>
        <td>{this.props.data.description}</td>
        <td>${this.props.data.price}</td>
      </tr>
    );
  }
}

export default itemRow;
