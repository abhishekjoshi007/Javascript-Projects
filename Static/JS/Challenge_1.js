//challenge_1

//using prompt for input
function ageindays()
{
var birthyr=prompt("In Which Year You Are Born?")
var res=(2020-birthyr)*365;
//creating h1 element
var h1=document.createElement('h1');
//creating text node
var textanswer=document.createTextNode("You are " + res + ' days old');
h1.setAttribute('id','ageindays');
h1.appendChild(textanswer);
document.getElementById('flex-box-result').appendChild(h1);

}

function reset()
{
    document.getElementById('ageindays').remove();
}