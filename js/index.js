const body = document.querySelector("body");

const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");

copyright.innerHTML = `© ${thisYear} Elena Sviridova. All rights reserved.`;

footer.appendChild(copyright);