import React, { Component } from 'react';
import './SearchInput.css';
import { connect } from 'react-redux'
import { SET_TEXT, SET_FILTERED } from "../../actions/search";
import "./SearchInput.css";

class SearchInput extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      text: '',
    }
  }
  /**
   * * handles the input text and
   * * checks wich keys have been pressed
   */

  _handleInput = (e) => {
    if (e.key === 'Enter') { // if the user presses enter
      const { value } = e.target; // gets the value of the input 
      this.props.setText(value); // sets the redux text state to thge value
      this.props.setFiltered(true); // sets the redux filtered state to true
    } else if(e.keyCode === 27) { // if the user presses ESC then 
      e.target.value = ''; // clears the input 
      this.props.setFiltered(false); // sets filtered to false
    }
  }

  /**
   * * handles the changes on text input
   */

   _handleOnChange = (e) => {
      this.setState({text: e.target.value});
   }

   /**
    * * handles on submit text
    */

    _handleInputButton = () => {
        const {text} = this.state;
        this.props.setText(text); // sets the redux text state to thge value
        this.props.setFiltered(true); // sets the redux filtered state to true
    }

  /**
   * * renders the design of the input
   */

  render() {
    return (
      <div className='search-root'>
            <div className='search-container'>
                <input className='search-input'
                 onKeyDown={this._handleInput}
                 onChange={this._handleOnChange}
                 />
            </div>
            <div className='search-button'>
              <button onClick={this._handleInputButton}>
                <span><img alt='' src={require('../../assets/search.png')} /></span>
              </button>
            </div>
      </div>
    );
  }
}

/**
 * * connects the screen to the redux
 */
export default connect(
  (state) => ({
      text: state.text,
  }),
  (dispatch) => ({
      setText: (text) => dispatch({ type: SET_TEXT, text }), // sets the text
      setFiltered: (filtered) => dispatch({ type: SET_FILTERED, filtered }), //sets if the boolean variable
  })
)(SearchInput);