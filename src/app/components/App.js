'use strict';

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import data from "./data.json"

export default class App extends React.Component {
  render () {
    console.log(data);
    return (
    <div>
      <BootstrapTable className="table" data={ data }>
       <TableHeaderColumn dataField='id' isKey>Id</TableHeaderColumn>
       <TableHeaderColumn dataField='userName'>User Name Name</TableHeaderColumn>
       <TableHeaderColumn dataField='postTitle'>Post Title</TableHeaderColumn>
       <TableHeaderColumn dataField='views'>Views</TableHeaderColumn>
       <TableHeaderColumn dataField='likes'>Likes</TableHeaderColumn>
       <TableHeaderColumn dataField='date'>Date Created</TableHeaderColumn>
      </BootstrapTable>

    </div>
    )
  }
}
