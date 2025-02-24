# Backend API Planning Document

## 1️⃣ **Routes We May Require**

### **Authentication Routes**
- `POST /auth/login` → Authenticate user via GitHub OAuth.
- `GET /auth/profile` → Retrieve user profile (authenticated route).
- `POST /auth/logout` → Invalidate user session.

### **Project Management Routes**
- `GET /projects` → Fetch all projects.
- `GET /projects/:id` → Fetch project details by ID.
- `POST /projects` → Create a new project.
- `PUT /projects/:id` → Update an existing project.
- `DELETE /projects/:id` → Delete a project.

### **Task Management Routes**
- `GET /projects/:projectId/tasks` → Fetch all tasks for a project.
- `GET /tasks/:id` → Fetch a specific task.
- `POST /tasks` → Create a new task.
- `PUT /tasks/:id` → Update an existing task.
- `DELETE /tasks/:id` → Delete a task.

### **User Management Routes**
- `GET /users` → Fetch all users (Admin only).
- `GET /users/:id` → Fetch user details.
- `PUT /users/:id` → Update user details.
- `DELETE /users/:id` → Delete a user (Admin only).

### **Logs & Monitoring Routes**
- `GET /logs` → Fetch system logs (Admin only).
- `GET /health` → Check API health status.

---

## 2️⃣ **Data Structures**

### **User Schema**
```json
{
  "id": "number",
  "github_id": "string",
  "name": "string",
  "email": "string",
  "avatar_url": "string",
  "created_at": "Date"
}
```

### **Project Schema**
```json
{
  "id": "number",
  "name": "string",
  "slug": "string",
  "description": "string",
  "project_url": "string",
  "created_by": "number",
  "created_at": "Date"
}
```

### **Task Schema**
```json
{
  "id": "number",
  "title": "string",
  "body": "string",
  "assignees": ["string"],
  "labels": ["string"],
  "is_active": "boolean",
  "is_repetitive": "boolean",
  "repeat_frequency": "Weekly | Fortnightly | Monthly | null",
  "projectId": "number",
  "created_at": "Date"
}
```

---

## 3️⃣ **Data Operations**

| Operation       | Resource  | Action |
|----------------|----------|--------|
| Create         | Project  | Add new project to DB |
| Read          | Project  | Fetch all projects or a specific one |
| Update         | Project  | Modify an existing project |
| Delete         | Project  | Remove a project from DB |
| Create         | Task     | Add a new task to a project |
| Read          | Task     | Fetch tasks related to a project |
| Update         | Task     | Modify an existing task |
| Delete         | Task     | Remove a task from DB |

---

## 4️⃣ **Authentication Setup**

### **GitHub OAuth Authentication**
- Users will log in via GitHub OAuth.
- Backend will verify OAuth token and store session/token.
- Protected routes will require authentication headers.

### **JWT Authentication (Optional)**
- Instead of session-based authentication, use JWT tokens.
- Token is issued on login and must be sent in headers for API calls.

---

## 5️⃣ **Other Important Information**

- **Database Choice**: PostgreSQL / MongoDB / MySQL
- **Hosting**: Vercel, Heroku, or AWS Lambda
- **Rate Limiting**: Implement to prevent abuse (e.g., 100 requests per minute per IP)
- **Logging & Monitoring**: Use tools like Winston, Logstash, or ELK stack
- **Environment Variables**:
  - `GITHUB_CLIENT_ID`
  - `GITHUB_CLIENT_SECRET`
  - `DATABASE_URL`
  - `JWT_SECRET` (if using JWT)

### **Tech Stack Recommendation**
- **Backend Framework**: Node.js with Express.js or NestJS
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: GitHub OAuth + JWT (optional)
- **API Documentation**: Swagger or Postman
- **Caching**: Redis (for performance improvement)

---

## 🎯 **Next Steps**
- Define the final backend stack (Express.js vs. NestJS)
- Choose database (PostgreSQL / MySQL / MongoDB)
- Set up GitHub OAuth authentication
- Develop API routes and controllers
- Write tests for authentication and CRUD operations
- Deploy to cloud service

---

This document serves as the foundational plan for building the backend API for our task management system. 🚀 Let me know if you need any modifications or additional details!

