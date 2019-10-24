// Put code of task C here
'use strict';
const main = document.querySelector('main');

const image = document.createElement('img');
image.src = 'http://placekitten.com/320/162';
image.setAttribute('alt','some cat');

const figCapt = document.createElement(`figcaption`);
figCapt.innerHTML = '<h1>Some caption</h1>';

const fig = document.createElement('figure');
fig.appendChild(image);
fig.append(figCapt);

const h2 = document.createElement('h2');
h2.innerHTML = 'Some header';

const header = document.createElement('header');
header.appendChild(h2);


const para = document.createElement('p');
para.innerHTML = 'some text';

const article = document.createElement('article');

article.appendChild(header);
article.appendChild(fig);
article.appendChild(para);

main.appendChild(article);