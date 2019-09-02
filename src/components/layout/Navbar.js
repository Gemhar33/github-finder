import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import logo from './github.png';

const Navbar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<div style={{ display: 'flex' }}>
					<img
						src={logo}
						alt="logo"
						style={{ width: '40px', marginRight: '10px' }}
					/>
					{title}
				</div>
			</h1>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

Navbar.defaultProps = {
	title: 'Github Finder',
	icon: 'fab fa-github',
};

Navbar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

export default Navbar;
