# Logging Middleware

A reusable logging middleware package for web applications to send logs to a centralized logging server.

## Installation

```bash
npm install logging-middleware
```

## Usage

```javascript
import { Log } from "logging-middleware";

// Example usage
try {
  // Your code here
} catch (error) {
  Log("frontend", "error", "component", "An error occurred: " + error.message);
}
```

## API

### Log(stack, level, package, message)

Sends a log entry to the logging server.

- `stack` (string): Can be either "backend" or "frontend"
- `level` (string): Log level - one of "debug", "info", "warn", "error", "fatal"
- `package` (string): The package/module where the log originated
- `message` (string): The log message

### Allowed Values

#### Stack

- "backend"
- "frontend"

#### Level

- "debug"
- "info"
- "warn"
- "error"
- "fatal"

#### Package

##### Backend Only

- "cache"
- "controller"
- "cron job"
- "db"
- "domain"
- "handler"
- "repository"
- "route"
- "service"

##### Frontend Only

- "api"
- "component"
- "hook"
- "page"
- "state"
- "style"

##### Both Backend and Frontend

- "auth"
- "config"
- "middleware"
- "utils"
