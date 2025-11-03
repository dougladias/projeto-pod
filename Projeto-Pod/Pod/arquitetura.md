projeto-caca-vape/
│
├── app/
│   ├── Models/
│   │   ├── User.php
│   │   ├── Student.php
│   │   ├── Admin.php
│   │   ├── Quiz.php
│   │   ├── Pergunta.php
│   │   ├── Resposta.php
│   │   ├── QuizAttempt.php
│   │   ├── QuizAnswer.php
│   │   ├── Achievement.php
│   │   ├── UserAchievement.php
│   │   └── Avatar.php
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
│   │       └── TrackDailyStreak.php
│   │
│   ├── Services/
│   │   ├── Auth/
│   │   │   └── AuthService.php
│   │   ├── Quiz/
│   │   │   ├── QuizService.php
│   │   │   └── ScoringService.php
│   │   ├── Ranking/
│   │   │   └── RankingService.php
│   │   ├── Achievement/
│   │   │   └── AchievementService.php
│   │   └── Student/
│   │       └── ProgressService.php
│   │
│   └── Repositories/
│       ├── Contracts/
│       │   ├── UserRepositoryInterface.php
│       │   ├── QuizRepositoryInterface.php
│       │   └── PerguntaRepositoryInterface.php
│       └── Eloquent/
│           ├── UserRepository.php
│           ├── QuizRepository.php
│           └── PerguntaRepository.php
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
│   │   ├── 2024_01_01_000000_create_users_table.php
│   │   ├── 2024_01_01_000001_create_students_table.php
│   │   ├── 2024_01_01_000002_create_admins_table.php
│   │   ├── 2024_01_01_000003_create_avatars_table.php
│   │   ├── 2024_01_01_000004_create_quizzes_table.php
│   │   ├── 2024_01_01_000005_create_perguntas_table.php (sua tabela)
│   │   ├── 2024_01_01_000006_create_respostas_table.php (sua tabela)
│   │   ├── 2024_01_01_000007_create_quiz_perguntas_table.php (pivot)
│   │   ├── 2024_01_01_000008_create_quiz_attempts_table.php
│   │   ├── 2024_01_01_000009_create_quiz_answers_table.php
│   │   ├── 2024_01_01_000010_create_achievements_table.php
│   │   └── 2024_01_01_000011_create_user_achievements_table.php
│   │
│   └── seeders/
│       ├── AvatarSeeder.php
│       ├── PerguntaSeeder.php
│       ├── QuizSeeder.php
│       └── AchievementSeeder.php
│
└── routes/
    ├── web.php
    └── api.php
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

### API Routes (api.php)
```
POST   /api/auth/login
POST   /api/auth/register
POST   /api/auth/logout
POST   /api/auth/password/reset

GET    /api/student/dashboard
GET    /api/student/quizzes
GET    /api/student/quizzes/{id}
POST   /api/student/quizzes/{id}/start
POST   /api/student/quizzes/attempts/{id}/submit
GET    /api/student/ranking
GET    /api/student/profile
PUT    /api/student/profile

GET    /api/admin/dashboard
GET    /api/admin/students
GET    /api/admin/students/{id}
PUT    /api/admin/students/{id}
DELETE /api/admin/students/{id}
GET    /api/admin/quizzes
POST   /api/admin/quizzes
PUT    /api/admin/quizzes/{id}
DELETE /api/admin/quizzes/{id}
GET    /api/admin/perguntas
POST   /api/admin/perguntas
PUT    /api/admin/perguntas/{id}
DELETE /api/admin/perguntas/{id}
GET    /api/admin/reports
```

### Web Routes (web.php - usando Inertia)
```
GET    /
GET    /login
POST   /login
GET    /cadastro
POST   /cadastro

GET    /aluno/dashboard
GET    /aluno/quizzes
GET    /aluno/quizzes/{id}
GET    /aluno/ranking
GET    /aluno/perfil

GET    /admin/dashboard
GET    /admin/alunos
GET    /admin/quizzes
GET    /admin/perguntas
GET    /admin/relatorios
```

## 4. Fluxo de Dados
```
React Frontend (Vite)
      ↕️ (Axios/Fetch)
Laravel API Routes
      ↕️
Controllers
      ↕️
Services (Business Logic)
      ↕️
Repositories
      ↕️
Models (Eloquent ORM)
      ↕️
MySQL Database

| #   | Categoria                             | Perguntas | %   |
|-----|---------------------------------------|-----------|-----|
| 1   | Aspectos Legais, Sociais e Prevenção  | 21        | 21% |
| 2   | Riscos para Grupos Vulneráveis        | 17        | 17% |
| 3   | Efeitos Respiratórios e Pulmonares    | 17        | 17% |
| 4   | Dependência e Nicotina                | 17        | 17% |
| 5   | Composição e Substâncias Químicas     | 15        | 15% |
| 6   | Efeitos Cardiovasculares e Sistêmicos | 13        | 13% |