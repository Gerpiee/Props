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
      <div className='col-md-8 mb-4'>
      <div className="card">
        <div className="card-header d-flex justify-content-between">
        <h4 className='d-inline'>{name}</h4>
        <i className='far fa-trash-alt' style={{cursor: "pointer"}}>

        </i>
        </div>
        <div className="card-body">
          <p className="card-text">
            Soyad : {lastName}
          </p>
          <p className="card-text">
            Yaş : {age}
          </p>
        </div>
      </div>
      
      </div>
    )
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired
}
User.defaultProps = {
  name:"empty",
  lastName:"empty",
  age:"empty"
}
export default User;