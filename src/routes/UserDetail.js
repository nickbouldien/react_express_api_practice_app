import React, { Component } from 'react';
import userStore from '../stores/UserStore'

class UserDetail extends Component {
  constructor(props){
    super(props)
    console.log('dsfasfdas')
    this.state={
      user: userStore.getFields(),
    }
  }

  componentWillMount(){
    userStore.on('change', this.updateUser)
  }

  componentWillUnmount(){
    userStore.removeListener('change', this.updateUser)
  }

  updateUser(){
    this.setState({user: userStore.getFields()})
  }

  render() {
    return (
      <div className='row'>
        <div className="col-xs-12">
          <h2>User Details</h2>
          <ul className='list-group'>
            <li className='list-group-item'>
              First Name: {this.state.user.firstName}
            </li>
            <li className='list-group-item'>
              Last Name: {this.state.user.lastName}
            </li>
            <li className='list-group-item'>
              Email: {this.state.user.email}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default UserDetail
