import React from 'react';

function WeaponsTable() {
	const weapons = [
		{ name: 'AK-47', type: 'Rifle', damage: '36' },
		{ name: 'M4A4', type: 'Rifle', damage: '33' },
		{ name: 'AWP', type: 'Sniper Rifle', damage: '115' },
		{ name: 'Desert Eagle', type: 'Pistol', damage: '63' },
	];

	return (
		<div>
			<h2>Popular Weapons</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Damage</th>
					</tr>
				</thead>
				<tbody>
					{weapons.map((weapon, index) => (
						<tr key={index}>
							<td>{weapon.name}</td>
							<td>{weapon.type}</td>
							<td>{weapon.damage}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default WeaponsTable;
