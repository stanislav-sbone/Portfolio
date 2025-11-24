## Портфолио Frontend разработчика

Интерактивный SPA на React + TypeScript с отдельным Express-сервисом для обработки формы обратной связи. Проект демонстрирует стек, проекты и навыки разработчика, поддерживает переключение темы и полноценный контакт через email.

## Основные возможности

- Навигация по разделам `Home / About / Skills / Projects / Contacts` без перезагрузки благодаря `react-router`.
- Галерея проектов с карточками и детальными модальными окнами.
- Контактная форма с валидацией (`react-hook-form`), уведомлениями (`react-toastify`) и отправкой письма через собственный Express API.
- Глобальный переключатель темы (light/dark) с сохранением состояния в `localStorage`.
- Адаптивная шапка с бургер-меню, CTA-кнопками и ссылками на соцсети.
- Лендинг-блоки «Обо мне», «Навыки» и «Проекты» конфигурируются через отдельные файловые источники данных.

## Технологии

| Область         | Стек                                                                                          |
| --------------- | --------------------------------------------------------------------------------------------- |
| Фронтенд        | React 19, TypeScript, Vite, React Router, CSS Modules, React Hook Form, Axios, React Toastify |
| Состояние/утилы | Контекст для темы, кастомные хуки                                                             |
| Бэкенд          | Node.js, Express 5, Nodemailer, CORS, express-rate-limit                                      |
| Инфраструктура  | PNPM, ESLint, Prettier, Husky + lint-staged                                                   |

## Структура проекта

```
.
├── src/                 # Vite + React приложение
│   ├── components/      # Header, Footer, UI-элементы
│   ├── pages/           # Home/About/Skills/Projects/Contacts и их данные
│   ├── contexts/        # ThemeProvider
│   ├── hooks/           # Кастомные хуки
│   ├── services/        # Axios-клиент для backend API
│   └── types/           # Общие типы (projects, skills и т.д.)
├── public/              # Статические ресурсы (иконки, изображения проектов)
├── server/              # Express API для отправки писем
│   ├── src/config/      # Загрузка env-переменных
│   ├── src/controllers/ # HTTP-слой
│   ├── src/services/    # Nodemailer логика
│   └── src/routes/      # Маршруты /api/contact
└── README.md
```

## Быстрый старт

### Требования

- Node.js ≥ 18
- PNPM ≥ 8 (или npm/yarn, но команды ниже приведены для pnpm)
- Gmail-аккаунт с app-password (для отправки писем) либо другой SMTP, настроенный в `contactService`.

### Установка зависимостей

```bash
pnpm install          # фронтенд (корень проекта)

cd server
pnpm install
```

### Переменные окружения для backend

Создайте файл `server/.env`:

```
PORT=5000
EMAIL_USER=you@gmail.com
EMAIL_PASS=почтовый_app_password
RECIPIENT_EMAIL=куда_отправлять@пример.com
```

### Локальный запуск

```bash
# В корне
pnpm dev

# В другой вкладке для backend
cd server
pnpm dev
```

### Сборка и предпросмотр

```bash
pnpm build           # tsc --build + vite build
pnpm preview         # локальный предпросмотр билда

cd server
pnpm build && pnpm start
```

### Линтинг и форматирование

```bash
pnpm lint            # ESLint
pnpm exec prettier --check .
```

Husky + lint-staged автоматически форматируют изменённые файлы перед коммитом.

## Архитектурные заметки

- Данные (проекты, навыки, CTA) вынесены в отдельные файлы, что упрощает масштабирование и локализацию.
- Темизация реализована через контекст и data-атрибуты `data-theme`, что удобно для CSS-переключений и соответствует принципам KISS.
- Контактная форма валидирует ввод как на клиенте, так и на сервере, применяя rate limit (5 запросов в минуту) и отправку писем через Nodemailer.
- Backend построен по слоям Controller → Service → Transport для соблюдения SRP и SOLID.
