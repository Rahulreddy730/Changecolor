const colorBtn = document.querySelector('.colorBtn');
const leftBcg = document.querySelector('.left');

const colors = ['yellow','red','green','#3b5998'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
    //bodyBcg.style.backgroundColor = colors[2];
    let random = Math.floor(Math.random()*colors.length)
    leftBcg.style.backgroundColor = colors[random];
}

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

const hexBtn = document.querySelector('.hexBtn');
const rightBcg = document.querySelector('.right');

const hex =  document.querySelector('.hex');

hexBtn.addEventListener('click',getHex);

function getHex (){
    let hexCol ='#';
    for(let i=0; i<6; i++){

        let random = Math.floor(Math.random ()*hexNumbers.length);
        hexCol += hexNumbers[random];
        //console.log(hexCol);
    }

    rightBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}

const quotes = [
    {
        name:'Rahul Reddy',
        quote:'Getting Rich in few Days.'
    },
    {
        name:'Ravindra Reddy',
        quote:'Making to build the own House and to have rich life as his son'
    },
    {
        name:'Sumathi',
        quote:'Making all the decision in the home and having a great things'
    },
    {
        name:'Sri Laxmi Nagendra',
        quote:'Just got Married Wishing them a Happy Married Life'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}