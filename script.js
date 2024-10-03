let runs = 0;
let wickets = 0;
let balls = 0;

function updateScoreboard() {
    const scoreElement = document.getElementById('score');
    const oversElement = document.getElementById('overs');
    let overs = Math.floor(balls / 6);
    let ballRemainder = balls % 6;
    scoreElement.innerHTML = `Score: ${runs}/${wickets}`;
    oversElement.innerHTML = `Overs: ${overs}.${ballRemainder}`;
}

function addRun(run) {
    runs += run;
    updateScoreboard();
}

function addWicket() {
    if (wickets < 10) {
        wickets++;
        updateScoreboard();
    }
}

function addBall() {
    balls++;
    updateScoreboard();
}
