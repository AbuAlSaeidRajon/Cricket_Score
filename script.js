let score = 0;
let wickets = 0;
let overs = 0;
let balls = 0;
const totalOvers = 20;
const maxWickets = 10;
const batsmen = [];

function updateDisplay() {
    document.getElementById("score").innerText = `Score: ${score}/${wickets}`;
    document.getElementById("overs").innerText = `Overs: ${Math.floor(overs)}.${balls}`;
    document.getElementById("wickets").innerText = `Wickets: ${wickets}`;
}

function addBatsman() {
    const batsmanName = document.getElementById("batsman-name").value;
    if (batsmanName !== "") {
        batsmen.push(batsmanName);
        const battingList = document.getElementById("batting-order");
        const listItem = document.createElement("li");
        listItem.textContent = batsmanName;
        battingList.appendChild(listItem);
        document.getElementById("batsman-name").value = '';
    }
}

function addRun(runs) {
    score += runs;
    incrementBall();
}

function addWicket() {
    if (wickets < maxWickets) {
        wickets += 1;
        incrementBall();
    } else {
        alert("All wickets are down!");
    }
}

function incrementBall() {
    balls += 1;
    if (balls === 6) {
        balls = 0;
        overs += 1;
    }
    updateDisplay();
}

function addNoBall() {
    score += 1;
    // No increment of ball for no ball
    updateDisplay();
}

function addWideBall() {
    score += 1;
    // No increment of ball for wide ball
    updateDisplay();
}

function addBye() {
    score += 1;
    incrementBall();
}

function addLegBye() {
    score += 1;
    incrementBall();
}
