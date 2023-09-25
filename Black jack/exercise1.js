function countBlackJackPoints(cards) {
    if (!cards) return null;
    let points = 0;
    let aceCount = 0;
    for (let card of cards) {
        let suitAndRank = card.split(' ');
        let rank = suitAndRank[1];
        if (['Knekt', 'Dame', 'Konge'].includes(rank)) points += 10;
        else if (rank == 'Ess') aceCount++;
        else points += parseInt(rank);
    }
    while (aceCount > 0) {
        points += points + 11 >= 21 ? 1 : 11;
        aceCount--;
    }
    return points;
}