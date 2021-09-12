import React from 'react';
import TeamMember from './TeamMember';
function Team() {
	return (
		<div className="row">
			<TeamMember
				p={{
					name: 'saifedin',
					img: 'https://picsum.photos/seed/picsum/200/300',
					postion: 'developer',
					phone: '+931 099 111 000 2 ',
					email: 'exmple@mail.com'
				}}
			/>
			<TeamMember
				p={{
					name: 'majied',
					img: 'https://picsum.photos/seed/picsum/200/300',
					postion: 'developer',
					phone: '+931 099 111 000 2 ',
					email: 'exmple@mail.com'
				}}
			/>
			<TeamMember
				p={{
					name: 'ahmed',
					img: 'https://picsum.photos/seed/picsum/200/300',
					postion: 'developer',
					phone: '+931 099 111 000 2 ',
					email: 'exmple@mail.com'
				}}
			/>
		</div>
	);
}

export default Team;
