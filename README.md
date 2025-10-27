# CS-465: Full Stack Development with MEAN

## Overview

This project demonstrates full-stack web development using the **MEAN stack**, which includes **MongoDB**, **Express**, **Angular**, and **Node.js**. The goal was to design and build a secure, scalable travel booking application that allows users to view, manage, and update trip information through a modern web interface. The project connects the frontend and backend through RESTful APIs to maintain efficient and consistent data communication across the application.

---

## Architecture

The architecture of this project highlights how the MEAN stack components interact to create a unified full-stack system. On the frontend, I implemented three main approaches to compare different methods of building user interfaces. The first approach involved using **Express HTML templates** for the customer-facing portion of the site. These templates rendered server-side HTML, which allowed for fast load times and simplified deployment of static content. This approach worked well for informational and landing pages that required minimal user interaction.

Next, I enhanced interactivity by using **JavaScript** to manipulate the Document Object Model (DOM) directly. This method improved responsiveness by enabling updates to specific sections of the page without reloading the entire interface. Finally, I built a **Single-Page Application (SPA)** using **Angular**, which offered a more dynamic and modern experience. Angular’s component-based structure allowed me to organize the application into smaller, reusable modules that improved scalability and made maintenance easier. By updating data in real time instead of reloading entire pages, the SPA provided a seamless experience for users navigating between features.

On the backend, I developed RESTful APIs using **Node.js** and **Express**. These APIs handled client requests, performed data validation, and connected to the database layer. The backend structure followed best practices for modularity and clear routing, ensuring that each endpoint was responsible for a specific function. For data management, I used **MongoDB**, a NoSQL database that stores information in flexible JSON-like documents. Its schema-less design was ideal for handling user and trip data that could evolve over time. The natural integration between MongoDB and JavaScript simplified development, while its scalability supported future application growth.

---

## Functionality

The application relied on **JSON (JavaScript Object Notation)** for all client-server communication. JSON acted as the common format for sending and receiving structured data, which made the integration between Angular and Express seamless. When a user submitted a request from the frontend, such as retrieving or updating trip information, the data was sent in JSON format to the backend API. The server processed the request, interacted with MongoDB, and returned a JSON response that Angular used to update the user interface in real time. This consistent exchange of data across the stack reduced conversion overhead and ensured a reliable flow of information.

Throughout the project, I continuously refactored and optimized the code to improve maintainability and performance. I replaced repeated HTML and JavaScript logic with **Angular components**, which encapsulated reusable functionality such as displaying trip details or handling form submissions. I also centralized API requests using **Angular services**, which allowed for cleaner code and reduced redundancy. These updates made the project easier to debug and extend, laying the groundwork for a scalable application architecture.

---

## Testing and Security

Testing was an essential part of ensuring the reliability of both frontend and backend components. I used **Postman** to validate API endpoints by sending test requests and verifying that the responses matched expected outputs. Commonly tested routes included `GET /api/trips`, which retrieved trip data from the database, and `PUT /api/trips/:tripId`, which updated a specific trip record. Each HTTP method, including `POST`, `GET`, `PUT`, and `DELETE`, was verified for correct behavior, input validation, and proper handling of error responses. These tests confirmed that the backend adhered to RESTful design principles and maintained consistent data integrity.

Security was addressed through **authentication** and **authorization** mechanisms. Authentication verified that users were who they claimed to be, while authorization restricted access to certain actions based on user roles. I tested the system to ensure that protected routes required valid tokens and that unauthorized requests were rejected. This validation confirmed that data could only be accessed or modified by users with appropriate permissions, which is critical for protecting sensitive information in a web application.

---

## Reflection

This project represented a significant step in my development as a software engineer. Working with the full MEAN stack helped me understand how the frontend, backend, and database interact to form a cohesive system. I strengthened my skills in **RESTful API design**, **data modeling**, **modular development**, and **code refactoring**. I also improved my problem-solving and debugging abilities by resolving real integration challenges between Angular, Express, and MongoDB. Beyond technical skills, I gained experience applying **Agile methodologies** and **version control** through Git and GitHub, which mirrored professional development practices. Completing this project made me more confident in building complete, production-ready web applications and deepened my understanding of full-stack development workflows.

---

## Technologies Used

**Frontend:** Angular, JavaScript, HTML, CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (NoSQL)  
**Testing Tools:** Postman, MongoDB Compass  
**Version Control:** Git, GitHub  

---

**Author:**  
**Samim Dawood**  
*CS-465: Full Stack Development with MEAN*  
Southern New Hampshire University
