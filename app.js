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

let ChooseCardsNames = [];
let ChooseCardsIds = [];
const WonCards = [];
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

function CheckMatchCard(){
    const Cards = document.querySelectorAll('.cards-wrapper img');


    if(ChooseCardsNames[0] === ChooseCardsNames[1]){
        Cards[ChooseCardsIds[0]].style.display = 'none';
        Cards[ChooseCardsIds[1]].style.display = 'none';
        WonCards.push(ChooseCardsNames);
        if(WonCards.length === CardArray.length/2){
            alert('U WIN!');
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
    if(ChooseCardsIds[0] === ChooseCardsIds[1]){
        this.setAttribute('src', 'imgs/bg-body-card.jpg');
        ChooseCardsNames = [];
        ChooseCardsIds = [];
    }
    console.log(ChooseCardsNames);
    console.log(ChooseCardsIds);
    if(ChooseCardsNames.length === 2){
        setTimeout(CheckMatchCard, 500);
    }
}

