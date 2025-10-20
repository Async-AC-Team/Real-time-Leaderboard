# PRD: Real-Time Leaderboard

## 1. Project Overview

The goal is to build a real-time leaderboard platform where users can register, submit scores for different games or activities, and view leaderboards that update in real time. Redis will power the leaderboard ranking logic for performance and scalability, while PostgreSQL will store persistent user and score history data.

## 2. Core Features

### 1. User Authentication

- Users can register and log in using email and password.
- JWT-based authentication (access + refresh tokens).
- Auth endpoints (register, login, logout, refresh).
- Tech: NestJS (Auth module), PostgreSQL (Users table).

### 2. Score Submission

- Users submit scores for specific games or activities.
- Each submission updates Redis leaderboard and persists in PostgreSQL for history.
- API validation (score must be numeric, positive, and higher than previous if applicable).
- Tech: NestJS (Scores module), Redis (Sorted Sets), PostgreSQL (ScoreHistory table).

### 3. Leaderboard Display

- Global leaderboard showing top N players across all games.
- Individual game leaderboard view (e.g., “Top 10 in Chess”).
- Paginated or infinite scroll leaderboard (Redis rank queries).

### 4. Real-Time Updates

- When a user submits a new score, others viewing the leaderboard see live updates.
- Implemented via WebSocket (Socket.IO).
- Tech: Socket.IO integration between NestJS and React.

### 5. User Rankings

- Users can view their personal rank and score among all players.
- Endpoint: /leaderboard/:game/my-rank.
- Tech: Redis rank query (ZREVRANK + ZSCORE).

### 6. Top Players Report

- Generate reports of top players within a date range.
- Admin or system-generated (JSON or CSV).
- Example: “Top players in Game X between Oct 1–7.”
- Tech: Query PostgreSQL (ScoreHistory) for aggregated data.
