# GraphQL_Landmarks

## Веб-приложение для управления данными о мировых достопримечательностях

### 🚀 Технологии:
- **Node.js**
- **GraphQL**

### 👨‍💻 Команда разработчиков:
- Арсений Богатырёв
- Никита Карпов

---

## 🔥 Основной функционал

### 👤 Пользователи (User)
- Регистрация и аутентификация (JWT)
- Просмотр информации о пользователе

### 🏛 Достопримечательности (Landmark)
- Создание, редактирование, удаление (только своих)
- Просмотр списка и деталей
- Фильтрация по стране, сортировка по рейтингу

### 🖼 Фотографии (Photo)
- Добавление, просмотр, удаление (только своих)

### ⭐ Оценки (Rating)
- Добавление, редактирование, удаление (только своих)
- Просмотр средней оценки

### 🔐 Безопасность
- Хэширование паролей, аутентификация через JWT
- Доступ к изменениям только для владельца данных

---

## 📌 Руководство по запуску

1. **Склонировать репозиторий:**  
   ```sh
   git clone https://github.com/ArseniBogatorjov/GraphQL_Landmarks.git
   ```

2. **Перейти в папку с проектом:**  
   ```sh
   cd Graph_NKAB
   ```

3. **Установить зависимости:**  
   ```sh
   npm install graphql@15.3.0 express-graphql@latest @graphql-tools/merge
   ```

   ```sh
   npm i
   ```

4. **Создать базу данных через XAMPP.**  

5. **Переименовать `.env.example` в `.env` и заполнить его.**  

6. **Запустить проект:**  
   ```sh
   node .
   ```

7. **Использовать эндпоинт:**  
   [http://localhost:3000/graphql](http://localhost:3000/graphql)

---

## 📡 Запросы

### 🟩 Пользователи 🟩


### 🔹 Получение списка пользователей (Открытый)
```graphql
query {
  landmarks {
    id
    name
    country
    rating
  }
}
```
### 🔹 Получение информации о пользователе (о себе) (Владелец)
```graphql
query {
  profile {
    id
    username
    email
    password
  }
}
```
### 🔹 Добавление пользователя  (Открытый)
```graphql
mutation {
  addUser(username: "john_doe", email: "john@example.com", password: "password123") {
    id
    username
    email
    password
  }
}
```
### 🔹 Логин пользователя (Открытый)
```graphql
mutation {
  loginUser(email: "john@example.com", password: "password123")
}
```
### 🔹 Токен (в headers)
```graphql
{
  "x-access-token": ""
}
```

### 🟩 Достопримечательности 🟩

### 🔹 Получение всех достопримечательностей (Открытый)
```graphql
query {
  Landmarks {
    id
    name
    description
    location
    country
    imageURL
  }
}
```
### 🔹 Получение достопримечательности по id (Открытый)
```graphql
query {
  landmark(id: 1) {
    id
    name
    description
    location
    country
    imageURL
    userId
  }
}
```

### 🔹 Добавление достопримечательности (Авторизованный пользователь)
```graphql
mutation {
  addLandmark(
    name: "Колизей",
    description: "Древний амфитеатр в центре Рима, один из самых известных памятников Римской империи.",
    location: "Рим",
    country: "Италия",
    imageURL: "https://example.com/coliseum.jpg",
  ) {
    id
    name
    description
    location
    country
    imageURL
  }
}
```
### 🔹 Обновление достопримечательности (Владелец)
```graphql
mutation {
  updateLandmark(
    id: 2,
    name: "UPTATED Колизей",
    description: " UPTATED Самый большой амфитеатр в Риме, использовавшийся для гладиаторских боёв и других публичных мероприятий.",
    location: "UPTATED Рим",
    country: "UPTATED Италия",
    imageURL: "UPTATED https://example.com/coliseum_updated.jpg",
  ) {
    id
    name
    description
    location
    country
    imageURL
  }
}
```
### 🔹 Удаление достопримечательности (Владелец)
```graphql
mutation {
  deleteLandmark(id: 2)
}
```


### 🟩 Фильтрация и сортировка 🟩

### 🔹 Получение достопримечательностей по стране (Открытый)
```graphql
query {
  landmarkByCountry(country: "France") {
    id
    name
    description
    location
    country
    imageURL
    userId
  }
}
```
