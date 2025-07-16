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