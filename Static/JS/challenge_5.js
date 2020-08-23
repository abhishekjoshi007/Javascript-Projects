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
    //for win ,loss and drew table
    'win':0,
    'loss':0,
    'drew':0,
    //for cheking that hit button will not be pressed after stand and deal button should work at the end
    'isstand':false,
    'turnover':false,
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
//for stand Button
document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackstand);



//for sound
const hitsound=new Audio('Static/blackjack_assets/sounds/swish.m4a');
const winsound=new Audio('Static/blackjack_assets/sounds/Cash.mp3');
const losssound=new Audio('Static/blackjack_assets/sounds/aww.mp3');

function blackjackhit()
{  
    //runs when stand button haven't been pressed / we are not allowed to press hit after we have hit stand
   
   if(blackjackgame['isstand']===false)
   { 
   let card=randomcard();
   //console.log(card);
   showcard(YOU,card);
   updatescore(YOU,card);
   showscore(YOU);
   console.log(YOU['score']);
   }
}
 

//for picking up random card
function randomcard()
{
    let randomindex=Math.floor(Math.random()*13); //picking any random no.
    return blackjackgame['card'][randomindex]     //picking any random card with the use of random index
}


function showcard(activePlayer,card)
{  
    //we are putting "BUST" cond. Here. 
    if(activePlayer['score'] <=21)
    {
 //alert('ouch,you just ckick me!');

 //creating img
 let cardimage=document.createElement('img');

 //we will use string templating(used back tick here)
 cardimage.src=`Static/blackjack_assets/images/${card}.png`;
 document.querySelector(activePlayer['div']).appendChild(cardimage);
 hitsound.play();
    }
}

//Deal button to refresh everything that is present

function blackjackdeal()
{
   if(blackjackgame['turnover']=== true)
   {
    //for the next game
    blackjackgame['isstand']=false;


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

    //after clicking deal the score should reset
    YOU['score']=0;
    DEALER['score']=0;
    
    //to refresh the score
    document.querySelector('#your-blackjack-result').textContent=0;
    document.querySelector('#dealer-blackjack-result').textContent=0;
    
    document.querySelector('#your-blackjack-result').style.color='white';
    document.querySelector('#dealer-blackjack-result').style.color='white';

    //to change the result of win ,loss to lets play and its style
    document.querySelector('#blackjackresult').textContent="Let's Play";
    document.querySelector('#blackjackresult').style.color='black';


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
  if(activeplayer['score'] > 21)
  {
      document.querySelector(activeplayer['scorespan']).textContent='BUST!';
      document.querySelector(activeplayer['scorespan']).style.color='red';
      
  }
  else
  {
  document.querySelector(activeplayer['scorespan']).textContent=activeplayer['score'];
  }
}

function blackjackstand()
{
   //whrn stand button is clicked
   blackjackgame['isstand']=true;
    let card=randomcard();
   //console.log(card);
   showcard(DEALER,card);
   updatescore(DEALER,card);
   showscore(DEALER);
  
   if(DEALER['score'] > 15)
   {
       //here dealer is done playing
       blackjackgame['turnover']=true;

       let winner=compute();
       showresult(winner);
   }

}


 //function for computing winner
 function compute()
 {
     let winner;//declaring winner 
    
     if(YOU['score']<=21)
     {
         if(YOU['score'] > DEALER['score'] || (DEALER['score'] > 21))
         {
            blackjackgame['win']++; 
            winner=YOU;
         }
         else if(YOU['score'] === DEALER['score'])
         {
            blackjackgame['drew']++; 
         }
         else if(YOU['score'] < DEALER['score'])
         {
            blackjackgame['loss']++;  
            winner=DEALER;
         }
     }

     else if(YOU['score'] >21 && DEALER['score']<=21)
     {
        blackjackgame['loss']++;  
        winner=DEALER;
     }
     
     else if(YOU['score'] >21 && DEALER['score']>21)
     {
        blackjackgame['drew']++;  
    
     }

     
     return winner;


 }

 function showresult(winner)
 {
     let mesage,message_color;

    //if all turn are over display result
    if(blackjackgame['turnover']===true)
    {
     if(winner===YOU)
     {
         //for win table score
         document.querySelector('#wins').textContent=blackjackgame['win'];
         message='YOU Won!';
         messagecolor='green';
         winsound.play();

     }
     else if(winner===DEALER)
     {
        //for loss table score
        document.querySelector('#losses').textContent=blackjackgame['loss'];
          
        message='DEALER Won!';
         messagecolor='red';
        losssound.play();

         
     }
     else 
     {
        //for draw table score
        document.querySelector('#draws').textContent=blackjackgame['drew'];
          
        message='Drew!';
         messagecolor='black'
        
         
     }
     document.querySelector('#blackjackresult').textContent=message;
     document.querySelector('#blackjackresult').style.color=messagecolor;
    }
     
 }