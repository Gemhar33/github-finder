import React, { useReducer } from 'react';
import axios from 'axios';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
	SEARCH_USERS,
	GET_USER,
	CLEAR_USERS,
	GET_REPOS,
	SET_LOADING,
	SET_ALERT,
	REMOVE_ALERT,
} from '../../types';

const GithubState = props => {
	const initialState = {
		users: [],
		user: {},
		repos: [],
		isLoading: false,
	};

	const [state, dispatch] = useReducer(GithubReducer, initialState);

  // SEARCH_USERS
  
  const searchUser = async username => {
		setLoading();
		const res = await axios.get(
			`https://api.github.com/search/users?q=${username}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    })
	};

	// GET_USER,

	// CLEAR_USERS,

	// GET_REPOS,

	// SET_LOADING,

  // SET_ALERT,
  
  const setLoading = () => dispatch({type: SET_LOADING});

	return (
		<GithubContext.Provider
			value={{
				users: state.users,
				user: state.user,
				repos: state.repos,
				loading: state.loading,
        searchUser,
			}}
		>
      {props.children}
    </GithubContext.Provider>
	);
};


export default GithubState;