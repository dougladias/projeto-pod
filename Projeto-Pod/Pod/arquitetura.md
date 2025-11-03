projeto-caca-vape/
│
├── app/
│   ├── Models/
│   │   ├── User.php (com role: 'admin' ou 'aluno')
│   │   ├── Quiz.php
│   │   ├── Pergunta.php
│   │   ├── Resposta.php
│   │   ├── QuizAttempt.php
│   │   ├── QuizAnswer.php
│   │   ├── Achievement.php
│   │   └── UserAchievement.php
│   │
│   ├── Http/
│   │   ├── Controllers/
│   │   │   ├── Auth/
│   │   │   │   ├── LoginController.php
│   │   │   │   ├── RegisterController.php
│   │   │   │   └── PasswordResetController.php
│   │   │   ├── Student/
│   │   │   │   ├── DashboardController.php
│   │   │   │   ├── QuizController.php
│   │   │   │   ├── RankingController.php
│   │   │   │   └── ProfileController.php
│   │   │   └── Admin/
│   │   │       ├── DashboardController.php
│   │   │       ├── StudentController.php
│   │   │       ├── QuizController.php
│   │   │       ├── PerguntaController.php
│   │   │       └── ReportController.php
│   │   │
│   │   ├── Requests/
│   │   │   ├── Auth/
│   │   │   │   ├── LoginRequest.php
│   │   │   │   └── RegisterRequest.php
│   │   │   ├── Student/
│   │   │   │   └── QuizAnswerRequest.php
│   │   │   └── Admin/
│   │   │       ├── PerguntaRequest.php
│   │   │       └── QuizRequest.php
│   │   │
│   │   └── Middleware/
│   │       ├── EnsureUserIsStudent.php
│   │       ├── EnsureUserIsAdmin.php
│   │       └── HandleInertiaRequests.php
│   │
│   └── Services/
│       ├── Quiz/
│       │   ├── QuizService.php
│       │   └── ScoringService.php
│       ├── Ranking/
│       │   └── RankingService.php
│       ├── Achievement/
│       │   └── AchievementService.php
│       └── Student/
│           └── ProgressService.php
│
├── resources/
│   ├── js/
│   │   ├── Components/
│   │   │   ├── Common/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Input.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Modal.jsx
│   │   │   │   └── Loading.jsx
│   │   │   ├── Layout/
│   │   │   │   ├── StudentLayout.jsx
│   │   │   │   ├── AdminLayout.jsx
│   │   │   │   ├── Navbar.jsx
│   │   │   │   └── Sidebar.jsx
│   │   │   ├── Quiz/
│   │   │   │   ├── QuizCard.jsx
│   │   │   │   ├── QuestionCard.jsx
│   │   │   │   ├── AnswerOption.jsx
│   │   │   │   ├── QuizTimer.jsx
│   │   │   │   └── QuizResult.jsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── StatsCard.jsx
│   │   │   │   ├── ProgressChart.jsx
│   │   │   │   ├── AchievementBadge.jsx
│   │   │   │   └── RecentActivity.jsx
│   │   │   └── Ranking/
│   │   │       ├── RankingTable.jsx
│   │   │       ├── RankingItem.jsx
│   │   │       └── TopThree.jsx
│   │   │
│   │   ├── Pages/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── Register.jsx
│   │   │   │   └── ForgotPassword.jsx
│   │   │   ├── Student/
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── QuizList.jsx
│   │   │   │   ├── QuizPlay.jsx
│   │   │   │   ├── Ranking.jsx
│   │   │   │   └── Profile.jsx
│   │   │   └── Admin/
│   │   │       ├── Dashboard.jsx
│   │   │       ├── Students.jsx
│   │   │       ├── Quizzes.jsx
│   │   │       ├── Questions.jsx
│   │   │       └── Reports.jsx
│   │   │
│   │   ├── Hooks/
│   │   │   ├── useAuth.js
│   │   │   ├── useQuiz.js
│   │   │   └── useRanking.js
│   │   │
│   │   ├── Store/
│   │   │   ├── authStore.js
│   │   │   ├── quizStore.js
│   │   │   └── userStore.js
│   │   │
│   │   ├── Utils/
│   │   │   ├── api.js
│   │   │   ├── helpers.js
│   │   │   └── constants.js
│   │   │
│   │   └── app.jsx
│   │
│   └── css/
│       └── app.css
│
├── database/
│   ├── migrations/
│   │   ├── create_users_table.php
│   │   ├── create_quizzes_table.php
│   │   ├── create_perguntas_table.php
│   │   ├── create_respostas_table.php
│   │   ├── create_quiz_perguntas_table.php (pivot)
│   │   ├── create_quiz_attempts_table.php
│   │   ├── create_quiz_answers_table.php
│   │   ├── create_achievements_table.php
│   │   └── create_user_achievements_table.php
│   │
│   └── seeders/
│       ├── DatabaseSeeder.php
│       ├── PerguntaSeeder.php (100 perguntas)
│       ├── QuizSeeder.php (8 quizzes)
│       └── AchievementSeeder.php (20 conquistas)
│
└── routes/
    ├── web.php
    ├── auth.php
    ├── student.php
    └── admin.php
```

## 2. Tabelas do Banco de Dados

### Tabelas Principais
```
users 
├── id (PK)
├── name
├── email (unique)
├── email_verified_at
├── password
├── remember_token
├── school (adicionado)
├── birth_date (adicionado)
├── cpf (unique, adicionado)
├── school_year (enum: '6','7','8','9','1','2','3', adicionado)
├── gender (enum: 'male','female','other', adicionado)
├── language (default 'pt-BR', adicionado)
├── phone (adicionado)
├── avatar (adicionado)
├── role (enum: 'admin','aluno', adicionado)
├── created_at
└── updated_at

quizzes
├── id (PK)
├── title
├── description
├── theme
├── difficulty (enum: 'facil', 'medio', 'dificil')
├── points_reward
├── time_limit_minutes
├── is_active
├── order
├── created_at
└── updated_at

perguntas (sua tabela existente)
├── id_pergunta (PK)
├── texto_pergunta
└── categoria

respostas (sua tabela existente)
├── id_resposta (PK)
├── id_pergunta (FK -> perguntas)
├── texto_resposta
└── correta (BIT)

quiz_perguntas (tabela pivot para relacionar quiz com perguntas)
├── id (PK)
├── quiz_id (FK -> quizzes)
├── pergunta_id (FK -> perguntas.id_pergunta)
├── order
├── points
├── created_at
└── updated_at

quiz_attempts
├── id (PK)
├── user_id (FK -> users)
├── quiz_id (FK -> quizzes)
├── score
├── correct_answers
├── total_questions
├── accuracy
├── time_spent_seconds
├── completed_at
├── created_at
└── updated_at

quiz_answers
├── id (PK)
├── quiz_attempt_id (FK -> quiz_attempts)
├── pergunta_id (FK -> perguntas)
├── resposta_id (FK -> respostas)
├── is_correct
├── created_at
└── updated_at

achievements
├── id (PK)
├── name
├── description
├── icon
├── type (enum: 'quiz_count', 'streak', 'accuracy', 'points')
├── requirement_value
├── points_reward
├── is_active
├── created_at
└── updated_at

user_achievements
├── id (PK)
├── user_id (FK -> users)
├── achievement_id (FK -> achievements)
├── unlocked_at
├── created_at
└── updated_at
```

## 3. Rotas Principais

### Student Routes (routes/student.php - usando Inertia)
```
Middleware: ['auth', 'student']
Prefix: /app
Name: student.

GET    /app/dashboard                                  -> DashboardController@index
GET    /app/playQuiz                                   -> QuizController@index
GET    /app/myQuiz                                     -> QuizController@meusQuizzes
POST   /app/quiz/{quiz}/start                          -> QuizController@start
POST   /app/quiz/attempts/{attempt}/answer             -> QuizController@answer
POST   /app/quiz/attempts/{attempt}/finish             -> QuizController@finish
GET    /app/ranking                                    -> RankingController@index
GET    /app/ranking/data                               -> RankingController@getRanking
GET    /app/profile                                    -> ProfileController@index
GET    /app/profile/progress                           -> ProfileController@getProgress
GET    /app/profile/achievements                       -> ProfileController@getAchievements
GET    /app/profile/recommendations                    -> ProfileController@getRecommendations
```

### Admin Routes (routes/admin.php - usando Inertia)
```
Middleware: ['auth', 'admin']
Prefix: /backoffice
Name: admin.

GET    /backoffice/dashboard                           -> DashboardController@index

# Students Management
GET    /backoffice/students                            -> StudentController@index
GET    /backoffice/students/{student}                  -> StudentController@show
PUT    /backoffice/students/{student}                  -> StudentController@update
DELETE /backoffice/students/{student}                  -> StudentController@destroy
GET    /backoffice/students-statistics                 -> StudentController@statistics

# Quizzes Management
GET    /backoffice/quizzes                             -> QuizController@index
GET    /backoffice/quizzes/create                      -> QuizController@create
POST   /backoffice/quizzes                             -> QuizController@store
GET    /backoffice/quizzes/{quiz}                      -> QuizController@show
GET    /backoffice/quizzes/{quiz}/edit                 -> QuizController@edit
PUT    /backoffice/quizzes/{quiz}                      -> QuizController@update
DELETE /backoffice/quizzes/{quiz}                      -> QuizController@destroy
POST   /backoffice/quizzes/{quiz}/toggle-active        -> QuizController@toggleActive
POST   /backoffice/quizzes/{quiz}/duplicate            -> QuizController@duplicate

# Perguntas Management
GET    /backoffice/perguntas                           -> PerguntaController@index
GET    /backoffice/perguntas/create                    -> PerguntaController@create
POST   /backoffice/perguntas                           -> PerguntaController@store
GET    /backoffice/perguntas/{pergunta}                -> PerguntaController@show
GET    /backoffice/perguntas/{pergunta}/edit           -> PerguntaController@edit
PUT    /backoffice/perguntas/{pergunta}                -> PerguntaController@update
DELETE /backoffice/perguntas/{pergunta}                -> PerguntaController@destroy
GET    /backoffice/perguntas-statistics                -> PerguntaController@statistics

# Reports
GET    /backoffice/reports                             -> ReportController@index
GET    /backoffice/reports/overview                    -> ReportController@overview
GET    /backoffice/reports/students                    -> ReportController@students
GET    /backoffice/reports/quizzes                     -> ReportController@quizzes
GET    /backoffice/reports/performance                 -> ReportController@performanceByCategory
GET    /backoffice/reports/engagement                  -> ReportController@engagement
GET    /backoffice/reports/export                      -> ReportController@export
```

### Auth Routes (routes/auth.php - usando Inertia)
```
GET    /login                                          -> Auth\AuthenticatedSessionController
POST   /login
GET    /cadastro                                       -> Auth\RegisteredUserController
POST   /cadastro
POST   /logout
GET    /                                               -> Redirect para /app ou /backoffice
```

## 4. Fluxo de Dados
```
React Frontend (Vite + Inertia.js)
      ↕️
Laravel Routes (Inertia)
      ↕️
Controllers
      ↕️
Services (Business Logic)
      ↕️
Models (Eloquent ORM)
      ↕️
MySQL Database (Railway)

| #   | Categoria                             | Perguntas | %   |
|-----|---------------------------------------|-----------|-----|
| 1   | Aspectos Legais, Sociais e Prevenção  | 21        | 21% |
| 2   | Riscos para Grupos Vulneráveis        | 17        | 17% |
| 3   | Efeitos Respiratórios e Pulmonares    | 17        | 17% |
| 4   | Dependência e Nicotina                | 17        | 17% |
| 5   | Composição e Substâncias Químicas     | 15        | 15% |
| 6   | Efeitos Cardiovasculares e Sistêmicos | 13        | 13% |