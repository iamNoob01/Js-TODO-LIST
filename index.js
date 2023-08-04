function addtolist(){
     var inputval = document.getElementById('inputtext').value
     var newdiv = document.getElementById('newdiv')

     var intonewdiv = document.createElement('div')

     var todolist = document.createElement('li')
     todolist.innerHTML = inputval

     var deletebtn = document.createElement('i')
     deletebtn.classList.add('fa')
     deletebtn.classList.add('fa-trash')

     intonewdiv.appendChild(todolist)
     intonewdiv.appendChild(deletebtn)
     newdiv.appendChild(intonewdiv)
     
}

var newdiv = document.getElementById('newdiv')
newdiv.addEventListener('click', deleteElement)

function deleteElement(event) {
     const element = event.target
     if(element.classList[0] == 'fa'){
          element.parentElement.remove()
     }
}