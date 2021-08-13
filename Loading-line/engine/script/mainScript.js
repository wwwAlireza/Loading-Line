const loadingPercent = document.querySelector(".loading-percent");
const loadingLineContainer = document.querySelector(".loading-line-container");

var percent = 0;
var loop = setInterval(() => {
    if (percent != 100) {
        percent++;
        loadingPercent.innerText = `${percent}%`;
    } else {
        clearInterval(loop)
        loadingLineContainer.style.boxShadow = "0px 0px 2px 3px rgba(25, 135, 84, .5)"
        loadingLineContainer.style.borderColor = "rgba(25, 135, 84, .5)";
        loadingPercent.innerText = `Done !`;
    }
}, 40)