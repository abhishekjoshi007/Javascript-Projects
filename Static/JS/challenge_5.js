//In HIT you play your moves

//for track of all variables
let blackjackgame={
    //taking your score,your div
    'you':{'scorespan':'#your-blackjack-result','div':'#your-box','score':0},
    'dealer':{'scorespan':'#dealer-blackjack-result','div':'#dealer-box','score':0},
    //for picking up random card we will make an array
    'card':['2','3','4','5','6','7','8','9','10','K','Q','J','A'],
    //creating card map which consist of value of each card
    'card-map':{'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'Q':10,'J':10,'A':[1,11]},
};

//retriving data from above 
const YOU=blackjackgame['you'];
const DEALER=blackjackgame['dealer'];


//We are using query selector
//so basically this is selecting hit button id and checking for event "click" if "click" occours it calling a function "blackjackhit".

//for HIT button
document.querySelector('#blackjack-hit-button').addEventListener('click',blackjackhit);
//for DEAL button
document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);


//for sound
const hitsound=new Audio('Static/blackjack_assets/sounds/swish.m4a');

function blackjackhit()
{  let card=randomcard();
   //console.log(card);
   showcard(YOU,card);
   updatescore(YOU,card);
   showscore(YOU);
   console.log(YOU['score']);
}
 

//for picking up random card
function randomcard()
{
    let randomindex=Math.floor(Math.random()*13); //picking any random no.
    return blackjackgame['card'][randomindex]     //picking any random card with the use of random index
}


function showcard(activePlayer,card)
{
 //alert('ouch,you just ckick me!');
 let cardimage=document.createElement('img');

 //we will use string templating(used back tick here)
 cardimage.src=`Static/blackjack_assets/images/${card}.png`;
 document.querySelector(activePlayer['div']).appendChild(cardimage);
 hitsound.play();
}

//Deal button to refresh everything that is present

function blackjackdeal()
{
    //selecting all img in either of the boxes
    let yourimages=document.querySelector('#your-box').querySelectorAll('img');
    let dealerimages=document.querySelector('#dealer-box').querySelectorAll('img');


    for(i=0;i<yourimages.length;i++)
    {
        yourimages[i].remove();
    }
    
    for(i=0;i<dealerimages.length;i++)
    {
        dealerimages[i].remove();
    }
}

function updatescore(activePlayer,card)
{ //for A we use 2 cond

    if(card ==='A')
    {
        if(activePlayer['score']+blackjackgame['card-map'][card][1] <= 21)
         {
            activePlayer['score'] += blackjackgame['card-map'][card][1];
         }
         else
         activePlayer['score']+=blackjackgame['card-map'][card][0];
        
    }
    else
    { 
        activePlayer['score']+=blackjackgame['card-map'][card];
    }
}

function showscore(activeplayer)
{
  document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
}

