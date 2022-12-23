import { useEffect } from 'react';
import '../styles/Header.css';

const Header = ({ bestScore, setBestScore, currScore }) => {
	useEffect(() => {
		if (bestScore < currScore) {
			setBestScore(currScore);
		}
	}, [currScore]);

	return (
		<div className='Header'>
			<div className='title'>Memory Card</div>
			<div className='scores'>
				<div>Best Score: {bestScore}</div>
				<div>Current Score: {currScore}</div>
			</div>
		</div>
	)
}

export default Header;
