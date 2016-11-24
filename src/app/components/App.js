'use strict';

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import data from "./data.json"

import AppSass from "./App.sass"

let order = 'desc';

export default class App extends React.Component {

  render () {
    const options = {
     page: 1,
     sizePerPageList: [ {
       text: '1', value: 5
     }, {
       text: '2', value: 10
     }, {
       text: '5', value: 15
     }, {
       text: 'All', value: data.length
     } ],
     sizePerPage: 5,
     pageStartIndex: 1,
     paginationSize: 5,  // the pagination bar size.
     prePage: 'Prev', // Previous page button text
     nextPage: 'Next', // Next page button text
     firstPage: 'First', // First page button text
     lastPage: 'Last', // Last page button text
     paginationShowsTotal: this.renderShowsTotal  // Accept bool or function
     // hideSizePerPage: true > You can hide the dropdown for sizePerPage
   };
    return (
    <div>
      <h1 className="header">Table</h1>
      <div className="center-block tableDiv" >
        <BootstrapTable className="tableDesign" data={ data } pagination={ true } options={ options }>
         <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Id</TableHeaderColumn>
         <TableHeaderColumn dataField='userName' dataSort={ true } filter={ { type: 'TextFilter', defaultValue: 'Pikachu' } }>User Name</TableHeaderColumn>
         <TableHeaderColumn dataField='postTitle' dataSort={ true }>Post Title</TableHeaderColumn>
         <TableHeaderColumn dataField='views' dataSort={ true }>Views</TableHeaderColumn>
         <TableHeaderColumn dataField='likes' dataSort={ true }>Likes</TableHeaderColumn>
         <TableHeaderColumn dataField='date' dataSort={ true }>Date Created</TableHeaderColumn>
       </BootstrapTable>
     </div>
    </div>
    )
  }
}
