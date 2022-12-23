const rc = require.context('./images', false, /\.(png|jpe?g)$/);

const CardsArray = [
	{name: 'Adele'},
	{name: 'Pope Benedict XVI'},
	{name: 'Jeff Bezos'},
	{name: 'Warren Buffet'},
	{name: 'George W. Bush'},
	{name: 'Catherine'},
	{name: 'Bill Clinton'},
	{name: 'George Clooney'},
	{name: 'Tim Cook'},
	{name: 'Jamie Dimon'},
	{name: 'Mario Draghi'},
	{name: 'Recep Tayyip Erdogan'},
	{name: 'Ma Huateng'},
	{name: 'LeBron James'},
	{name: 'Hu Jintao'},
	{name: 'Steve Jobs'},
	{name: 'John Kerry'},
	{name: 'Christine Lagarde'},
	{name: 'Dalai Lama'},
	{name: 'Rupert Mudoch'},
	{name: 'Elon Musk'},
	{name: 'Benjamin Netanyahu'},
	{name: 'Condoleezza Rice'},
	{name: 'Elizabeth Warren'},
	{name: 'Mark Zuckerberg'},
];

for (let i = 0; i < CardsArray.length; i += 1) {
	CardsArray[i].id = i + 1;
	CardsArray[i].src = rc(rc.keys()[i]);
	CardsArray[i].clicked = false;
}

export default CardsArray;
