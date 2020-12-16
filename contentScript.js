var s = document.createElement('script');
s.setAttribute("id", "mySriptTag");
s.src = chrome.runtime.getURL('inject.js');
s.onload = function() {
    this.remove();
};
console.log(s);
document.documentElement.appendChild(s);

