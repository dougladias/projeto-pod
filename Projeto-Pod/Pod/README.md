# Sistema de Conscientizacao sobre POD/Cigarro Eletronico

Sistema educacional gamificado para conscientizacao sobre os riscos do uso de POD e cigarros eletronicos.

## Pre-requisitos

Antes de comecar, certifique-se de ter instalado:

- **PHP 8.2+** (Herd Lite, XAMPP ou PHP nativo)
- **Composer** (gerenciador de dependencias PHP)
- **Node.js 18+** e **NPM** (para frontend React)
- **Docker Desktop** (para banco de dados MySQL)
- **Git** (para controle de versao)

- **Documentação** (https://laravel.com/docs/12.x) - !importante

### Verificar Instalacoes:

```bash
# Verificar PHP
php -v
# Deve mostrar: PHP 8.2+

# Verificar Composer
composer --version

# Verificar Node.js e NPM
node -v
npm -v

# Verificar Docker
docker --version
docker-compose --version
```

## Instalaçao 

### Instale as Dependências PHP

```bash
composer install
```

### Instale as Dependencias JavaScript

```bash
npm install
```

### Gere a Chave da Aplicaçao

```bash
php artisan key:generate
```

## Configuracoo do Banco de Dados

### **Opeçao 1: MySQL com Docker** (Recomendado para Desenvolvimento)

#### Certifique-se que o Docker está rodando

Abra o **Docker Desktop** e aguarde ele iniciar.

#### Inicie o Container MySQL

```bash
docker-compose up -d
```

Isso vai:
- Baixar a imagem MySQL 8.0 (primeira vez demora ~2-5 minutos)
- Criar um container chamado `mysql-pod`
- Configurar banco: `pod_database`
- Usuario: `pod_user`
- Senha: `pod_password_123`

#### Teste a Conexão

```bash
php artisan db:show
```

Se aparecer **MySQL 8.0** com status conectado, está funcionando!

## Como Rodar o Projeto

### Rode as Migrations (Criar Tabelas)

```bash
php artisan migrate
```

Isso vai criar todas as tabelas no banco de dados.

### Popular o Banco com Dados de Exemplo

```bash
php artisan db:seed

```
### Credenciais de Desenvolvimento

email: admin@dev.com
password: admin123

### Inicie o Servidor(Back-end) Laravel

### rode:

```bash
php artisan serve
```

O servidor vai iniciar em: **http://localhost:8000**

O servidor do Banco de Dados **http://localhost:8080**

- Usuário: pod_user
- Senha: pod_password_123
- Base de dados: pod_database

### Abrir novo terminal para iniciar Front-end:

**Para desenvolvimento (com hot reload):**

```bash
npm run dev
```

### Backend (Laravel)

```bash

# Ver status do banco
php artisan db:show

# Rodar migrations
php artisan migrate

# Iniciar servidor de desenvolvimento
php artisan serve

# Limpar cache
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
```

### Frontend (React + Vite + tailwind CSS)

```bash
# Desenvolvimento com hot reload
npm run dev

# Verificar codigo 
npm run lint

# Formatar codigo
npm run format

```
### Docker (Banco de Dados)

```bash
# Iniciar containers
docker-compose up -d

# Ver logs do MySQL
docker-compose logs mysql

```

### Erro ao rodar `npm run dev`

**Problema**: Dependências não instaladas ou desatualizadas.

**Solução**:
```bash
# Remova node_modules e reinstale
rm -rf node_modules
npm install

bash
# Em um terminal, rode:
npm run dev (Front-end)

# Em outro terminal:
php artisan serve (Back-end)
```

**Desenvolvido para a conscientização sobre a saúde**