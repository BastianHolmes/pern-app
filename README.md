## PERN-Стек приложение 
__CRUD__ приложение для работы с ресторанами. Имеет набор фич для работы c данными, сами данные хранятся в базе Postgres.

#### Стек Frontend
- React
- TypeScript
- Axios
- Vite 
#### Стек Backend
- Node js
- Express
- PostgreSQL
  
### Features
- Три страницы: Список ресторанов, страница с комментариями и страница обновления ресторана
- Добавление, обновление, удаление ресторана в списке
- Каждый ресторан имеет отзывы, средний рейтинг - отзывы с рейтингом можно добавлять на соответствующей странице

### Начало работы
1. Откройте папку __/server__, создайте .env файл с данными для postgres, например:
```js
PORT=5432

POSTGRES_USER = name
POSTGRES_HOST = localhost
POSTGRES_DB = pern_app
POSTGRES_PASSWORD = name
```
2. Установите необходимые зависимости для сервера командой __yarn__ в терминале
3. Запускай сервер командой __yarn start__.
4.  Откройте папку __/client__, командой __yarn__ устанавливаете все зависимости и далее в терминал введи __yarn dev__
5.  Вуаля, открывается окно с приложением!
