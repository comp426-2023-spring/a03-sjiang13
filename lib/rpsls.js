export function rps(shot) {
    const moves = ['rock', 'paper', 'scissors'];
    let opponent = moves[Math.floor(Math.random() * moves.length)];
    let result = "";
    if (shot == undefined) {
        return { player: opponent }
    }
    if (!moves.includes(shot)) {
        console.error(`${shot} is out of range`);
        throw new Error();
    }

    if (opponent == shot) {
        result = "tie"
    }
    else if ((opponent == 'rock' && shot == 'scissors') || (opponent == 'paper' && shot == 'rock') || (opponent == 'scissors' && shot == 'paper')) {
        result = "lose";
    } else {
        result = "win";
    }
    return { "player": shot, "opponent": opponent, "result": result }
}


export function rpsls(shot) {
    const moves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    let opponent = moves[Math.floor(Math.random() * moves.length)];
    if (shot == undefined) {
        return { player: opponent }
    }
    if (!moves.includes(shot)) {
        console.error(`${shot} is out of range`);
        throw new Error();
    }

    if (opponent == shot) {
        result = "tie"
    }
    else if ((opponent == "scissors" && shot == "paper") || (opponent == "paper" && shot == "rock") || (opponent == "rock" && shot == "lizard")
        || (opponent == "lizard" && shot == "spock") || (opponent == "spock" && shot == "scissors") || (opponent == "scissors" && shot == "lizard")
        || (opponent == "lizard" && shot == "paper") || (opponent == "paper" && shot == "spock") || (opponent == "spock" && shot == "rock") || (opponent == "rock" && shot == "scissors")) {
        result = "lose";
    } else {
        result = "win";
    }
    return { "player": shot, "opponent": opponent, "result": result}

}