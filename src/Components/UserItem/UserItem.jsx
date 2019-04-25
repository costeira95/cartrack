import React, { Component } from 'react';
import './UserItem.css';

class UserItem extends Component {
  render() {
    /**
     * * gets all the information from the user from props
     * * using destructuring assignment
     */
    const { name, email, website, username, phone } = this.props.user;
    const { street, suite, city, zipcode } = this.props.user.address;
    const { catchPhrase, bs } = this.props.user.company;
    const companyName = this.props.user.company.name;

    /**
     * * create and returns the component
     */
    return (
      <div className='user-root'>
            <div className='user-container'>
                <header><p>{name}</p></header>
                    <div className='item'>
                        <div className='user-body'>
                            <div className='user-image'>
                                <img alt='' src={require('../../assets/avatar.png')}  />
                            </div>
                            <div className='user-info'>
                                <p>{username}</p>
                                <p>{email}</p>
                                <p>{website}</p>
                            </div>
                        </div>
                    </div>
                    <hr /> 
                    <div className='item'>
                        <div className='user-body'>
                            <div className='user-image'>
                                <img alt='' src={require('../../assets/home.png')}  />
                            </div>
                            <div className='user-info'>
                                <p>{`${street} ${suite}`}</p>
                                <p>{`${city}, ${zipcode}`}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='item'>
                        <div className='user-body'>
                            <div className='user-image'>
                                <img alt='' src={require('../../assets/enterprise.png')}  />
                            </div>
                            <div className='user-info'>
                                <p>{companyName}</p>
                                <p>{catchPhrase}</p>
                                <p>{bs}</p>
                            </div>
                        </div>
                    </div>
                <hr />
                <footer><button><span className='call'>Call member</span><span className='phone'>{phone}</span></button></footer>
            </div>
        </div>
      
    );
  }
}

export default UserItem;