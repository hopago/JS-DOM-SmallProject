'use strict';

// GETELEMENTBYID
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');

// headerTitle.textContent = 'Hello'; , html 텍스트 컨텐츠 조작
// headerTitle.innerText = 'Hello'; , css 기반 조작
// headerTitle.innerHTML = '<h3>Hello</h3>'; 자식 태그 + 내용 추가
// header.style.borderBottom = 'solid 3px #000'; , css 조작

// GETELEMENTBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');

// items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i <items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTBYTAGNAME

// QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// QUERYSELECTORALL
// var titles = document.querySelectorAll('.title');

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = '#ccc';
// }

// Dom part-2
// let itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode); // #main
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode) //container

// parentElement: same work

// childNodes
// console.log(itemList.childNodes); // .list-group-item, HTML Tag
// console.log(itemList.children[1]);

// FirstChild
// console.log(itemList.firstChild); //빈 text 값, 줄바꿈으로 인한

// firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textCont = 'Hello!'; // 빈 text 값, 줄바꿈으로 인한

// lastChild, lastElement

// nextSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling); // h2 items
// console.log(itemList.previousElementSibling); // h2 items

// createEle

// create a div
// let newDiv = document.createElement('div');

// newDiv.className = 'hi';

// newDiv.id = 'hello';

// newDiv.setAttribute('title', 'Hello Div');

// Create text node

// let newDivText = document.createTextNode('Hello World');

// Add text to div

// newDiv.appendChild(newDivText);

// const container = document.querySelector('header .container');

// var h1 = document.querySelector('header h1');

// newDiv.style.fontSize = '24px'; // before push it style it

// container.insertBefore(newDiv, h1);

// Events.reference

// let button = document.getElementById('button').addEventListener('click', btnClick);

// function btnClick (e) {
    // console.dir(e.target); // where happened
    // console.dir(e.type); // what kind of event
    // e.altKey, e.shiftKey, e.offsetX, e.offsetY...

// }

// different event by mouse

// dblclick, mousedown, mouseup, mouseenter(actual parent ele), mouseleave, mouseover(will be for any overed element), mouseout

//let button = document.getElementById('button').addEventListener('dblclick', runEvent);

// let output = document.querySelector('#output');

// function onMouseMove (e) {
//     output.innerText = 'MouseX: ' + e.offsetX + 'MouseY: ' + e.offsetY;
//     box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
// }

// let box = document.getElementById('test-box').addEventListener('mousemove', onMouseMove);

// let itemInput = document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// itemInput.addEventListener('keydown', keyDown);
// itemInput.addEventListener('keyup', keyDown);
// + keypress // blur, focus, input

// function runEvent(e) {
//     console.log(e.target.value);
// }

// let select = document.querySelector('select');

// select.addEventListener('change', runEvent);

