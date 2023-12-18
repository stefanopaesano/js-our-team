const persone = [
    { nome: 'wayane barnet', rool: 'founder e ceo', imge: ' wayne-barnett-founder-ceo.jpg' },
    { nome: 'angela carrol', rool: 'founder e ceo', imge: ' angela-carrol-founder-ceo.jpg' },
    { nome: 'walter gordon', rool: 'founder e ceo', imge: ' walter-gordon-founder-ceo.jpg' },
    { nome: 'angela lopez', rool: 'founder e ceo', imge: ' angela-lopez-founder-ceo.jpg' },
    { nome: 'scott estrada', rool: 'founder e ceo', imge: ' scott-estrada-founder-ceo.jpg' },
    { nome: 'barbara chianti', rool: 'founder e ceo', imge: 'barbara-chianti-founder-ceo.jpg' },
    
  ];






for (let i = 0; i < persone.length; i++) {
    // const element = array[i];
    for (const key in persone[i]) {
        console.log( key + persone[i][key])

    }
    
}


