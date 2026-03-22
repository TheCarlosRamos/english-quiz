(function(){
  const DATA = [
    { en: 'I am happy.', pt: 'Eu estou feliz.' },
    { en: 'You are welcome.', pt: 'De nada.' },
    { en: 'He is tall.', pt: 'Ele é alto.' },
    { en: 'She is at work.', pt: 'Ela está no trabalho.' },
    { en: 'It is important.', pt: 'É importante.' },
    { en: 'We are here.', pt: 'Nós estamos aqui.' },
    { en: 'They are doctors.', pt: 'Eles são médicos.' },
    { en: 'I am from São Paulo.', pt: 'Eu sou de São Paulo.' },
    { en: 'You are early.', pt: 'Você está adiantado.' },
    { en: 'He is my friend.', pt: 'Ele é meu amigo.' },
    { en: 'She is studying.', pt: 'Ela está estudando.' },
    { en: 'It is a good idea.', pt: 'É uma boa ideia.' },
    { en: 'We are cousins.', pt: 'Nós somos primos.' },
    { en: 'They are in the park.', pt: 'Eles estão no parque.' },
    { en: 'I am tired.', pt: 'Eu estou cansado.' },
    { en: 'You are right about that.', pt: 'Você está certo quanto a isso.' },
    { en: 'He is on vacation.', pt: 'Ele está de férias.' },
    { en: 'She is very smart.', pt: 'Ela é muito inteligente.' },
    { en: 'It is noon.', pt: 'É meio-dia.' },
    { en: 'We are ready to go.', pt: 'Nós estamos prontos para ir.' },
  ];

  QuizCore.createGame(DATA, { title: 'Frases afirmativas com verb to be', rounds: 10 });
})();
