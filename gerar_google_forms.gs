function criarFormularioAgendaBot() {
  // 1. Cria o formulário na sua conta do Google Drive
  var form = FormApp.create('Pesquisa Rápida: Rotina de Atendimento e Agendamento no WhatsApp');
  
  form.setDescription(
    'Olá! Estou realizando um estudo prático da faculdade sobre rotina de atendimento no WhatsApp para profissionais e pequenos negócios.\n\n' +
    'Não estou vendendo nada — quero apenas entender como funciona o seu dia a dia e ouvir sua opinião sincera sobre uma ideia de ferramenta com Inteligência Artificial.\n' +
    'Leva menos de 3 minutos para responder!'
  );
  form.setCollectEmail(false);
  form.setConfirmationMessage('Muito obrigado pela sua participação! Suas respostas vão ajudar muito no nosso projeto da faculdade.');

  // =========================================================================
  // BLOCO 1: PERFIL E COMPORTAMENTO ATUAL (VALIDAÇÃO DO PROBLEMA)
  // =========================================================================
  form.addSectionHeaderItem()
      .setTitle('Bloco 1: Sua Rotina Atual no WhatsApp');

  // Pergunta 1
  form.addTextItem()
      .setTitle('1. Qual é a sua atividade ou profissão principal?')
      .setHelpText('Ex.: Barbeiro, Manicure, Esteticista, Dentista, Personal Trainer, Técnico, etc.')
      .setRequired(true);

  // Pergunta 2
  var q2 = form.addMultipleChoiceItem();
  q2.setTitle('2. Em média, quantas mensagens de clientes (dúvidas, orçamentos ou agendamentos) você recebe por dia no WhatsApp?')
    .setChoices([
      q2.createChoice('Menos de 5 por dia'),
      q2.createChoice('Entre 5 e 15 por dia'),
      q2.createChoice('Entre 16 e 30 por dia'),
      q2.createChoice('Mais de 30 por dia')
    ])
    .setRequired(true);

  // Pergunta 3
  var q3 = form.addMultipleChoiceItem();
  q3.setTitle('3. Quando você está ocupado atendendo um cliente, quanto tempo em média uma mensagem nova demora para ser respondida?')
    .setChoices([
      q3.createChoice('Menos de 15 minutos (paro o atendimento para responder)'),
      q3.createChoice('Entre 30 minutos e 1 hora'),
      q3.createChoice('Entre 1 e 3 horas'),
      q3.createChoice('Só consigo responder no fim do dia / à noite')
    ])
    .setRequired(true);

  // Pergunta 4
  var q4 = form.addMultipleChoiceItem();
  q4.setTitle('4. Nos últimos 30 dias, você sente que deixou de fechar algum atendimento ou orçamento porque demorou para responder no WhatsApp?')
    .setChoices([
      q4.createChoice('Sim, acontece toda semana'),
      q4.createChoice('Sim, aconteceu algumas vezes no mês'),
      q4.createChoice('Raramente ou nunca acontece')
    ])
    .setRequired(true);

  // Pergunta 5
  form.addParagraphTextItem()
      .setTitle('5. Hoje, qual é a parte mais cansativa ou frustrante de atender e agendar clientes pelo WhatsApp?')
      .setRequired(true);

  // =========================================================================
  // BLOCO 2: DEMONSTRAÇÃO VISUAL E VALIDAÇÃO DA SOLUÇÃO
  // =========================================================================
  form.addPageBreakItem()
      .setTitle('Bloco 2: Demonstração da Ideia (AgendaBot Pro)')
      .setHelpText(
        'Imagine que você tem um Assistente de IA conectado ao seu próprio WhatsApp que funciona assim enquanto você está ocupado atendendo:\n\n' +
        '------------------------------------------------------------\n' +
        '📱 SIMULAÇÃO DE CONVERSA NO SEU WHATSAPP:\n\n' +
        '👤 Cliente (14:12 - Áudio de 10s):\n' +
        '"Oi tudo bem? Queria saber o valor do atendimento e se você tem algum horário livre nessa sexta depois das 15h?"\n\n' +
        '🤖 AgendaBot Pro (14:12 - responde em 6 segundos):\n' +
        '"Oi, Camila! Tudo ótimo por aqui 😊 O atendimento custa R$ 130 e dura cerca de 1h. Olhei na agenda desta sexta-feira e tenho dois horários livres após as 15h: às 15:30 ou às 17:00. Algum desses fica bom para você?"\n\n' +
        '👤 Cliente (14:14):\n' +
        '"Quero o das 17:00! Aceita cartão?"\n\n' +
        '🤖 AgendaBot Pro (14:14):\n' +
        '"Aceitamos cartão e Pix sim! ✅ Prontinho, Camila: deixei pré-reservado para você nesta sexta às 17:00. Na quinta-feira te mando um lembrete rápido por aqui para confirmar sua presença, combinado?"\n\n' +
        '🔔 O QUE CHEGA PARA VOCÊ (PROFISSIONAL):\n' +
        '"Resumo: Camila solicitou agendamento para Sexta às 17:00 (R$ 130). [Confirmar Horário] | [Assumir Conversa]"\n' +
        '------------------------------------------------------------'
      );

  // Pergunta 6
  form.addScaleItem()
      .setTitle('6. Olhando a demonstração acima, de 1 a 5, o quanto um assistente assim ajudaria na sua rotina real?')
      .setBounds(1, 5)
      .setLabels('Não ajudaria nada', 'Resolveria um grande problema meu')
      .setRequired(true);

  // Pergunta 7
  var q7 = form.addMultipleChoiceItem();
  q7.setTitle('7. Qual seria o seu MAIOR receio ou medo em deixar uma Inteligência Artificial responder seus clientes no WhatsApp?')
    .setChoices([
      q7.createChoice('Medo de a IA responder algo errado ou inventar informações'),
      q7.createChoice('Medo de o cliente perceber que é robô e achar o atendimento frio'),
      q7.createChoice('Medo de bagunçar minha agenda / marcar horário que eu não posso'),
      q7.createChoice('Medo de ser difícil de configurar e mexer')
    ])
    .showOtherOption(true)
    .setRequired(true);

  // Pergunta 8
  var q8 = form.addMultipleChoiceItem();
  q8.setTitle('8. Qual dessas funções seria a MAIS importante para você confiar e usar a ferramenta?')
    .setChoices([
      q8.createChoice('Responder preços e dúvidas básicas na hora (inclusive ouvindo áudios)'),
      q8.createChoice('Agendar automaticamente nos meus horários livres'),
      q8.createChoice('Modo "Aprovação Rápida" (a IA faz a triagem, mas pede meu OK com 1 clique antes de confirmar o horário)'),
      q8.createChoice('Mandar lembrete automático 24h antes para evitar que o cliente falte (no-show)')
    ])
    .setRequired(true);

  // =========================================================================
  // BLOCO 3: VALOR PERCEBIDO E COMPROMETIMENTO (SMOKE TEST)
  // =========================================================================
  form.addSectionHeaderItem()
      .setTitle('Bloco 3: Percepção de Valor e Teste Piloto');

  // Pergunta 9
  var q9 = form.addMultipleChoiceItem();
  q9.setTitle('9. Se essa ferramenta economizasse 1 hora do seu dia e recuperasse pelo menos 2 ou 3 clientes por mês que você perderia pela demora, qual valor mensal faria sentido para você?')
    .setChoices([
      q9.createChoice('Não pagaria por essa ferramenta (prefiro responder tudo manualmente)'),
      q9.createChoice('Até R$ 39/mês'),
      q9.createChoice('Entre R$ 49 e R$ 79/mês'),
      q9.createChoice('Até R$ 97/mês ou mais')
    ])
    .setRequired(true);

  // Pergunta 10
  form.addTextItem()
      .setTitle('10. Estamos selecionando 5 profissionais para testar gratuitamente uma versão experimental por 7 dias. Se tiver interesse em testar sem compromisso, deixe seu Nome e WhatsApp abaixo (ou escreva "Não tenho interesse"):')
      .setRequired(true);

  // =========================================================================
  // ENVIA OS LINKS DIRETO PARA O SEU E-MAIL E MOSTRA NO PAINEL
  // =========================================================================
  var urlPublica = form.getPublishedUrl();
  var urlEdicao = form.getEditUrl();
  var emailUsuario = Session.getActiveUser().getEmail();

  if (emailUsuario) {
    MailApp.sendEmail({
      to: emailUsuario,
      subject: '✅ Seu Google Forms do AgendaBot Pro está pronto!',
      body: 'Olá!\n\nSeu formulário de validação foi gerado automaticamente na sua conta Google.\n\n' +
            '🔗 LINK PARA ENVIAR AOS 5 USUÁRIOS (WhatsApp):\n' + urlPublica + '\n\n' +
            '✏️ LINK PARA VOCÊ VER AS RESPOSTAS / EDITAR:\n' + urlEdicao + '\n\n' +
            'Bom trabalho na faculdade!'
    });
  }

  Logger.log('✅ FORMULÁRIO CRIADO COM SUCESSO!');
  Logger.log('🔗 Link para enviar aos entrevistados: ' + urlPublica);
  Logger.log('✏️ Link para editar / ver respostas: ' + urlEdicao);
}
