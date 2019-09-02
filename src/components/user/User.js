import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import Repos from "../repo/Repos"

const User = ({user, getUser, getUserRepos ,match, loading, repos}) => {

	useEffect(() => {
    getUser(match.params.login);
		getUserRepos(match.params.login);
		//eslint-disable-next-line
	}, []);

		const {
			login,
			avatar_url,
			html_url,
			name,
			company,
			blog,
			location,
			email,
			hireable,
			bio,
			public_repos,
			public_gists,
			followers,
			following,
		} = user;

		if (loading) {
			return <Spinner />;
		} else {
			return (
				<Fragment>
					<Link to="/" className="btn btn-light">
						Back to Home
					</Link>
					Hireable:{' '}
					{hireable ? (
						<i className="fas fa-check text-success" />
					) : (
						<i className="fas fa-times-circle text-danger" />
					)}
					<div className="card grid-2">
						<div className="all-center">
							<img
								src={avatar_url}
								className="round-img"
								alt=""
								style={{ width: '150px' }}
							/>
							<h1>{name}</h1>
							{location && <p>Location: {location}</p>}
						</div>
						<div>
							{bio && (
								<Fragment>
									<h3>bio: </h3>
									<p>{bio}</p>
								</Fragment>
							)}
							<a href={html_url} className="btn btn-dark my-1">
								Visit My Profile
							</a>
							<ul>
								<li>
									{login && (
										<Fragment>
											<p>
												<strong>Username: </strong> {login}
											</p>
										</Fragment>
									)}
								</li>
								<li>
									{email && (
										<Fragment>
											<p>
												{' '}
												<strong>Email: </strong> {email}
											</p>
										</Fragment>
									)}
								</li>
								<li>
									{blog && (
										<Fragment>
											<p>
												{' '}
												<strong>Website: </strong> <a href={blog}> {blog} </a>
											</p>
										</Fragment>
									)}
								</li>
								<li>
									{company && (
										<Fragment>
											<p>
												<strong>Company: </strong> {company}
											</p>
										</Fragment>
									)}
								</li>
							</ul>
						</div>
					</div>
					<div className="card text-center">
						<div className="badge badge-primary">
							<p>Followers: {followers}</p>
						</div>
						<div className="badge badge-success">
							<p>Following: {following}</p>
						</div>
						<div className="badge badge-dark">
							<p>Public_gists: {public_gists}</p>
						</div>
						<div className="badge badge-light">
							<p>Public_repos: {public_repos}</p>
						</div>
					</div>

          <Repos repos={repos} />
				</Fragment>
			);
		}

}

User.propTypes = {
	loading: PropTypes.bool,
	getUser: PropTypes.func.isRequired,
	user: PropTypes.object.isRequired,
	getUserRepos: PropTypes.func.isRequired,
	repos: PropTypes.array.isRequired,
};

export default User;
