# Тестовое задание на позицию веб-разработчика

## Задание
Необходимо написать веб-приложение, которое будет получать данные с публичного API, отображать их на странице с использованием компонентов React и сохранять информацию в Local Storage.

## Требования
### Основные:
- [x] Используйте стек технологий, указанный в описании: JavaScript/Typescript, React, Redux. 
- [x] Выберите любое доступное публичное REST API для этого задания. **Использован github api**.
- [x] Создайте страницу, на которой будет отображаться список данных, полученных с  API.
- [x] Отобразите полученные данные на странице с использованием компонентов React. Или любого фронтед фреймворка для отображения данных (например, Bootstrap, MaterialUI, ReactAria). **Использован MaterialUI**
- [x] Добавьте возможность сохранения выбранных данных в Local Storage. При обновлении страницы данные должны быть загружены из Local Storage и отображены на странице.

### Дополнительные:

- [x] Реализуйте пагинацию или бесконечную подгрузку данных при прокрутке страницы.
- [ ] Добавьте возможность фильтрации и сортировки данных на странице.
- [ ] Создайте форму для добавления новых данных и имитируйте отправку, сохраняя данные в файл.​​

## Запуск на локальном устройстве
Клонируйте проект в рабочую директорию:
```bash
git clone https://github.com/kotelnikov-vladislav/test-task.git
```

Перейдите в проект:
```bash
cd test-task
```

Создайте .env файл в корне проекта и укажите переменную `ACCESS_TOKEN` (нужно для работы с GitHub API ). Подробнее о том, как получить токен доступа можно прочитать [здесь](https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#keeping-your-personal-access-tokens-secure).

.env файл должен выглядеть так:
```
ACCESS_TOKEN=ghp_xxxxxxxxxxxxxxxxxxx
```

Установите все необходимые зависимости командой:
```
npm i
```

Все! Можно запускать проект:
```
npm run dev
```