import React, { useState } from 'react';

function CompetitiveRanks() {
	const [ranks, setRanks] = useState(['Silver I', 'Silver II']);
	const [rank, setRank] = useState('');

	const addRank = () => {
		if (!rank) return;
		setRanks([...ranks, rank]);
		setRank('');
	};

	return (
		<div>
			<h2>Competitive Ranks Progression</h2>
			<ul>
				{ranks.map((rank, index) => (
					<li key={index}>{rank}</li>
				))}
			</ul>
			<input type='text' value={rank} onChange={(e) => setRank(e.target.value)} placeholder='Add a new rank' />
			<button onClick={addRank}>Add Rank</button>
		</div>
	);
}

export default CompetitiveRanks;
