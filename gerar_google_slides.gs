function criarApresentacaoAgendaBot() {
  var deck = SlidesApp.create('Apresentação Pitch - AgendaBot Pro (Validação de Produto com IA)');
  var slides = deck.getSlides();

  // Slide 1 (Capa)
  var slide1 = slides[0];
  slide1.getPageElements()[0].asShape().getText().setText('AgendaBot Pro: Da Hipótese à Evidência');
  slide1.getPageElements()[1].asShape().getText().setText(
    'Validando um Assistente de Triagem e Agendamento com IA no WhatsApp\n' +
    'Metodologias Ágeis, Lean Startup e Product Discovery (Validação Real: 30/10/2026)'
  );

  function addSlidePadrao(titulo, topicos) {
    var s = deck.appendSlide(SlidesApp.PredefinedLayout.TITLE_AND_BODY);
    s.getPlaceholder(SlidesApp.PlaceholderType.TITLE).asShape().getText().setText(titulo);
    var body = s.getPlaceholder(SlidesApp.PlaceholderType.BODY).asShape().getText();
    body.setText(topicos.join('\n\n'));
    return s;
  }

  // Slide 2: Problema e Hipóteses Iniciais
  addSlidePadrao('1. Problema e Hipóteses Iniciais', [
    '• O Problema: Profissionais autônomos e pequenos negócios ficam com as mãos ocupadas enquanto atendem e demoram de 30 min a 3h para responder o WhatsApp, perdendo clientes.',
    '• Oportunidade: Bots tradicionais ("Digite 1") irritam os clientes e não entendem áudio. A IA generativa permite conversa natural.',
    '• Hipótese de Problema (H1): >= 60-80% demoram >30 min para responder e perdem vendas no mês.',
    '• Hipótese de Solução (H2): >= 60% aprovariam a demonstração visual da IA no WhatsApp com nota >= 4 (de 5).',
    '• Hipótese de Valor e Preço (H3): >= 60% pagariam entre R$ 49 e R$ 97/mês e deixariam contato para um piloto de 7 dias.'
  ]);

  // Slide 3: Solução Proposta e Experimento Realizado
  addSlidePadrao('2. Solução Proposta e Experimento Realizado', [
    '• Solução (AgendaBot Pro): Assistente de IA no WhatsApp que transcreve áudios dos clientes, responde preços em 6 segundos e organiza agendamentos.',
    '• Nosso MVP de Validação (Sem desenvolver código completo): Demonstração Visual de uma conversa real no WhatsApp + Formulário Estruturado (10 perguntas no Google Forms).',
    '• Papel da IA vs. Validação Humana: IA apoiou na criação do Lean Canvas, formulário e tabulação, mas a validação foi feita com 5 profissionais reais de diferentes áreas.'
  ]);

  // Slide 4: Evidências Obtidas com 5 Usuários Reais
  addSlidePadrao('3. Evidências Reais Coletadas (30/10/2026)', [
    '• U1 - Varejista (João Marcos Pereira): 5-15 msgs/dia | Espera 30m-1h | Perde vendas no mês | Dor: "responder e verificar estoque" | Nota: 5/5 | Pagaria: Até R$ 39 | Topou Piloto!',
    '• U2 - Manicure (Katia de Jesus Pereira): 5-15 msgs/dia | Espera 1h-3h | Perde vendas no mês | Dor: "Ter que fazer tudo meio que sozinha" | Nota: 4/5 | Pagaria: Até R$ 39 | Topou Piloto!',
    '• U3 - Personal Trainer (Anônimo): <5 msgs/dia | Responde <15m | Não perde vendas | Nota: 3/5 | Não pagaria | Sem interesse no piloto.',
    '• U4 - Publicitário (Anônimo): 5-15 msgs/dia | Não perde vendas | Dor: "Entender o que o cliente quer" | Nota: 4/5 | Medo: "Ser menos humana" | Não pagaria.',
    '• U5 - Cabeleireiro (Robson Aparecido de Jesus): 5-15 msgs/dia | Espera 30m-1h | Perde vendas no mês | Dor: "fazer os agendamentos" | Nota: 5/5 | Pagaria: Até R$ 39 | Topou Piloto!'
  ]);

  // Slide 5: O que os Dados Confirmaram vs. Contrariaram
  addSlidePadrao('4. O que os Dados Confirmaram vs. Contrariaram', [
    '✅ CONFIRMADO (Dor e Conversão): 80% deram nota 4 ou 5 para a Demo Visual (média 4,67 nos pagantes) e 60% (3 de 5) se inscreveram no piloto de 7 dias.',
    '✅ CONFIRMADO (Recorte de Nicho): 100% dos profissionais de Beleza (Manicure/Cabeleireiro) e Varejo perdem vendas no mês e querem a solução.',
    '🔄 CONTRARIADO (Descoberta de Preço): Ninguém aceitou pagar R$ 49 a R$ 97/mês! 100% dos pagantes escolheram "Até R$ 39/mês" (compatível com o volume de 5 a 15 msgs/dia).',
    '🔄 CONTRARIADO (Descoberta de Usabilidade): Achávamos que a manicure e o cabeleireiro teriam medo de a IA agendar sozinha, mas ambos querem agendamento automático e revelaram que seu maior medo é "ser difícil de configurar e mexer"!'
  ]);

  // Slide 6: Decisão Tomada e Próximo Passo
  addSlidePadrao('5. Decisão Final: AJUSTAR (Iterar) e Próximos Passos', [
    '• Decisão Fundamentada: AJUSTAR (Iterar o Produto, o Preço e o Nicho antes de desenvolver).',
    '• 1º Ajuste (Nicho): Focar em Beleza/Estética (Cabeleireiros, Manicures, Barbeiros) e Pequeno Varejo. Descartar serviços consultivos (Publicitários) e Personal Trainers.',
    '• 2º Ajuste (Preço): Reduzir de R$ 49-97 para R$ 34,90/mês (dentro do teto validado de R$ 39/mês; custo de IA < R$ 2/mês para 5-15 msgs/dia).',
    '• 3º Ajuste (Onboarding Zero-Painel): Configuração feita por áudio no próprio WhatsApp para eliminar o medo de "ser difícil de configurar e mexer".',
    '• Próximo Passo Recomendado: Rodar o MVP Concierge de 7 dias com os 3 inscritos (João Marcos, Katia e Robson).'
  ]);

  var url = deck.getUrl();
  var email = Session.getActiveUser().getEmail();
  if (email) {
    MailApp.sendEmail({
      to: email,
      subject: '📊 Sua Apresentação no Google Slides (AgendaBot Pro) está pronta!',
      body: 'Olá!\n\nSua apresentação de slides do AgendaBot Pro foi gerada no seu Google Drive:\n\n' +
            '🔗 LINK PARA ABRIR A APRESENTAÇÃO:\n' + url
    });
  }
  Logger.log('✅ Apresentação criada com sucesso: ' + url);
}
