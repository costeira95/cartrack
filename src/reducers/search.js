import { SET_TEXT, SET_FILTERED } from '../actions/search';

/**
 * * creates the initial state of redux
 */
const initState = {
	text: '',
	filtered: false,
}

export default (state = initState, action) => { //exports function
	switch(action.type) { //case to the action
		case SET_TEXT : // checks if is to set the text
			return { ...state, text: action.text }; // returns the state with the previous data plus the new text
		case SET_FILTERED : // check if is to set the filtered
			return { ...state,  filtered: action.filtered }; // returns the state with the previous data plus the new filtered
		default : // if none of the above then
			return state; // returns the state unchanged
	}
}
