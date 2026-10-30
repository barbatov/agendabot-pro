# Entregável 1: Parte Teórica – Hipóteses e Estratégia de Validação

**Projeto:** AgendaBot Pro — Triagem e Agendamento Inteligente no WhatsApp para Prestadores de Serviço  
**Disciplina / Desafio:** Da Hipótese à Evidência: Validando um Produto Digital com IA e Métodos Ágeis  

---

## 1. Problema Identificado, Público e Oportunidade

### 1.1 O Problema
Profissionais autônomos e pequenos prestadores de serviço utilizam o WhatsApp como principal canal de aquisição e atendimento. Porém, **enquanto estão executando o serviço** (cortando cabelo, atendendo um paciente, dando aula ou realizando manutenção), eles **não conseguem responder mensagens imediatamente**.

Isso gera três dores críticas:
1. **Perda direta de receita (Leads frios):** Clientes que pedem orçamento ou horário de última hora fecham com o concorrente que respondeu primeiro.
2. **Sobrecarga operacional pós-expediente:** O profissional termina o dia exausto e ainda precisa passar de 1 a 2 horas à noite respondendo mensagens acumuladas (*"Qual o valor?", "Tem vaga amanhã?", "Aceita Pix?"*).
3. **Falta de filtro e no-show (faltas):** Muitos contatos são apenas curiosos ou agendam e esquecem de comparecer por falta de confirmação automatizada.

### 1.2 Público-Alvo e Early Adopters
* **Público-Alvo Geral:** Microempreendedores individuais (MEIs), profissionais liberais e pequenos negócios locais de serviços com hora marcada no Brasil.
* **Perfil de Early Adopter (Foco da Validação):** Prestadores de serviço que trabalham sozinhos ou em equipes enxutas (ex.: barbeiros, manicures/esteticistas, dentistas/fisioterapeutas autônomos, personal trainers e prestadores de serviços técnicos) que recebem **pelo menos 10 a 30 mensagens diárias no WhatsApp** e não têm secretária dedicada.

### 1.3 Oportunidade de Mercado
Bots tradicionais de menu numérico (*"Digite 1 para agendar, 2 para preços"*) geram alta rejeição porque parecem robóticos, travam quando o cliente manda áudio ou faz duas perguntas juntas, e exigem que o cliente saia do WhatsApp para abrir links externos de agendamento (que quase ninguém preenche). A oportunidade está em usar **IA Generativa combinada com Automação de Agenda** para conversar naturalmente (inclusive ouvindo áudios curtos), fazer a triagem do serviço desejado e concluir o agendamento dentro da própria conversa do WhatsApp.

---

## 2. Hipóteses de Problema, Solução e Valor

Seguindo a abordagem *Lean Startup*, transformamos nossas suposições em hipóteses falseáveis antes de escrever código:

### Hipótese de Problema (HP)
> **Acreditamos que** prestadores de serviço autônomos perdem clientes semanalmente e sofrem desgaste diário por demorarem mais de 1 hora para responder dúvidas repetitivas e pedidos de agendamento no WhatsApp enquanto estão em atendimento.

### Hipótese de Solução (HS)
> **Acreditamos que** um assistente de IA no próprio WhatsApp — capaz de entender texto/áudio, tirar dúvidas de preços, verificar horários livres e agendar automaticamente sem enviar links externos — resolverá o gargalo de atendimento sem afastar os clientes.

### Hipótese de Valor e Disposição a Pagar (HV)
> **Acreditamos que** esses profissionais enxergarão valor suficiente para:
> 1. Confiar na IA para responder seus clientes (desde que haja opção de transbordo para atendimento humano em casos complexos);
> 2. Pagar uma assinatura mensal entre **R$ 49 e R$ 97/mês** (equivalente a apenas 1 ou 2 atendimentos recuperados no mês).

---

## 3. Solução Inicialmente Proposta e Definição do MVP

### 3.1 Visão da Solução (AgendaBot Pro)
Um assistente virtual inteligente conectado ao WhatsApp Business e ao Google Agenda do profissional, configurado em menos de 10 minutos através de um prompt guiado com:
* Tabela de serviços, preços e duração de cada atendimento;
* Regras de horário de funcionamento e intervalos;
* Tom de voz personalizado do profissional;
* Confirmação automática de presença 24h antes (redução de *no-show*).

### 3.2 Definição do MVP (Mínimo Produto Viável para Validação)
Para descobrir se o produto **merece ser desenvolvido**, **não** construiremos o sistema completo de integração com API oficial do WhatsApp e banco de dados nesta etapa.

O nosso **MVP de Validação** consiste em:
1. **Demonstração Visual do Fluxo Real (Protótipo de Conversa + Painel Simplificado):** Mostra exatamente a tela de uma conversa real de WhatsApp onde um cliente manda áudio/texto pedindo horário, a IA responde de forma natural, consulta a agenda, confirma o agendamento e envia um resumo para o profissional.
2. **Formulário Estruturado de Discovery + Teste de Fumaça (Smoke Test):** Instrumento aplicado com potenciais usuários reais após visualizarem a demonstração, medindo a frequência real da dor, as objeções de confiança na IA e o comprometimento real (deixar contato para teste piloto / disposição a pagar).

---

## 4. Como a IA foi Utilizada Durante o Processo de Discovery

Respeitando a regra de ouro de que **"IA não valida mercado, pessoas reais validam hipóteses"**, utilizamos modelos de linguagem (LLMs) exclusivamente como **copiloto de estruturação e análise**, nas seguintes frentes:

| Etapa do Discovery | Como a IA foi utilizada | O que permaneceu 100% humano |
| :--- | :--- | :--- |
| **1. Exploração do Problema** | Mapeamento de dores comuns de MEIs e autônomos brasileiros e comparação com limitações de chatbots tradicionais de menu numérico. | Escolha do nicho acessível para entrevistas reais durante a semana. |
| **2. Formulação de Hipóteses e Perguntas** | Refinamento das perguntas do formulário segundo princípios do livro *The Mom Test* (evitando perguntas tendenciosas como *"Você gostaria de um app incrível?"* e focando no comportamento passado: *"Na última semana, quantas vezes..."*). | Aplicação das entrevistas/formulário com os 5 profissionais reais. |
| **3. Construção do Experimento Visual** | Geração dos diálogos realistas de triagem e protótipo visual da experiência no WhatsApp. | Apresentação da demonstração para os usuários e coleta das reações espontâneas. |
| **4. Síntese e Clusterização de Evidências** | Organização tabular das respostas coletadas e identificação de padrões (clusters de objeções e funcionalidades mais pedidas). | Interpretação crítica dos dados e decisão estratégica final (Perseverar, Ajustar, Pivotar ou Abandonar). |

---

## 5. Experimento Escolhido e Critérios de Sucesso

### 5.1 Desenho do Experimento
* **Formato:** Entrevista guiada por **Formulário Estruturado + Demonstração Visual da Solução** (*Concept Testing + Smoke Test*).
* **Amostra mínima:** 5 potenciais usuários reais que atuam como prestadores de serviço com agendamento via WhatsApp.
* **Dinâmica do Teste (3 blocos):**
  1. **Diagnóstico do Comportamento Atual (Sem falar da solução):** Medir volume de mensagens, tempo de espera enquanto atende e se já perdeu clientes por demora.
  2. **Apresentação da Demonstração Visual:** Mostrar o fluxo do *AgendaBot Pro* em ação (triagem + agendamento automático + resumo para o profissional).
  3. **Validação de Valor, Objeções e Comprometimento:** Avaliar o medo de usar IA com clientes, qual funcionalidade é indispensável, faixa de preço aceitável e interesse real em testar a versão piloto.

### 5.2 Métricas e Critérios de Sucesso do Experimento
Definimos previamente 4 indicadores objetivos para avaliar as evidências:
1. **Validação da Dor (Critério $\ge 80\%$ / mín. 4 de 5 usuários):** Relatam demorar mais de 30 minutos para responder clientes durante atendimentos e admitem já ter perdido vendas/agendamentos por isso.
2. **Aderência da Solução Visual (Critério $\ge 60\%$ / mín. 3 de 5 usuários):** Avaliam a abordagem de conversa natural no WhatsApp com nota $\ge 4$ (em escala de 1 a 5) em comparação a links externos ou robôs de opção "Digite 1".
3. **Disposição a Pagar (Critério $\ge 60\%$ / mín. 3 de 5 usuários):** Declaram disposição a pagar pelo menos R$ 49/mês caso a ferramenta economize 1h/dia ou recupere 2 clientes/mês.
4. **Sinal de Comprometimento / Call-to-Action (Critério $\ge 60\%$ / mín. 3 de 5 usuários):** Deixam seu contato real (WhatsApp/e-mail) aceitando participar de um teste gratuito de 7 dias na própria rotina.

---

## 6. Matriz de Decisão Prévia (Perseverar, Ajustar, Pivotar ou Abandonar)

Para evitar viés de confirmação após a coleta dos dados, estabelecemos a regra de decisão **antes** de ir a campo:

| Decisão | Condição Baseada nas Evidências Coletadas | Próximo Passo Recomendado |
| :--- | :--- | :--- |
| **PERSEVERAR** | $\ge 4/5$ confirmam a dor frequente **E** $\ge 4/5$ aprovam a solução exatamente como proposta, sem objeções críticas de confiança, aceitando pagar $\ge$ R$ 49/mês. | Construir o MVP Concierge / Mágico de Oz com integração básica para os primeiros testadores. |
| **AJUSTAR (Iterar)** | $\ge 4/5$ confirmam a dor e têm interesse real, **MAS** surgem objeções específicas na solução (ex.: medo de a IA fechar horário errado ou responder casos delicados sozinha, pedindo um "modo aprovação humana" ou "lembrete anti-falta"). | Manter o público e a proposta central, mas ajustar o escopo do MVP para resolver a objeção principal antes de desenvolver. |
| **PIVOTAR** | Os entrevistados reconhecem a dor de gestão, mas rejeitam qualquer automação no WhatsApp com clientes (querem usar IA apenas para controle interno, financeiro ou lembrete de retorno de clientes antigos). | Mudar a solução proposta (ex.: pivotar de *Agente de Triagem de Novos Clientes* para *Automação de Reativação e Pós-Venda*). |
| **ABANDONAR** | $< 3/5$ sentem a dor (conseguem responder rápido ou têm poucos clientes) **OU** ninguém demonstra interesse em testar nem pagar pela solução. | Encerrar o projeto imediatamente, economizando meses de desenvolvimento, e buscar um novo problema. |
