import React, { Component } from 'react';
import UserItem from '../UserItem/UserItem';
import fetchData from '../Services/Api';
import { connect } from 'react-redux'

import './UserList.css';
import { SET_FILTERED } from '../../actions/search';

class UserList extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    /**
     * * will run after the component did mount
     */

    componentDidMount() {
        fetchData('https://jsonplaceholder.typicode.com/users') // fetches the users data
        .then((users) => { // after the promisse is resolved
            this.setState( state => ({ // sets the state
                data: [...state.data, ...users], //appends the data
            }));
        })
    }

    /**
     * * lists all the users without being filtered
     */

    _listRender = () => {
        const { data } = this.state; //gets the data from the state
        return data.map((user) => { // returns an array with multiple users items components
            return (<UserItem key={user.id} user={user} />);
        });
    }

    /**
     * * filters the users
     */

     _listFilteredRender = () => {
        const { data } = this.state; // gets the data from the state
        let { text } = this.props; // gets the text from redux
        text = text.toLowerCase(); // sets the rext to lowercase

        return data.reduce((filtered, user) => { // reduces the users
            let existsEmail = user.email.toLowerCase().indexOf(text); // sets the text to lowercase and searchs text with indexOf
            let existsName = user.name.toLowerCase().indexOf(text); // sets the text to lowercase and searchs text with indexOf
            if (existsEmail > -1 || existsName > -1) { // check if email or name are greater then -1 if they are then exists
               filtered = [...filtered, <UserItem user={user} />]; // creates an array of UserItem components that matches
            }
            return filtered;
          }, []);
    }

    /**
     * * renders the component
     */
     
    render() {
        return (
        <div className='root-list'>
            { !this.props.filtered && this._listRender() }
        { this.props.filtered && this._listFilteredRender()}
        </div>
        );
    }
}

/**
 * * creates the connection between the screen and the redux
 */
export default connect(
    (state) => ({
        text: state.text,
        filtered: state.filtered
    }),
    (dispatch) => ({
        setFiltered : (filtered)  => dispatch({ type: SET_FILTERED, filtered }),
    })
)(UserList);