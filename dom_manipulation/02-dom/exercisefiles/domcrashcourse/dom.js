'use strict'
// document object

// console.dir(document)
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
//console.log(document.all[12]);
// console.log(document.forms[0][1]);
// console.log(document.links);
// console.log(document.images);


// selectors

// get element by id
// let header_title = document.getElementById('header-title')
// let main_header = document.getElementById('main-header')
// console.log(main_header);

// console.log(header_title.textContent);
// header_title.textContent = 'hello'
// header_title.innerText = 'good bye'
// console.log(header_title.innerText);\
// header_title.innerHTML = '<h3> achyuth</h3>'
// header_title.style.borderBottom = 'solid 3px #000'

// get elements by classname

// let header_class= document.getElementsByClassName('list-group-item')
// console.log(header_class);
// header_class[1].style.fontWeight = 'bold'
// header_class[1].style.backgroundColor = 'yellow'

// get element by tag name


// let submit = document.querySelector('input[type= "submit"]')
// submit.value = 'send'


// let lastchild = document.querySelector('.list-group-item:last-child')
// lastchild.innerText = "hefa"


// let nthchild = document.querySelector('.list-group-item:nth-child(2)')
// nthchild.innerText = "hefa"

// let titles = document.querySelectorAll('.title')
// console.log(titles);
// titles[0].textContent = 'hello'

let odd = document.querySelectorAll('li:nth-child(odd)')

for(let i =0;i<odd.length;i++){
    odd[i].style.backgroundColor = '#f4f4f4'
}

