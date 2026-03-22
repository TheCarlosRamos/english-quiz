(function(){
  const DATA = [
    { en: 'You (when speaking to two or more people)', pt: 'Vocês' },
    { en: 'We', pt: 'Nós' },
    { en: 'They', pt: 'Eles / Elas' },
    { en: 'They are here.', pt: 'Eles estão aqui.' },
    { en: 'We are friends.', pt: 'Nós somos amigos.' },
    { en: 'You are students.', pt: 'Vocês são estudantes.' },
    { en: 'They live in Brasília.', pt: 'Eles moram em Brasília.' },
    { en: 'We like music.', pt: 'Nós gostamos de música.' },
    { en: 'You play football well.', pt: 'Vocês jogam futebol bem.' },
    { en: 'They are not ready.', pt: 'Eles não estão prontos.' },
    { en: 'We were at school.', pt: 'Nós estávamos na escola.' },
    { en: 'You have my book.', pt: 'Vocês têm o meu livro.' },
    { en: 'They know the answer.', pt: 'Eles sabem a resposta.' },
    { en: 'We need help.', pt: 'Nós precisamos de ajuda.' },
    { en: 'You look tired.', pt: 'Vocês parecem cansados.' },
    { en: 'They speak Portuguese.', pt: 'Eles falam português.' },
    { en: 'We are going home.', pt: 'Nós vamos para casa.' },
    { en: 'You did great!', pt: 'Vocês foram muito bem!' },
    { en: 'They work together.', pt: 'Eles trabalham juntos.' },
    { en: 'We understand.', pt: 'Nós entendemos.' },
  ];

  QuizCore.createGame(DATA, { title: 'Pronomes no plural (you, we, they)', rounds: 10 });
})();
