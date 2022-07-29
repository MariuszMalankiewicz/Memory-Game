const CardArray =[{
    id: 0,
    img: 'imgs/one.jpg'
},
{
    id: 1,
    img: 'imgs/two.jpg'
},
{
    id: 2,
    img: 'imgs/three.jpg'
},
{
    id: 3,
    img: 'imgs/four.jpg'
},
{
    id: 4,
    img: 'imgs/five.jpg'
},
{
    id: 5,
    img: 'imgs/six.jpg'
},
{
    id: 0,
    img: 'imgs/one.jpg'
},
{
    id: 1,
    img: 'imgs/two.jpg'
},
{
    id: 2,
    img: 'imgs/three.jpg'
},
{
    id: 3,
    img: 'imgs/four.jpg'
},
{
    id: 4,
    img: 'imgs/five.jpg'
},
{
    id: 5,
    img: 'imgs/six.jpg'
}
]

let ChooseCards = [];
let ChooseCardsIds = [];
const CardsWon = [];

const CardWrapper = document.querySelector('.cards-wrapper');

function CreateCard(){
    for(let i = 0; i < 12; i++){
        const Card = document.createElement('img');
        Card.setAttribute('src', 'imgs/bg-body-card.jpg');
        Card.setAttribute('id-data', i);
        Card.addEventListener('click', FlipCard);
        CardWrapper.appendChild(Card);
    }
}

CreateCard();

function MatchCard(){
    const Cards = document.querySelectorAll('.cards-wrapper img');
    if(ChooseCards[0] === ChooseCards[1]){
        Cards[ChooseCardsIds[0]].style.display = 'none';
        Cards[ChooseCardsIds[1]].style.display = 'none';
        CardsWon.push(ChooseCards);
    }


}

function FlipCard(){
    this.style.transition = 'transform 1s';
    this.style.transform = 'RotateY(360deg)';
    let CardId = this.getAttribute('id-data');
    this.setAttribute('src', CardArray[CardId].img);
    ChooseCards.push(CardArray[CardId].id);
    ChooseCardsIds.push(CardId);
    if(ChooseCards.length === 2){
        setTimeout(MatchCard, 500);
    }
}