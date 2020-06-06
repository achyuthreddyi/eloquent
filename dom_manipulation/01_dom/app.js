// console.log(window);




// single element selector
// const form = document.getElementById('my-form')
// const container = document.querySelector('.container')
// console.log(container);


//  multiple element selector

// console.log(document.querySelectorAll('.item'));

// const items = document.querySelectorAll('.item')

// // console.log(items);

// items.forEach(element => {
//     console.log(element);
    
    
// });


// const ul = document.querySelector('.items');

// // ul.remove()
// ul.firstElementChild.textContent = 'hello'
// // ul.children[1].innerText = 'achyuth'
// // ul.children[1].textContent = 'reddy'
// ul.lastElementChild.innerHTML = '<h1>hello babe</h1>'


// const btn = document.querySelector('.btn')

// btn.style.background  = 'red'



// const btn = document.querySelector('.btn')

// btn.addEventListener('mouseout', (e) =>{
//     e.preventDefault()
//     document.querySelector('#my-form').style.background = '#ccc' 
//     document.querySelector('body').classList.add('bg-dark');
   


// })



const myform = document.querySelector('#my-form')

const nameInput = document.querySelector('#name')

const emailInput = document.querySelector('#email')

const submit_button = document.querySelector('.btn')

const msg = document.querySelector('.msg')

const userlst =document.querySelector('#users')


myform.addEventListener('submit', onsubmit)

function onsubmit(e){
    e.preventDefault();
    
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'please enter all fields'
        setTimeout(() => msg.remove(),2000)
    }
    else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput}`))

        msg.classList.add('success')
        msg.innerHTML = "added successfully !!!"
        setTimeout( () => msg.remove() , 2000)

        userlst.appendChild(li)
        // clear the fields

        nameInput.value = ''
        emailInput.value = ''
        
    }
    
}