# PlumLabs Web Application

PlumLabs Web Application is a robust platform designed for portfolio management, authentication, and rich editor functionality. Built using modern web technologies like React and Firebase, it provides seamless API integrations and an efficient chat service.

---

## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Project Modules](#project-modules)
3. [Code Flow and Structure](#code-flow-and-structure)
   - [Folder Structure](#folder-structure)
   - [Environment Variables](#environment-variables)
   - [Config Details](#config-details)
4. [Important Libraries](#important-libraries)
5. [External Integrations](#external-integrations)
6. [Repository and Branching Strategy](#repository-and-branching-strategy)
7. [Development Environment Setup](#development-environment-setup)
8. [QA/Demo Environment](#qa-demo-environment)
9. [Deployment](#deployment)

---

## Technologies Used

- **Frontend Framework**: React
- **Chat Service**: Firebase
- **API Integration**: Plum API Service

---

## Project Modules

1. **Authentication**  
   Secure login and authentication features.
   
2. **Portfolio Management**  
   Tools and features for managing user portfolios effectively.

3. **Editor Functionality**  
   A rich text editor with robust capabilities.

---

## Code Flow and Structure

### Folder Structure

The project follows a modular structure to ensure scalability and maintainability.

### Environment Variables

Environment-specific variables are defined for secure and consistent operation. Ensure all required variables are added to your `.env` file before running the application.

### Config Details

- **Plum API Service**: Handles all API interactions for core functionalities.
- **Firebase**: Manages chat service and user communication.

---

## Important Libraries

- **React**: Core library for building the user interface.
- **Eslint**: Ensures code quality and consistency.
- **Postman**: Useful for API testing and debugging.

---

## External Integrations

1. **Plum API Service**  
   Handles API calls for portfolio management, authentication, and other services.

2. **Firebase**  
   Provides the chat functionality. Refer to `Chat system implementation.docx` for implementation details.

---

## Repository and Branching Strategy

- **GitHub Repository**: [PlumLabsFM/PlumLabs-web](https://github.com/PlumLabsFM/PlumLabs-web)
- **Branching Strategy**:
  - `main`: Production branch.
  - `develop`: Development branch for merging all new features.
  - `feature-specific branches`: Temporary branches for specific features (auto-deleted upon PR merge).
  - **Release Creation**: To be implemented for each PR merge to the main branch.

---

## Development Environment Setup

### Prerequisites

1. **Install Node.js**: Version `20.x`.
2. **Install Git**: For version control.
3. **Install VS Code**: Preferred code editor.
4. **VS Code Extensions**: Install ESLint for linting.

### Steps to Setup

1. Clone the `develop` branch of the repository:
   ```bash
   git clone -b develop https://github.com/PlumLabsFM/PlumLabs-web.git
   cd PlumLabs-web
