# Entregável 1: Parte Teórica – Hipóteses e Estratégia de Validação

**Projeto:** AgendaBot Pro — Triagem e Agendamento Inteligente no WhatsApp  
**Disciplina:** Metodologias Ágeis e Validação de Produtos (FTR / Rocketseat)  

---

## 1. Problema Identificado, Público e Oportunidade

### 1.1 O Problema Real
Profissionais autônomos e pequenos negócios locais utilizam o WhatsApp como principal canal de atendimento, orçamento e agendamento. Contudo, **enquanto estão executando o serviço técnico** (fazendo unhas, cortando cabelo, atendendo no balcão ou realizando procedimentos), eles ficam com as mãos ocupadas e **demoram de 30 minutos a 3 horas para responder mensagens novas**.

Essa demora gera três consequências diretas:
1. **Perda de clientes e vendas (Leads frios):** Clientes que precisam de horário ou resposta rápida fecham com o concorrente que respondeu primeiro.
2. **Sobrecarga operacional ("Fazer tudo sozinho"):** O profissional acumula a função técnica e a função de recepcionista/atendente, gerando exaustão ao responder mensagens e organizar agenda nos intervalos ou à noite.
3. **Atrito com soluções atuais:** Chatbots tradicionais baseados em menus numéricos (*"Digite 1 para agendar, 2 para valores"*) irritam os clientes por parecerem engessados, travam quando recebem áudio e exigem que o cliente clique em links externos de agendamento que raramente são preenchidos.

### 1.2 Público-Alvo e Early Adopters
* **Público-Alvo Investigado:** Microempreendedores individuais (MEIs), prestadores de serviço com hora marcada e pequenos varejistas locais que dependem do WhatsApp diariamente.
* **Perfil de Early Adopter:** Profissionais que trabalham sozinhos (sem secretária dedicada), recebem entre **5 e 30 mensagens diárias no WhatsApp** e sofrem interrupções constantes durante o expediente.

### 1.3 A Oportunidade com IA e Automação Digital
Utilizar **IA Generativa combinada com Automação de Agenda** diretamente no WhatsApp para atuar como uma recepcionista virtual natural: capaz de transcrever e entender áudios curtos dos clientes, responder dúvidas de preços/serviços em segundos e realizar a triagem/agendamento dentro da própria conversa, sem obrigar o cliente a sair do aplicativo.

---

## 2. Hipóteses de Problema, Solução e Valor

Aplicando os princípios de *Lean Startup* (transformar suposições em hipóteses testáveis antes de construir) e o empirismo ágil (*Transparência, Inspeção e Adaptação*), estruturamos três hipóteses centrais:

### Hipótese de Problema (HP)
> **Acreditamos que** prestadores de serviço autônomos e pequenos negócios locais demoram mais de 30 minutos para responder mensagens no WhatsApp enquanto estão atendendo, e que pelo menos **60% a 80% deles deixam de fechar vendas ou agendamentos no mês** por causa dessa demora.

### Hipótese de Solução (HS)
> **Acreditamos que** uma demonstração de assistente de IA conversacional no WhatsApp (capaz de ouvir áudios, informar preços, checar disponibilidade e organizar o agendamento) terá alta aceitação (**nota $\ge 4$ em uma escala de 1 a 5** para pelo menos **60% dos entrevistados**), superando a rejeição aos bots tradicionais de menu numérico.

### Hipótese de Valor e Disposição a Pagar (HV)
> **Acreditamos que** pelo menos **60% dos profissionais entrevistados** enxergarão retorno financeiro claro na ferramenta a ponto de:
> 1. Demonstrar disposição a pagar uma assinatura mensal entre **R$ 49 e R$ 97/mês**;
> 2. Deixar seu nome/contato real (*Call-to-Action* / *Smoke Test*) para participar de um teste piloto gratuito de 7 dias na sua rotina.

---

## 3. Solução Inicialmente Proposta e Definição do MVP

### 3.1 Solução Inicialmente Proposta
O **AgendaBot Pro** foi concebido inicialmente como uma plataforma SaaS onde o profissional conecta seu WhatsApp Business e sua agenda (Google Agenda), configurando sua tabela de preços e horários para que a IA realize 100% do atendimento e agendamento de forma autônoma, enviando apenas um resumo final ao profissional.

### 3.2 Definição do MVP (Mínimo Produto Viável para Descoberta)
Como o objetivo do Product Discovery **não é desenvolver o software completo, mas descobrir se ele merece ser desenvolvido** com o menor esforço possível (*Ciclo Construir-Medir-Aprender*), definimos como MVP de validação um experimento combinado de **Teste de Conceito Visual + Smoke Test (Teste de Fumaça)**:
1. **Demonstração Visual Realista da Solução:** Simulação passo a passo de uma conversa real no WhatsApp mostrando o cliente enviando áudio, a IA respondendo em 6 segundos com preço e horários disponíveis, confirmando o agendamento e notificando o profissional.
2. **Formulário Estruturado de Validação (Google Forms):** Instrumento de 10 perguntas focado no comportamento real passado (*Mom Test*), nas barreiras de adoção da solução apresentada e na conversão real para um piloto de 7 dias.

---

## 4. Como a IA foi Utilizada Durante o Processo de Discovery

Seguindo a premissa fundamental de que **"IA não valida mercado; pessoas reais validam hipóteses"**, utilizamos Inteligência Artificial (LLMs) estritamente como **ferramenta de produtividade e apoio analítico**, mantendo 100% da coleta de campo e da tomada de decisão sob responsabilidade humana:

| Etapa do Discovery | Papel da IA como Copiloto | Papel Humano (Aluno / Produto) |
| :--- | :--- | :--- |
| **1. Estruturação de Hipóteses** | Apoio no mapeamento de dores do pequeno empreendedor e estruturação do Lean Canvas e Value Proposition Canvas. | Seleção do problema real e definição das métricas e recortes de público. |
| **2. Desenho do Experimento e Automação** | Refinamento das perguntas para evitar viés de confirmação e geração de script (*Google Apps Script*) para publicar o formulário no Google Forms. | Disparo do formulário e coleta de respostas com **5 profissionais reais** do mercado. |
| **3. Prototipação da Conversa** | Simulação do diálogo natural do *AgendaBot Pro* para compor a demonstração visual apresentada no formulário. | Avaliação de aderência da demonstração ao contexto real dos entrevistados. |
| **4. Organização e Clusterização de Dados** | Tabulação das respostas brutas do Google Forms e agrupamento de padrões entre diferentes profissões. | **Interpretação crítica dos resultados**, identificação das hipóteses refutadas (como a faixa de preço) e **decisão final de Ajustar**. |

---

## 5. Experimento Escolhido e Critérios de Sucesso

### 5.1 Estrutura do Experimento
O experimento foi dividido em **3 blocos sequenciais** aplicados a **5 potenciais usuários reais**:
* **Bloco 1 (Diagnóstico do Problema sem viés):** Profissão, volume diário de mensagens no WhatsApp, tempo médio de espera enquanto está ocupado atendendo, frequência de perda de clientes nos últimos 30 dias e pergunta aberta sobre a maior frustração atual.
* **Bloco 2 (Exposição à Demonstração Visual e Validação da Solução):** Apresentação da conversa simulada do *AgendaBot Pro* seguida de avaliação quantitativa (escala 1 a 5), mapeamento do maior medo/receio em relação à IA e escolha da funcionalidade mais importante para gerar confiança.
* **Bloco 3 (Validação de Valor, Preço e Comprometimento):** Teste de sensibilidade a preço mensal (ancorado na recuperação de 2 a 3 clientes/mês) e *Call-to-Action* (deixar Nome/Contato para participar do piloto gratuito de 7 dias — métrica acionável contra métricas de vaidade).

### 5.2 Critérios Objetivos de Sucesso
1. **Critério de Problema:** $\ge 60\%$ (mínimo 3 de 5) demoram mais de 30 minutos para responder durante atendimentos e admitem perder clientes/vendas no mês por isso.
2. **Critério de Solução:** $\ge 60\%$ (mínimo 3 de 5) avaliam a demonstração visual com nota $\ge 4$ (de 5).
3. **Critério de Valor (Preço):** $\ge 60\%$ (mínimo 3 de 5) aceitam pagar entre R$ 49 e R$ 97/mês.
4. **Critério de Comprometimento Real (CTA):** $\ge 60\%$ (mínimo 3 de 5) se inscrevem voluntariamente deixando seu nome/contato para o teste piloto de 7 dias.

---

## 6. Critério Previamente Definido para Decidir (Perseverar, Ajustar, Pivotar ou Abandonar)

Antes da execução do experimento, estabelecemos a seguinte matriz de decisão baseada em evidências:

| Decisão | Critério Pré-Definido (Gatilho de Evidência) | Ação Decorrente |
| :--- | :--- | :--- |
| **PERSEVERAR** | Todos os 4 critérios de sucesso ($\ge 60\%$) são atingidos sem objeções graves quanto a preço (R$ 49–97), usabilidade ou público-alvo. | Construir o MVP exatamente como planejado e iniciar os testes com os inscritos. |
| **AJUSTAR (Iterar)** | A dor real, o interesse na solução (nota $\ge 4$) e a conversão no piloto ($\ge 60\%$) são validados, **MAS** os dados revelam divergência na faixa de preço aceita, recorte específico de nicho ou barreiras de usabilidade/configuração. | Manter a visão central do produto, mas **iterar o modelo de preço, o foco de segmento ou o fluxo de configuração do MVP** antes de desenvolver. |
| **PIVOTAR** | Os profissionais confirmam a dor de tempo, mas rejeitam colocar IA para falar com seus clientes no WhatsApp (nota $< 3$), preferindo automação apenas para lembretes internos ou controle financeiro. | Mudar radicalmente a solução proposta mantendo o mesmo segmento de clientes (*Customer Segment Pivot*). |
| **ABANDONAR** | Menos de 3 entrevistados ($< 60\%$) perdem vendas por demora no WhatsApp **OU** menos de 2 pessoas deixam contato para o teste piloto gratuito. | Encerrar o projeto imediatamente, evitando desperdício de tempo e capital em um produto sem demanda real. |
