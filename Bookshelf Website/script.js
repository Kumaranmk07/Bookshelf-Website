var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var plusbtn=document.getElementById("popup")
plusbtn.addEventListener("click",function(){
    popupbox.style.display="block"
    popupoverlay.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display="none"
    popupoverlay.style.display="none"
})
var bookcontainer=document.querySelector(".container")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdescription=document.getElementById("description")
var addbtn=document.getElementById("add-book")
addbtn.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick='del(event)'>Delete</button>`
    bookcontainer.append(div)
    popupbox.style.display="none"
    popupoverlay.style.display="none"

})
function del(event){
    event.target.parentElement.remove()
}
