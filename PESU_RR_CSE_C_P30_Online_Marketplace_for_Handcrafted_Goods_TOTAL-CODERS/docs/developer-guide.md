# Developer Guide

## Setup Development Environment

1. Install Prerequisites
   - Node.js (v14 or higher)
   - MySQL (v8 or higher)
   - Git

2. Clone & Install
   ```bash
   git clone <repository-url>
   cd <project-directory>
   npm run install:all
   ```

3. Configure Environment
   - Copy `.env.example` to `.env`
   - Update database credentials

4. Start Development Servers
   ```bash
   npm run dev
   ```

## Project Structure

### Backend (/src/backend)
- `controllers/` - Request handlers
- `models/` - Database models
- `routes/` - API routes
- `middleware/` - Custom middleware
- `utils/` - Helper functions
- `server.js` - Main application file

### Frontend (/src/frontend)
- `src/components/` - React components
- `src/pages/` - Page components
- `src/services/` - API services
- `src/context/` - React context
- `src/utils/` - Helper functions

### Database (/src/database)
- `migrations/` - Database migrations
- `seeders/` - Seed data
- `models/` - Sequelize models

## Testing
```bash
npm test
```