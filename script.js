function Player(name) {
    this.name = name;
    this.playerXp = 0;

}

Player.prototype.gainXp = function (newXp) {
    this.playerXp += newXp;
}

let player1 = new Player('John');
let player2 = new Player('Sarah');