# Angular Scenes Architecture for a Simple Project

This repository demonstrates an architecture for structuring an Angular project based on **Scenes**. The goal is to group Angular's core functionalities in a way that simplifies project setup and promotes clean, modular development.

## Core Concept: Scenes

The main feature of this architecture is the **Scenes**, which are loaded dynamically through Angular's router. Each Scene embeds its logic and displays its content within the corresponding layout, acting as a child. This setup ensures clear separation of layout and functionality, making the application easier to maintain.

### Folder Structure

```bash
app/
├── layout/
├── model/
├── scenes/
│   └── components/
└── services/
```

### Scaling to More Complex Projects: Using PODS Architecture

For larger, more complex projects, you can extend this structure by adopting a **PODS architecture**.

**What is PODS Architecture?**

- A POD (Presentation Object Directory) is a modular way of organizing a project. It groups all files related to a specific feature or functionality (e.g., components, services, models, etc.) in a single folder. This makes the code more cohesive and easier to scale.

**Adding an Abstraction Layer (Containers):**

- You can add a **container layer** between Scenes and components to manage logic and data loading.
- Scenes would focus solely on orchestrating layout and presentation.
- Containers would handle the data fetching and business logic.
- Components inside each container would then be responsible for presenting the data.

For more details on implementing PODS, check out this example in a [React architecture](#https://github.com/oleojake/basic-pod-architecture-react-boiler-template).

---

## Quick Start: Angular Basics

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.7.

### Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code Scaffolding

Run `ng generate component component-name` to generate a new component. You can also use:

- `ng generate directive`
- `ng generate pipe`
- `ng generate service`
- `ng generate class`
- `ng generate guard`
- `ng generate interface`
- `ng generate enum`
- `ng generate module`

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).

### Running End-to-End Tests

Run `ng e2e` to execute end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further Help

For more help with the Angular CLI, use `ng help` or refer to the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

---

## Additional Notes

- This structure works well for small to medium-sized projects but can be adapted for larger applications by introducing reusable shared components and services in a `shared` or `core` folder.
- Use a `shared` folder to centralize reusable UI components (e.g., buttons, loaders) and services.
- If the app grows, consider lazy loading modules for better performance.

Feel free to adapt this architecture based on the specific needs of your project!
