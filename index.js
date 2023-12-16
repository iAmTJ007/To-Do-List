const area=document.getElementById("tasks");
var i=0;
const addtask=()=>{
    const textval=document.getElementById("textbox").value;
    const newdiv=document.createElement('div');
    newdiv.className="newdiv";
    newdiv.id=i+"";
    i+=1;
    newdiv.innerHTML=`
                <img src="hook-1727484_1920.png" onclick="completetask('${i}p')" alt="">
                <p id='${i}p'>${textval}</p>
                <img src="remove.png" onclick="deletetask(${newdiv.id})" alt="">       
    `;
    area.appendChild(newdiv);
};
const completetask=(id)=>{
    const node=document.getElementById(id);
    node.classList.toggle("checked");  // we use css for this
}
const deletetask=(id)=>{
    const nodeToDelete=document.getElementById(id);
    area.removeChild(nodeToDelete);
}