'use strict';

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import data from "./data.json"

let order = 'desc';

export default class App extends React.Component {

  render () {
    console.log(data);
    return (
    <div>
      <BootstrapTable className="table" data={ data }>
       <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Id</TableHeaderColumn>
       <TableHeaderColumn dataField='userName' dataSort={ true }>User Name Name</TableHeaderColumn>
       <TableHeaderColumn dataField='postTitle' dataSort={ true }>Post Title</TableHeaderColumn>
       <TableHeaderColumn dataField='views' dataSort={ true }>Views</TableHeaderColumn>
       <TableHeaderColumn dataField='likes' dataSort={ true }>Likes</TableHeaderColumn>
       <TableHeaderColumn dataField='date' dataSort={ true }>Date Created</TableHeaderColumn>
      </BootstrapTable>

    </div>
    )
  }
}
