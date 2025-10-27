# CS-465: Full Stack Development with MEAN

## Overview

This project demonstrates full-stack web development using the MEAN stack: MongoDB, Express, Angular, and Node.js. The goal was to build a secure, scalable travel booking application that connects the frontend and backend through RESTful APIs. The result is a dynamic platform that allows users to view, manage, and update trip information efficiently.

## Architecture

The project architecture shows how the MEAN components interact to form a complete system. On the frontend, I used Express HTML templates for static content, providing fast load times and simple deployment. I then introduced JavaScript to add interactivity through DOM manipulation, enabling partial page updates without reloads. Finally, I developed a Single-Page Application (SPA) in Angular, which delivered a seamless experience through reusable components and real-time data binding.

On the backend, Node.js and Express handled routing, API logic, and validation. Data was stored in MongoDB, whose flexible document model supported evolving data structures like user and trip records. Its JSON-like format worked naturally with the JavaScript environment, improving data consistency and development speed.

## Functionality

All client-server communication used JSON, ensuring consistent and lightweight data exchange. When users interacted with the Angular interface, requests were sent in JSON to the backend, which returned structured responses that updated the view in real time. During development, I refactored the code to improve performance and maintainability. Repeated HTML and JavaScript logic were replaced with Angular components, and all API calls were centralized into shared services, creating a cleaner, modular codebase.

## Testing and Security

API endpoints were tested using Postman to confirm proper responses and error handling. Routes such as GET /api/trips and PUT /api/trips/:tripId were verified for input validation and data integrity. Security measures included authentication to confirm user identity and authorization to control access by role. Tests ensured that protected routes required valid tokens and rejected unauthorized access, maintaining the application’s integrity.

## Reflection

This project strengthened my understanding of full-stack design, data flow, and secure API development. I improved my skills in RESTful architecture, code refactoring, and modular design, while gaining practical experience with Git and Agile workflows. Building both the client and server sides deepened my confidence in developing reliable, scalable web applications.

## Technologies Used

Frontend: Angular, JavaScript, HTML, CSS  
Backend: Node.js, Express.js  
Database: MongoDB  
Testing Tools: Postman, MongoDB Compass  
Version Control: Git, GitHub  

Author:  
Samim Dawood  
CS-465: Full Stack Development with MEAN  
Southern New Hampshire University
