const CardArray =[{
    name: 'sherek',
    img: 'imgs/one.jpg'
},
{
    name: 'cat',
    img: 'imgs/two.jpg'
},
{
    name: 'donkey',
    img: 'imgs/three.jpg'
},
{
    name: 'fiona',
    img: 'imgs/four.jpg'
},
{
    name: 'dragon',
    img: 'imgs/five.jpg'
},
{
    name: 'cookies',
    img: 'imgs/six.jpg'
},
{
name: 'sherek',
img: 'imgs/one.jpg'
},
{
name: 'cat',
img: 'imgs/two.jpg'
},
{
name: 'donkey',
img: 'imgs/three.jpg'
},
{
name: 'fiona',
img: 'imgs/four.jpg'
},
{
name: 'dragon',
img: 'imgs/five.jpg'
},
{
name: 'cookies',
img: 'imgs/six.jpg'
},
]

CardArray.sort(()=> Math.random() - .5);

let ChooseCardsNames = [];
let ChooseCardsIds = [];
const WonCards = [];

let CounterMoves = '';

const CardWrapper = document.querySelector('.cards-wrapper');
const BtnTwelveCard = document.getElementById('BtnTwelveCard');
const Moves = document.getElementById('Moves');
const Points = document.getElementById('Points');

function CreateTwelveCard(){
    for(let i = 0; i < 12; i++){
        const Card = document.createElement('img');
        Card.setAttribute('src', 'imgs/bg-body-card.jpg');
        Card.setAttribute('id-data', i);
        Card.addEventListener('click', FlipCard);
        CardWrapper.appendChild(Card);
        BtnTwelveCard.style.display = 'none';
        Moves.innerHTML = 'Moves: ';
        CounterMoves = '';
    }
}
BtnTwelveCard.addEventListener('click', CreateTwelveCard);

function CheckMatchCard(){
    const Cards = document.querySelectorAll('.cards-wrapper img');
    if(ChooseCardsNames[0] === ChooseCardsNames[1]){
        Cards[ChooseCardsIds[0]].style.display = 'none';
        Cards[ChooseCardsIds[1]].style.display = 'none';
        WonCards.push(ChooseCardsNames);
        Points.innerHTML = 'Points: ' + WonCards.length*2;
        if(WonCards.length === CardArray.length/2){
            BtnTwelveCard.style.display = 'block';
        }
    }else{
        Cards[ChooseCardsIds[0]].setAttribute('src', 'imgs/bg-body-card.jpg');
        Cards[ChooseCardsIds[1]].setAttribute('src', 'imgs/bg-body-card.jpg');
    }
    ChooseCardsNames = [];
    ChooseCardsIds = [];
    
}
function FlipCard(){
    this.style.transition = 'transform 1s';
    this.style.transform = 'RotateY(360deg)';
    let CardId = this.getAttribute('id-data');
    this.setAttribute('src', CardArray[CardId].img);
    ChooseCardsNames.push(CardArray[CardId].name);
    ChooseCardsIds.push(CardId);
    Moves.innerHTML = 'Moves: ' + CounterMoves++;
    if(ChooseCardsIds[0] === ChooseCardsIds[1]){
        this.setAttribute('src', 'imgs/bg-body-card.jpg');
        ChooseCardsNames = [];
        ChooseCardsIds = [];
    }
    if(ChooseCardsNames.length === 2){
        setTimeout(CheckMatchCard, 500);
    }
}

