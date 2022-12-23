import { useState} from 'react';
import '../styles/CardsDisplay.css';
import CardsArray from '../CardsArray';

const CardsDisplay = ({currScore, setCurrScore }) => {
	const [cardsArray, setCardsArray] = useState(
		CardsArray
			.slice(0)
			.map((value) => ({ value, sort: Math.random() }))
			.sort((a, b) => a.sort - b.sort)
			.map(({ value }) => value)
	);

	const cardClicked = (card) => {
		if (!card.clicked) {
			setCardsArray(
				cardsArray
					.map((val) => {
						if (val.id === card.id) {
							return { ...val, clicked: true};
						}
						return val;
					})
					.map((value) => ({ value, sort: Math.random() }))
					.sort((a, b) => a.sort - b.sort)
					.map(({ value }) => value)
			);
			setCurrScore(currScore + 1);
		} else {
			console.log(cardsArray);
			setCardsArray(
				CardsArray
					.slice(0)
					.map((value) => ({ value, sort: Math.random() }))
					.sort((a, b) => a.sort - b.sort)
					.map(({ value }) => value)
			);
			setCurrScore(0);
		}
	}

	return (
		<div className='CardsDisplay'>
			{cardsArray.map((card) => (
					<div className='card' key={card.id} onClick={() => {cardClicked(card)}}>
						<img src={card.src} alt={card.name} width={175} height={215}></img>
						<div className='name'>{card.name}</div>
					</div>
				)
			)}
		</div>
	)
}

export default CardsDisplay;