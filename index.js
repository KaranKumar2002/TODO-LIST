const inputbox=document.getElementById("input-box");
const table=document.getElementById("list");
function AddTask()
{
  if(inputbox.value==='')
    {
      alert("You must write something !");
    }
  else
    {
      let item=document.createElement("li");
      item.innerHTML=inputbox.value;
      table.appendChild(item);
      let span=document.createElement("span");
      span.innerHTML="\u00d7";
      item.appendChild(span);
    }
  inputbox.value='';
  save();
}

table.addEventListener("click",function(e){
        if(e.target.tagName==="LI"){
          e.target.classList.toggle("checked");
        }
  else if(e.target.tagName==="SPAN")
    {
      e.target.parentElement.remove();
    }
  save();
},false);

function save()
{
  localStorage.setItem("data",table.innerHTML);
}
function show()
{
  table.innerHTML=localStorage.getItem("data");
}
show();
