//to get all button as an array
var all_button=document.getElementsByTagName('button');
console.log(all_button);

//to remember original color for reset we are storing coor of all button 
//in an array
var copyallbutton=[];
for(let i=0;i<all_button.length;i++)
{
copyallbutton.push(all_button[i].classList[1]);
//classlist[1] for second class i.e btn-primary
//order is also preserved
}

function buttoncolorchange(buttoncolor)
{
    //console.log(buttoncolor.value);
    if(buttoncolor.value=='red')
    {
        buttonred();

    }
    else if(buttoncolor.value=='green')
    {
        buttongreen();

    }
    
    else if(buttoncolor.value=='random')
    {
        buttonrandom();

    }
    
    else if(buttoncolor.value=='reset')
    {
        buttonreset();

    }
}
function buttonred()
{
 for(let i=0;i<all_button.length;i++)
 {
     all_button[i].classList.remove(all_button[i].classList[1]);
     all_button[i].classList.add('btn-danger');
 }
}
function buttongreen()
{
 for(let i=0;i<all_button.length;i++)
 {
     all_button[i].classList.remove(all_button[i].classList[1]);
     all_button[i].classList.add('btn-success');
 }
}
function buttonreset()
{
 for(let i=0;i<all_button.length;i++)
 {
     all_button[i].classList.remove(all_button[i].classList[1]);
     all_button[i].classList.add(copyallbutton[i]);
 }
}
function buttonrandom()
{   //creating array
    let choice=['btn-primary','btn-danger','btn-success','btn-warning']
 
    for(let i=0;i<all_button.length;i++)
 {   let random_no=Math.floor(Math.random() * 4);
     all_button[i].classList.remove(all_button[i].classList[1]);
     all_button[i].classList.add(choice[random_no]);
 }

}