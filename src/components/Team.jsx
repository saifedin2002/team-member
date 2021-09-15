import React from 'react';
import TeamMember from './TeamMember';
function Team() {
	return (
		<div className="row">
			<TeamMember
				info={{
					name: 'saifedin',
					img: 'https://picsum.photos/seed/picsum/200/300',
					position: 'developer',
					phone: '+931 099 111 000 2 ',
					email: 'exmaple@mail.com',
					website: 'www.example.com'
				}}
			/>
			<TeamMember
				info={{
					name: 'majied',
					img: 'https://picsum.photos/seed/picsum/200/300',
					position: 'developer',
					phone: '+931 099 111 000 2 ',
					email: 'exmaple@mail.com',
					website: 'www.example0.com'
				}}
			/>
			<TeamMember
				info={{
					name: 'ahmed',
					img: 'https://picsum.photos/seed/picsum/200/300',
					position: 'developer',
					phone: '+931 099 111 000 2 ',
					email: 'example@mail.com'
				}}
			/>
		</div>
	);
}

export default Team;
