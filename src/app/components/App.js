'use strict';

import React from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

// import data from "./data.json" //Do not need because of firebase

import AppSass from "./App.sass"

let order = 'desc';


const config = {
  apiKey: "AIzaSyAaAoOzgQPslrEryz2GMle9M0nVHEwV9Zg",
  authDomain: "zadanie-5e816.firebaseapp.com",
  databaseURL: "https://zadanie-5e816.firebaseio.com",
  storageBucket: "zadanie-5e816.appspot.com",
  messagingSenderId: "881816987190"
};
firebase.initializeApp(config);

const fbRef = firebase.database().ref();


let data = [];

function updateTable(val, id) {
  data.push(val);
}

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: data,
      activeUser: "Pikachu"
    }
  };

  componentWillMount() {
    fbRef.on("child_added", (snapshot) => {
      updateTable(snapshot.val(), snapshot.key);
      this.setState({
        data: data,
        activeUser: "Pikachu"
      });
    }).bind(this)
  }

  onAddRow(row) {
    console.log(row);
    let newRow = {
      id: row.id,
      userName: row.userName,
      postTitle: row.postTitle,
      views: row.views,
      likes: row.likes,
      date: row.date
    }
    const dataId = fbRef.push().key;
    let updates = {};
    updates[dataId] = newRow;
    fbRef.update(updates);
  }

  render () {
    const options = {
     onAddRow: this.onAddRow,
     page: 1,
     sizePerPageList: [ {
       text: '5', value: 5
     }, {
       text: '10', value: 10
     }, {
       text: '15', value: 15
     }, {
       text: 'All', value: data.length
     } ],
     sizePerPage: 5,
     pageStartIndex: 1,
     paginationSize: 5,
     prePage: 'Prev',
     nextPage: 'Next',
     firstPage: 'First',
     lastPage: 'Last',
     paginationShowsTotal: this.renderShowsTotal
   };

    return (
    <div>
      <h1 className="header">Table</h1>
      <div className="center-block tableDiv table-responsive" >
        <BootstrapTable
            className="tableDesign"
            data={ data }
            pagination={ true }
            options={ options }
            insertRow={ true }>
         <TableHeaderColumn
              dataField='id'
              isKey={ true }
              dataSort={ true } width="60px">
            Id
          </TableHeaderColumn>
         <TableHeaderColumn
              width="170px"
              dataField='userName'
              dataSort={ true }
              filter={ { type: 'TextFilter'} }>
            User Name
        </TableHeaderColumn>
         <TableHeaderColumn
              dataField='postTitle'
              dataSort={ true }>
           Post Title
         </TableHeaderColumn>
         <TableHeaderColumn
              dataField='views'
              dataSort={ true } width="80px">
            Views
         </TableHeaderColumn>
         <TableHeaderColumn
              dataField='likes'
              dataSort={ true } width="80px">
            Likes
         </TableHeaderColumn>
         <TableHeaderColumn
              dataField='date'
              dataSort={ true }
              width="100px">
            Date Created
         </TableHeaderColumn>
       </BootstrapTable>
     </div>
    </div>
    )
  }
}
