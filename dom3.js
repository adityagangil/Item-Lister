var titles= document.querySelectorAll('.title');


console.log(titles);
titles[0].textContent = 'Add Items';
 
var secondItem = document.querySelectorAll('.list-group-item');
secondItem[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even= document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){ 
    odd[i].style.backgroundColor='green'; 
    even[i].style.backgroundColor = '#ccc';

}