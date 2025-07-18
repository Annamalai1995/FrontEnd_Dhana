let Places=new Array('Manali','ooty','Kashmir','Munnar','wayanad')
let  Adding=()=>
{
    let newvalue=document.getElementById('Place').value;
    Places.push(newvalue)
    alert(newvalue+"Added successfully")
    List()


}
let List=()=>
{
    let temp=""
    Places.map((getting)=>{
        temp+="<tr><td><ul><li>"+getting+"</li></ul></td></tr>";

    })
    document.getElementById('list').innerHTML="<table><thead bgcolor='blue'><tr><th>COOLING PLACES</th></tr></thead><tbody bgcolor='violet' align='center'>"+temp+"</tbody></table>";
    
}
let Update=()=>
{
    let updateindex=document.getElementById('Place').value;
    let newvalue =prompt("Tell us update places"+Places)
    Places[updateindex]=newvalue; //array[1]="Delhi"
    List();


}
let Remove=()=>
{
    var delete_values=document.getElementById('Place').value
    Places=Places.filter((getting)=>
    {
        if(getting!==delete_values)      //Manali!==Manali
        {
            return getting;      
        }

    })
    Places.map((get)=>{
        console.log(get)
    });
 List()       

}
let Find=()=>
{
    let search=document.getElementById('Place').value;
    for(i=0;i<Places.length;i++)
    {
        if(Places[i]===search)
        {
            return i;
        }
    }

}

let First=()=>
{
    let search=document.getElementById('Place').value;
    for(i=0;i<Places.length;i++)
    {
        alert("Places is "+Places[i]);
        break;
    }

}





