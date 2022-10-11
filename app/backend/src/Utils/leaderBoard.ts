const pontos = (totalDePontos: number, totalDeJogos: number) => {
  const eficiencia = ((totalDePontos / (totalDeJogos * 3)) * 100).toFixed(2);
  return eficiencia;
};

const placar = (partidasDoTime: any) => {
  let vitorias = 0;
  let derrotas = 0;
  let empates = 0;
  let totalDePontos = 0;

  partidasDoTime.forEach(({ homeTeamGoals, awayTeamGoals }: any) => {
    if (homeTeamGoals > awayTeamGoals) {
      vitorias += 1;
      totalDePontos += 3;
    } else if (awayTeamGoals > homeTeamGoals) {
      derrotas += 1;
    } else {
      empates += 1;
      totalDePontos += 1;
    }
  });
  return { vitorias, derrotas, empates, totalDePontos };
};

const saldoDeGols = (partidasDoTime: any) => {
  const golsMarcados = partidasDoTime
    .reduce((acc:number, partida:any) => acc + partida.homeTeamGoals, 0);
  const golsSofridos = partidasDoTime
    .reduce((acc:number, partida:any) => acc + partida.awayTeamGoals, 0);
  const saldo = golsMarcados - golsSofridos;
  return { golsMarcados, golsSofridos, saldo };
};

const criarPlacares = ({ teamName, matchesHome }: any) => {
  const totalDeJogos = matchesHome.length;
  const { vitorias, derrotas, empates, totalDePontos } = placar(matchesHome);
  const { golsMarcados, golsSofridos, saldo } = saldoDeGols(matchesHome);

  return {
    name: teamName,
    totalPoints: totalDePontos,
    totalGames: totalDeJogos,
    totalVictories: vitorias,
    totalDraws: empates,
    totalLosses: derrotas,
    goalsFavor: golsMarcados,
    goalsOwn: golsSofridos,
    goalsBalance: saldo,
    efficiency: pontos(totalDePontos, totalDeJogos),
  };
};

const classificarPlacares = (placares: any) => {
  const placaresEmOrdem = placares.sort((a: any, b: any) => {
    if (a.totalPoints < b.totalPoints) { return 1; }
    if (a.totalPoints > b.totalPoints) { return -1; }
    if (a.totalVictories < b.totalVictories) { return 1; }
    if (a.totalVictories > b.totalVictories) { return -1; }
    if (a.goalsBalance < b.goalsBalance) { return 1; }
    if (a.goalsBalance > b.goalsBalance) { return -1; }
    if (a.goalsFavor < b.goalsFavor) { return 1; }
    if (a.goalsFavor > b.goalsFavor) { return -1; }
    if (a.goalsOwn < b.goalsOwn) { return 1; }
    if (a.goalsOwn > b.goalsOwn) { return -1; }
    return 0;
  });
  return placaresEmOrdem;
};

export { criarPlacares, classificarPlacares };
