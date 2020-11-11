const team = {
  _players: [
    {firstName: 'Pablo', lastName: 'Alvarez', age: 22},
    {firstName: 'Rui', lastName: 'Lopez', age: 21},
    {firstName: 'Carlos', lastName: 'Tevez', age: 33},
    ],

  _games: [
    {opponent: 'Team A', teamPoints: 33, opponentPoints: 22},
    {opponent: 'Team B', teamPoints: 59, opponentPoints: 4},
    {opponent: 'Team C', teamPoints: 12, opponentPoints: 0},
    ],

  get players() {
    return this._players;
    },

  get games() {
    return this._games;
    },

  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    }
    this.players.push(player);
    },

  addGame(oppName, points, oppPoints) {
    const game = {
    opponents: oppName,
    points: points,
    opponentsPoints: oppPoints,
    }
    this.games.push(game);
    },
};

  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);

  // console.log(team.players);

  team.addGame('Team A', 40, 20);
  team.addGame('Team B', 33, 40);
  team.addGame('Team C', 77, 60);

  // console.log(team.games);

  
