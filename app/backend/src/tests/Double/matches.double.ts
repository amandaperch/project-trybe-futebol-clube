export const allMatches = [
  {
    "id": 1,
    "homeTeam": 16,
    "homeTeamGoals": 1,
    "awayTeam": 8,
    "awayTeamGoals": 1,
    "inProgress": false,
    "home_team": 16,
    "away_team": 8,
    "teamHome": {
        "id": 16,
        "teamName": "São Paulo"
    },
    "teamAway": {
        "id": 8,
        "teamName": "Grêmio"
    }
  },
  {
    "id": 2,
    "homeTeam": 9,
    "homeTeamGoals": 1,
    "awayTeam": 14,
    "awayTeamGoals": 1,
    "inProgress": false,
    "home_team": 9,
    "away_team": 14,
    "teamHome": {
        "id": 9,
        "teamName": "Internacional"
    },
    "teamAway": {
        "id": 14,
        "teamName": "Santos"
    }
},
{
    "id": 3,
    "homeTeam": 4,
    "homeTeamGoals": 3,
    "awayTeam": 11,
    "awayTeamGoals": 0,
    "inProgress": false,
    "home_team": 4,
    "away_team": 11,
    "teamHome": {
        "id": 4,
        "teamName": "Corinthians"
    },
    "teamAway": {
        "id": 11,
        "teamName": "Napoli-SC"
    }
}
]


export const findAll = () => allMatches;

export const findAllFinished = () => allMatches.filter(({ inProgress }) => !inProgress);

export const findAllInProgress = () => allMatches.filter(({ inProgress }) => inProgress);