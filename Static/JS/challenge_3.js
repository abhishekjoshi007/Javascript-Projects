function rpsgame(yourchoice)
{   console.log(yourchoice);
    var humanchoice,botchoice;
    humanchoice=yourchoice.id;
    botchoice= notochoice(randtorps());
    console.log(botchoice);
    result=decidewinner(humanchoice,botchoice);
    console.log(result);
    message=msg(result);
    console.log(message);
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
function msg([yourscore,computerscore])
{
    //inclosed in braces as the result fun will return 2 value []
    //using "===" for condition check
    //for '0.5'==0.5 it say true but not with "==="" 
    
    if(yourscore === 0)
    {
        return {'message':"YOU LOST",'color':"red"};
    }
    
    else if(yourscore === 0.5)
    {
        return {'message':"TIED",'color':"yellow"};
    }
    else 
    {
        return {'message':"YOU WON",'color':"green"};
    }
}
