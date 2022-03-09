//chrome://extensions/
let mylead=[]
const inputEl=document.getElementById("input-el")
const saveEl=document.getElementById("save-el")
const ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")
let lfls=JSON.parse(localStorage.getItem("mylead"))
console.log(lfls)
let delEl=document.getElementById("del-el") 
delEl.addEventListener("dblclick",function(){
    console.log("deleted!!")
    localStorage.clear()
    mylead=[]
    renderLeads(mylead)
})

if (lfls) {
    mylead = lfls
    renderLeads(mylead)
}
tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        mylead.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(mylead) )
        renderLeads(mylead)
    })
})
saveEl.addEventListener("click",function(){
    mylead.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("mylead",JSON.stringify(mylead))
    
    renderLeads(mylead)
    // console.log(localStorage.getItem(mylead))
    inputEl.value=""
    
})



function renderLeads(mylead){
    let listitems=""
    for(let i=0;i<mylead.length;i++){
        // ulEl.innerHTML+="<li>" +mylead[i]+"</li> "
        // const li=document.createElement("li")
        // li.textContent=mylead[i]
        // ulEl.append(li)
        listitems+=`
        <li>
        <a target=_blank href='${mylead[i]}'>
        ${mylead[i]}
        </a>
        </li>
     `
    }ulEl.innerHTML=listitems;
}
mylead=[]
    



