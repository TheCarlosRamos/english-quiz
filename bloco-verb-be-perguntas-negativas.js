(function(){
  const DATA = [
    { en: "Aren't you coming?", pt: 'Você não vem?' },
    { en: "Isn't he your brother?", pt: 'Ele não é seu irmão?' },
    { en: "Aren't they students?", pt: 'Eles não são estudantes?' },
    { en: "Isn't she a nurse?", pt: 'Ela não é enfermeira?' },
    { en: "Aren't we early?", pt: 'Não estamos adiantados?' },
    { en: "Isn't it obvious?", pt: 'Não está óbvio?' },
    { en: "Aren't you cold?", pt: 'Você não está com frio?' },
    { en: "Isn't this your pen?", pt: 'Esta não é sua caneta?' },
    { en: "Aren't they at home?", pt: 'Eles não estão em casa?' },
    { en: "Isn't he tired?", pt: 'Ele não está cansado?' },
    { en: "Aren't you hungry?", pt: 'Você não está com fome?' },
    { en: "Isn't she ready?", pt: 'Ela não está pronta?' },
    { en: "Aren't we friends?", pt: 'Nós não somos amigos?' },
    { en: "Isn't it your turn?", pt: 'Não é a sua vez?' },
    { en: "Aren't they late?", pt: 'Eles não estão atrasados?' },
    { en: "Isn't he a teacher?", pt: 'Ele não é professor?' },
    { en: "Aren't you sure?", pt: 'Você não tem certeza?' },
    { en: "Isn't she from Spain?", pt: 'Ela não é da Espanha?' },
    { en: "Aren't we lost?", pt: 'Nós não estamos perdidos?' },
    { en: "Isn't it expensive?", pt: 'Não é caro?' },
  ];

  QuizCore.createGame(DATA, { title: 'Perguntas negativas com verb to be', rounds: 10 });
})();
