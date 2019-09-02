import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import GithubContext from '../../context/github/githubContext';

const Search = ({ setAlert, showClear, clearAll }) => {
	const githubContext = useContext(GithubContext);
	const [text, setText] = useState('');
	const handleChange = ev => setText(ev.target.value);
	const handleSubmit = ev => {
		ev.preventDefault();
		if (text.length < 1) {
			setAlert('Please enter a username', 'light');
		} else {
			githubContext.searchUser(text);
			setText('');
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="text"
					placeholder="Search user..."
					value={text}
					onChange={handleChange}
				/>
				<input
					type="submit"
					value="Search"
					className="btn btn-dark btn-block"
				/>
			</form>
			{showClear && (
				<button className="btn btn-block btn-light" onClick={clearAll}>
					Clear
				</button>
			)}
		</div>
	);
};

Search.propTypes = {
	showClear: PropTypes.bool.isRequired,
	clearAll: PropTypes.func.isRequired,
	setAlert: PropTypes.func.isRequired,
};

export default Search;
