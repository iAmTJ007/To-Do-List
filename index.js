const area=document.getElementById("tasks");

const addtask=()=>{
    const textval=document.getElementById("textbox").value;
    const newdiv=document.createElement('div');
    newdiv.className="newdiv"
    newdiv.innerHTML=`
                <img src="hook-1727484_1920.png" onclick="completetask()" alt="">
                <p>${textval}</p>
                <img src="remove.png" onclick="deletetask()" alt="">       
    `;
    area.appendChild(newdiv);
};
const completetask=()=>{
    
}