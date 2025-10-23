# ESPECIFICAÇÃO – CAÇA AO VAPE

## 1. Visão Geral do Sistema

O sistema é um jogo educacional web voltado para estudantes do ensino fundamental/médio, com o objetivo de ensinar sobre os malefícios do uso do vape por meio de quizzes interativos, gamificação (níveis, rankings, conquistas) e acompanhamento de desempenho.

## 2. Fluxo de Interação do Usuário (User Flow)

### Fluxo Principal

#### Tela de Login
- Aluno insere CPF e senha.
- Opções: "Lembrar-me", "Esqueceu a senha?", "Não tem conta? Cadastre-se".

#### Tela de Cadastro
Campos obrigatórios:
- Nome completo
- Escola
- Data de nascimento
- CPF
- Ano escolar
- Sexo
- E-mail
- Telefone com DDD
- Avatar (seleção visual)
- Aceite dos termos e condições
- Botão: "Cadastrar"

#### Tela de Dashboard (Pós-login)
Exibe:
- Nome do aluno
- Nível atual
- Precisão (% de acertos)
- Sequência de dias ativos
- Posição no ranking
- Progresso recente (últimos quizzes)
- Conquistas (medalhas/troféus)

Botões de ação rápida:
- "Fazer Novo Quiz"
- "Ver Ranking"
- "Sair"

#### Tela de Quiz
- Título do quiz (ex: "Riscos à Saúde", "Uso Responsável")
- Pergunta com 4 alternativas (A, B, C, D)
- Botão "Confirmar"

Ao finalizar:
- Mostra pontuação obtida
- Opções: "Ver Ranking" ou "Iniciar Outro Quiz"

#### Tela de Ranking
Classificação geral com:
- Posição
- Nome do aluno
- Nível
- Pontos
- Precisão (%)
- Sequência de dias ativos
- Total de quizzes respondidos
- Destaque para os Top 3

#### Tela de Perfil (Meu Perfil)
- Dados cadastrais
- Histórico de quizzes
- Conquistas desbloqueadas

## 3. Especificação de Requisitos

### 3.1. Requisitos Funcionais (RF)

| ID | Descrição |
|----|-----------|
| RF-01 | O sistema deve permitir o cadastro de novos usuários com dados pessoais e escolares. |
| RF-02 | O sistema deve autenticar usuários via CPF e senha. |
| RF-03 | O sistema deve exibir um dashboard com informações de progresso, nível, precisão e ranking. |
| RF-04 | O sistema deve disponibilizar quizzes temáticos sobre os malefícios do vape. |
| RF-05 | Cada quiz deve conter perguntas de múltipla escolha com 4 alternativas. |
| RF-06 | O sistema deve calcular e exibir a pontuação e precisão do usuário após cada quiz. |
| RF-07 | O sistema deve manter um ranking geral com base em pontos, precisão e consistência (sequência de uso). |
| RF-08 | O sistema deve registrar conquistas (medalhas/troféus) com base no desempenho e atividade. |
| RF-09 | O sistema deve permitir ao usuário visualizar seu perfil e histórico de atividades. |
| RF-10 | O sistema deve permitir seleção de avatar no cadastro. |

### 3.2. Requisitos Não Funcionais (RNF)

| ID | Descrição |
|----|-----------|
| RNF-01 | A interface deve ser responsiva e acessível em dispositivos móveis e desktop. |
| RNF-02 | O sistema deve carregar telas em até 2 segundos em conexão padrão. |
| RNF-03 | Os dados dos usuários devem ser armazenados com segurança (criptografia de senha, validação de CPF). |
| RNF-04 | O sistema deve ser compatível com navegadores modernos (Chrome, Firefox, Edge, Safari). |
| RNF-05 | Deve haver backup diário dos dados dos usuários e progresso. |

### 3.3. Requisitos de Conteúdo Educacional

| ID | Descrição |
|----|-----------|
| RC-01 | Os quizzes devem abordar temas como: riscos à saúde, componentes do vape, uso irresponsável, dependência química, impacto social. |
| RC-02 | As perguntas devem ser validadas por especialistas em saúde ou educação. |
| RC-03 | O feedback pós-quiz deve incluir explicações educativas para respostas incorretas. |
