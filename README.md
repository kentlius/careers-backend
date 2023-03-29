# Careers Backend

REST API to show the list of jobs with JWT authentication.

## Features

- [x] JWT Authentication and Authorization
- [x] Bcrypt password hashing
- [x] Cookies
- [x] Filter jobs by location/description/type
- [x] Pagination

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [PostgreSQL](https://www.postgresql.org/) - Open source object-relational database system

### Installation

1. Clone the repository

```bash
git clone https://github.com/kentlius/careers-backend
```

2. Install dependencies

```bash
npm install
```

3. Copy the `.env.example` file to `.env` and update the environment variables

```bash
cp .env.example .env
```

4. Push the database schema

```bash
npx prisma db push
```

5. Start the server

```bash
npm start
```

## API Reference

### Authentication

#### Register

```http
POST /auth/register
```

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `username` | `string` | **Required**. User username |
| `password` | `string` | **Required**. User password |

#### Login

```http
POST /auth/login
```

| Body       | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `username` | `string` | **Required**. User username |
| `password` | `string` | **Required**. User password |

### Jobs

#### List Jobs

```http
GET /jobs
```

| Parameter     | Type     | Description                   |
| :------------ | :------- | :---------------------------- |
| `page`        | `number` | **Optional**. Page number     |
| `description` | `string` | **Optional**. Job description |
| `location`    | `string` | **Optional**. Job location    |
| `full_time`   | `string` | **Optional**. Job type        |

#### Get Job by ID

```http
GET /jobs/:id
```
