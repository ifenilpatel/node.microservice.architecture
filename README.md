# Node Microservice Architecture

This repository follows a microservices architecture pattern using Node.js.

## Project Structure

```
node.microservice.architecture/
│── services/
│   │── api-gateway/
│   │── authentication-module/
│   │── master-module/
│   │── notification-module/
```

### Services Overview

#### 1. API Gateway

- Acts as the entry point for the microservices.
- Implements `http-proxy-middleware` to route requests to respective microservices.
- Handles authentication-module, master-module amd notification-module.
