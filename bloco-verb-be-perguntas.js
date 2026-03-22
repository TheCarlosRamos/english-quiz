(function(){
  const DATA = [
    { en: 'Are you ready?', pt: 'Você está pronto?' },
    { en: 'Is he at home?', pt: 'Ele está em casa?' },
    { en: 'Are they friends?', pt: 'Eles são amigos?' },
    { en: 'Is she a teacher?', pt: 'Ela é professora?' },
    { en: 'Are we late?', pt: 'Nós estamos atrasados?' },
    { en: 'Is it cold today?', pt: 'Está frio hoje?' },
    { en: 'Are you okay?', pt: 'Você está bem?' },
    { en: 'Is this your bag?', pt: 'Esta é sua mochila?' },
    { en: 'Are they from Brazil?', pt: 'Eles são do Brasil?' },
    { en: 'Is she tired?', pt: 'Ela está cansada?' },
    { en: 'Are we in the right room?', pt: 'Estamos na sala certa?' },
    { en: 'Is he your cousin?', pt: 'Ele é seu primo?' },
    { en: 'Are you students?', pt: 'Vocês são estudantes?' },
    { en: 'Is the door open?', pt: 'A porta está aberta?' },
    { en: 'Are they hungry?', pt: 'Eles estão com fome?' },
    { en: 'Is she on the phone?', pt: 'Ela está ao telefone?' },
    { en: 'Are you sure?', pt: 'Você tem certeza?' },
    { en: 'Is it far from here?', pt: 'É longe daqui?' },
    { en: 'Are we lost?', pt: 'Nós estamos perdidos?' },
    { en: 'Is he busy now?', pt: 'Ele está ocupado agora?' },
  ];

  QuizCore.createGame(DATA, { title: 'Perguntas com verb to be (is / are)', rounds: 10 });
})();
