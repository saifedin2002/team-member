import React from 'react';

function TeamMember(_props) {
	return (
		<div className="col-md-4 col-sm-6 ">
			<div className="card">
				<div className="card-header"> {_props.info.img} </div>
				<div className="card-body">
					<h1>{_props.info.name}</h1>
					<p>{_props.info.position}</p>
					<p>{_props.info.phone}</p>
					<p>{_props.info.email}</p>
					<p>{_props.info.website}</p>
				</div>
			</div>
		</div>
	);
}

export default TeamMember;
