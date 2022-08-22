// //DOM = Document Object Model
// //let val;
// //val = this; //here this indicate all the property mentioned.
// //val = window;//windows also do the same task.
// //val = window.document;
// // val = document;
// // val = document.all;//collect all the tag and put it into in a array.
// // val = document.all[2];
// // val = document.all.length;
// // val = document.head;
// // val = document.body;
// // val = document.doctype;
// // val = document.domain;
// //val = document.URL;
// // val = document.characterSet;
// // val = document.contentType;

// // val = document.forms;
// // val = document.forms[0];
// // val = document.forms[0].method;
// // val = document.forms[0].action;

// // val = document.links;
// // val = document.links[0];
// // val = document.links[0].href;
// // val = document.links[0].className;
// // val = document.links[0].classList;

// // val = document.images;

// // val = document.scripts;
// // val = document.scripts[0];
// // val = document.scripts[0].src;
// // val = document.scripts[0].getAttribute('src');

// // links = document.links;
// // let linkArr = Array.from(links);

// // linkArr.forEach(function(link){
// //     console.log(link.getAttribute('href'));
// // });

// // console.log(links);
// // console.log(val);

// //We are going to work with dom 
// //if we want to call single element using dom
// //document.getElementById() only select single element

// //Getting an Element

// // var val = document.getElementById('title');
// // //Changing style
// // document.getElementById('title').style.background = 'aqua';
// // document.getElementById('title').style.color = 'white';
// // document.getElementById('title').innerHTML = "Hellow Vaii";
// // val.innerHTML = "hahaha";

// //document.querySelector() 
// //we can by using class name,tag name,id name,attribute name;
// // var newvalue = document.querySelector('#title'); //calling by id
// // newvalue = document.querySelector('.title'); //calling by class name
// // newvalue = document.querySelector('h1'); //calling by tag name

// // newvalue = document.querySelector('li:nth-child(2)'); //accesing nth child.we can call first and last child also.
// // newvalue.style.background = 'blue';

// //DOM multiselector
// //document.getElementsByClassName():

// let list = document.getElementsByClassName('simple_class');
// list[0].style.background = 'aqua';
// list[0].style.color = 'white';
// console.log(list[0]);

// //document.getElementsByTagName()'
// list = document.getElementsByTagName('li');
// list1 = document.querySelector('ol').getElementsByTagName('li');
// console.log(list1[2]);


// // Multiselector 
// // document.getElementsByClassName()
// let list = document.getElementsByClassName('sample-class');
// list[0].style.background = 'red';
// list[0].style.color = 'white';
// list[0].style.padding = '10px';
// list[0].textContent = 'Hello World!';
// //console.log(list[0]);

// // document.getElementsByTagName()
// list = document.getElementsByTagName('li');
// list = document.querySelector('ol').getElementsByTagName('li');

// let lis = Array.from(list);
// lis.forEach(function(item){
//     //console.log(item);
// });

// // document.querySelectorAll()
// // id -> #
// // classname -> .
// // tagname -> nothing


//document.querySelectorAll() make pure array that's why we don't need to convert it into array.
// list = document.querySelectorAll('ol li');
// list.forEach(function(item){
//     //console.log(item);
// });

// let liOdd = document.querySelectorAll('li:nth-child(odd)');
// let liEve = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(item){
//     item.style.background = 'grey';
//     item.style.color = 'white';
// });

// liEve.forEach(function(item){
//     item.style.background = 'red';
//     item.style.color = 'white';
// });


// console.log(list);
