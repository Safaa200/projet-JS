var courses = [{
       
    image: './images/courses/javascriptDef.png',
    title: 'what is javascript?',
    category: 'JS',
    price: 9.9
},
{
    image: './images/courses/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: './images/courses/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: './images/courses/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: './images/courses/javascriptVariables.png',
    title: 'variables and data type of javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/courses/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: './images/courses/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: './images/courses/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: './images/courses/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: './images/courses/cssMesures.png',
    title: 'mesures and unites of CSS',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/courses/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/courses/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: './images/courses/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: './images/courses/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 29.9
},
{
    image: './images/courses/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: './images/courses/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/courses/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: './images/courses/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: './images/courses/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
}
]






let e=Math.floor(Math.random() * courses.length);
let f=Math.floor(Math.random() * courses.lenght);
let j=Math.floor(Math.random() * courses.lenght);
 document.getElementsByClassName("course1-img")[0].setAttribute("src",courses[e].image);
 document.getElementsByClassName("corses-name")[0].innerHTML=courses[e].title;
 document.getElementsByClassName("price")[0].innerHTML=courses[e].price;

 document.getElementsByClassName("course1-img")[1].setAttribute("src",courses[f].image);
 document.getElementsByClassName("corses-name")[1].innerHTML=courses[f].title;
 document.getElementsByClassName("price")[1].innerHTML=courses[f].price;
 
 document.getElementsByClassName("course1-img")[2].setAttribute("src",courses[j].image);
 document.getElementsByClassName("corses-name")[2].innerHTML=courses[j].title;
 document.getElementsByClassName("price")[2].innerHTML=courses[j].price;

myRandomNum=Math.floor(Math.random()*courses.lenght);
console.log(courses[myRandomNum]);


var myArray = [var1,var2,var3,var4];

