import MapImage from './components/MapImage';
import WeaponsTable from './components/WeaponsTable';
import CompetitiveRanks from './components/CompetitiveRanks';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>Counter-Strike: Global Offensive Essentials</h1>
			<div className='content-container'>
        
				<div className='map-container'>
					<MapImage src='https://steamuserimages-a.akamaihd.net/ugc/429320160979732446/9B2E6DC6228172BC6F98A7C21AFE82B2C763EEB4/' alt='Dust II Map' />
				</div>
				<div className='right-container'>
					<WeaponsTable />
					<CompetitiveRanks />
				</div>
			</div>
		</div>
	);
}

export default App;
