(function(){
  const DATA = [
    { en: 'You (one person)', pt: 'Você' },
    { en: 'He', pt: 'Ele' },
    { en: 'She', pt: 'Ela' },
    { en: 'It (thing, animal, or idea)', pt: 'Ele/Ela (coisa, animal ou ideia)' },
    { en: 'He is my brother.', pt: 'Ele é meu irmão.' },
    { en: 'She works here.', pt: 'Ela trabalha aqui.' },
    { en: 'It is raining.', pt: 'Está chovendo.' },
    { en: 'You are kind.', pt: 'Você é gentil.' },
    { en: 'He has a dog.', pt: 'Ele tem um cachorro.' },
    { en: 'She likes coffee.', pt: 'Ela gosta de café.' },
    { en: 'It is on the desk.', pt: 'Está na mesa.' },
    { en: 'You look happy.', pt: 'Você parece feliz.' },
    { en: 'He speaks English.', pt: 'Ele fala inglês.' },
    { en: 'She is a doctor.', pt: 'Ela é médica.' },
    { en: 'It was expensive.', pt: 'Foi caro.' },
    { en: 'You can sit here.', pt: 'Você pode sentar aqui.' },
    { en: 'He does not agree.', pt: 'Ele não concorda.' },
    { en: 'She knows the way.', pt: 'Ela sabe o caminho.' },
    { en: 'It smells good.', pt: 'Cheira bem.' },
    { en: 'You are right.', pt: 'Você está certo.' },
  ];

  QuizCore.createGame(DATA, { title: 'Pronomes no singular (you, he, she, it)', rounds: 10 });
})();
