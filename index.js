const area=document.getElementById("tasks");

const addtask=()=>{
    const textval=document.getElementById("textbox").value;
    const newdiv=document.createElement('div');
    newdiv.textContent=textval;
    area.appendChild(newdiv);
};