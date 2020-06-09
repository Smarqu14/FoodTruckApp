/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ItemRow from './ItemRow';

class SideMenu extends React.Component {
  render() {
    const rows = [];
    this.props.data.forEach((item) => {
      rows.push(<ItemRow data={item} />);
    });

    return (
      <table id="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default SideMenu;
