let timeTaken = []




function startGame() {

const menu = document.getElementById('menu');
menu.classList.add('d-none');
const gameCont = document.getElementById('game');
gameCont.classList.remove('d-none');
const stat = document.getElementById('stats')
stat.classList.add('d-none')
var start = new Date().getTime();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeShapeAppear() {
    const container = document.querySelector('.game-area');
    const maxTop = container.clientHeight - 100; // minimum width 100px
    const maxLeft = container.clientWidth - 100;

    let width = (Math.random() * 200) + 100;
    if (width > container.clientWidth) width = container.clientWidth;
    if (width > container.clientHeight) width = container.clientHeight;

    const top = Math.random() * (container.clientHeight - width);
    const left = Math.random() * (container.clientWidth - width);

    if (Math.random() > 0.5) {
        document.getElementById("shape").style.borderRadius = "50%";
    } else {
        document.getElementById("shape").style.borderRadius = "0";
    }
    document.getElementById("shape").style.backgroundColor = getRandomColor();

    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.display = "block";
    start = new Date().getTime();
}

function appearAfterDelay() {
    setTimeout(makeShapeAppear, Math.random() * 2000);
}
appearAfterDelay();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    let end = new Date().getTime();
    let timeTakenValue = (end - start) / 1000;
    timeTaken.push(timeTakenValue);
    document.getElementById("timeTaken").innerHTML = timeTakenValue + "s";
    populateAllTimesList();
    appearAfterDelay();
}
}



function populateAllTimesList() {
    const allTimesList = document.getElementById('allTimes');
    allTimesList.innerHTML = '';
    timeTaken.forEach(time => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = time.toFixed(3) + 's';
        allTimesList.appendChild(li);
    });
}

function home(){
    const menu = document.getElementById('menu');
menu.classList.remove('d-none');
const gameCont = document.getElementById('game');
gameCont.classList.add('d-none')
const stat = document.getElementById('stats')
stat.classList.add('d-none')

}

function loadStat(){
    const stat = document.getElementById('stats');
    stat.classList.remove('d-none');
    const menu = document.getElementById('menu');
menu.classList.add('d-none');
const gameCont = document.getElementById('game');
gameCont.classList.add('d-none')
}