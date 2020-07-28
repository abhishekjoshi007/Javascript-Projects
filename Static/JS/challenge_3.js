function rpsgame(yourchoice)
{   
    console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice= notochoice(randtorps());
    console.log(botchoice);
    result=decidewinner(humanchoice,botchoice);
    console.log(result);
    message= finalmessage(result);
    console.log(message);
    rpsfrontend(humanchoice,botchoice,message);
}
function randtorps()
{
    //fun getting a random number
   return  Math.floor(Math.random()*3);
}    
function notochoice(number)
{
   return ["rock","paper","scissors"][number]
}
function decidewinner(yourchoice,computerchoice)
{
    //obeject within object 
    //dictonary in python
    //JSON object
    var rpsdatabase={
        'rock':{'rock':0.5,'scissors':1,'paper':0 },
        'scissors':{'rock':0,'paper':1,'scissors':0.5},
        'paper':{'paper':0.5,'rock':1,'scissors':0}
    }
   //imp
    var yourscore=rpsdatabase[yourchoice][computerchoice];
    var computerscore=rpsdatabase[computerchoice][yourchoice];
    
    return [yourscore,computerscore];

}
function finalmessage([yourscore,computerscore])
{
    //inclosed in braces as the result fun will return 2 value []
    //using "===" for condition check
    //for '0.5'==0.5 it say true but not with "==="" 
    
    if(yourscore === 0)
    {
        return {'message':'YOU LOST!','color':'red'};
    }
    
    else if(yourscore === 0.5)
    {
        return {'message':'TIED!','color':'yellow'};
    }
    else 
    {
        return {'message':'YOU WON!','color':'green'};
    }
}
function rpsfrontend(humanchoice,botchoice,finalmessage)
//here final message is passed as 3 parameter
{
    var imgdatabase={
        'rock':document.getElementById("rock").src,
        'paper':document.getElementById("paper").src,
        'scissors':document.getElementById("scissors").src
    }

    //remove all the img
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    //creating divs for displaying results(createelement)
    var humandiv=document.createElement('div');
    var botdiv=document.createElement('div');
    var messagediv=document.createElement('div');

    humandiv.innerHTML="<img src='"+imgdatabase[humanchoice] +"' style='box-shadow:0px 10px 50px rgba(37,50,233,1);'>" //imp
    messagediv.innerHTML="<h1 style='color: " + finalmessage['color'] + ";font-size:60px;pading:30px;'>" +finalmessage['message']+"</h1>" //imp
    
    botdiv.innerHTML="<img src='"+imgdatabase[botchoice] +"' style='box-shadow:0px 10px 50px rgba(243,38,24,1);'>" //imp
    
    document.getElementById('flex-box-rps-div').appendChild(humandiv);
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    document.getElementById('flex-box-rps-div').appendChild(botdiv);

}