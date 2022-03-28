import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
 class User extends Component {
  render() {

    // Destructing
    const{name,lastName,age}= this.props;
    return (
      <div>
        <ul>
          <li>Ad : {name} </li>
          <li>Soyad : {lastName}</li>
          <li>Yaş : {age} </li>
        </ul>
      </div>
    )
  }
}
export default User;