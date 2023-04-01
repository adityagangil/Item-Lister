var itemList = document.querySelector('#items')

itemList.parentNode.style.backgroundColor = "#f4f4f4"
itemList.parentElement.style.backgroundColor = "#f4f4f4"

itemList.children[1].style.backgroundColor = "yellow"

itemList.firstElementChild.textContent = "Hello 1"
itemList.lastElementChild.textContent = "Hello 4"

itemList.previousElementSibling.style.color = "green";

var newDiv = document.createElement('div')
newDiv.className = "hello"
newDiv.id = "hello1"
newDiv.setAttribute('title', 'Hello Div')

var newDivText = document.createTextNode('Hello World')
newDiv.appendChild(newDivText)

var container = document.querySelector('header .container')
var h1 = document.querySelector('header h1')


newDiv.style.fontSize = '25px';

container.insertBefore(newDiv, h1)
