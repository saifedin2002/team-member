import React from 'react';

function TeamMember(_props) {
	return (
		<div className="col-md-4 col-sm-6 ">
			<div className="card">
				<div className="card-header"> {_props.p.img} </div>
				<div className="card-body">
					<h1>{_props.p.name}</h1>
					<p>{_props.p.postion}</p>
					<p>{_props.p.phone}</p>
					<p>{_props.p.email}</p>
				</div>
			</div>
		</div>
	);
}

export default TeamMember;
