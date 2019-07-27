'use strict'


let divMain = document.createElement("main")
document.body.appendChild(divMain);
let divContainer = document.createElement("div");
divMain.appendChild(divContainer);
divContainer.setAttribute("class", "container");
let script = document.getElementsByTagName("script")[0];
document.body.insertBefore(divMain, script);


// H1 ELEMENT
let h1 = document.createElement("h1");
divContainer.appendChild(h1);
h1.innerText = "WHATS PEOPLE SAY"
h1.style.textAlign = "center";
h1.style.fontSize = "15px";
h1.style.color = "#C59E6B";
h1.style.marginTop = "25px";

//  H2 ELEMENT
let h2 = document.createElement("h2");
divContainer.appendChild(h2);
h2.innerText = "Reviews"
h2.style.textAlign = "center";
h2.style.color = "#B1B1B1";
h2.style.fontSize = "50px";


// ROW//
let row = document.createElement("div");
row.setAttribute("class","row");
divContainer.appendChild(row);
let col4 = document.createElement("div");
col4.setAttribute("class", "col-4");
row.appendChild(col4);



//  P1 //
let p1 = document.createElement("p");
col4.appendChild(p1);
p1.innerText = "Lorem Ip type specimen  when an unknown printer took a galley of type and scrambled it to make a type 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It book. It book. It.akaslq It et arcu ";
p1.style.fontSize = "19px";
p1.style.color = "gray";
p1.style.marginTop = "80px";
p1.style.lineHeight = "35px";
p1.style.paddingLeft = "35px";


// div img1 //
let divImg1 = document.createElement("div");
let img1 = document.createElement("img");
col4.appendChild(divImg1);
divImg1.appendChild(img1);

img1.setAttribute("src", "https://cdn.pixabay.com/photo/2016/11/23/14/37/apple-1853259_1280.jpg");
img1.style.display = "flex";
img1.style.justifyContent = "center";
img1.style.width = "100px";
img1.style.height = "100px";
img1.style.borderRadius = "50%";
img1.style.marginTop = "40px";
img1.style.marginLeft = "100px";


// h4A  1//
let h4a = document.createElement("h4");
col4.appendChild(h4a);
h4a.innerText = "macbook pro";
h4a.style.fontSize = "20px";
h4a.style.color = "#C59E6A";
h4a.style.marginLeft = "90px";
h4a.style.marginTop = "20px";

// COL-4A
let col4A = document.createElement("div");
divContainer.appendChild(col4A);
col4A.setAttribute("class", "col-4");
row.appendChild(col4A);

// mix//
let p2 = document.createElement("p");
col4A.appendChild(p2);
p2.innerText = "Lorem Ip type specimen  when an unknown printer took a galley of type and scrambled it to make a type 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It book. It book. It.akaslq It et arcu"
p2.style.fontSize = "19px";
p2.style.color = "gray";
p2.style.marginTop = "80px";
p2.style.lineHeight = "35px";
p2.style.paddingLeft = "30px";

let divImg2 = document.createElement("div");
let img2 = document.createElement("img");
col4A.appendChild(divImg2);
divImg2.appendChild(img2);
img2.setAttribute("src", "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png");
img2.style.display = "flex";
img2.style.justifyContent = "center";
img2.style.width = "100px";
img2.style.height = "100px";
img2.style.borderRadius = "50%";
img2.style.marginTop = "40px";
img2.style.marginLeft = "100px";

let h4B = document.createElement("h4")
divImg2.appendChild(h4B);
h4B.innerText = "Code is my life :)"
h4B.style.color = "red";
h4B.style.fontSize = "20px";
h4B.style.marginLeft = "90px";
h4B.style.marginTop = "20px";



// last one//
let col4B = document.createElement("div");
col4B.setAttribute("class", "col-4");
divContainer.appendChild(col4B);


// p3//
let p3 = document.createElement("p");
p3.innerText = "Lorem Ip type specimen  when an unknown printer took a galley of type and scrambled it to make a type 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It book. It book. It.akaslq It et arcu"
col4B.appendChild(p3);
p2.style.fontSize = "19px";
p2.style.color = "gray";
p2.style.marginTop = "80px";
p2.style.lineHeight = "35px";
p2.style.paddingLeft = "30px";


// Img-3//
let divImg3 = document.createElement("div");
let img3 = document.createElement("img");
col4B.appendChild(divImg3);
divImg3.appendChild(img3);
img3.setAttribute("src", "https://cdn.pixabay.com/photo/2014/09/11/18/23/london-441853_1280.jpg");
img3.style.display = "flex";
img3.style.justifyContent = "center";
img3.style.width = "100px";
img3.style.height = "100px";
img3.style.borderRadius = "50%";
img3.style.marginTop = "40px";
img3.style.marginLeft = "100px";


let h4C = document.createElement("h4")
divImg3.appendChild(h4C);
h4C.innerText = "London City";
h4C.style.color = "pink";
h4C.style.fontSize = "20px";
h4C.style.marginLeft = "90px";
h4C.style.marginTop = "20px";



console.log(divMain);