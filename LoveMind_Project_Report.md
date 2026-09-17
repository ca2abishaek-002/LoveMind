# LOVEMIND
## AN AI PROXY CHARACTER DATING APP
### A MINI PROJECT REPORT
Submitted by
**V SADHANA (2403727710622168)**

In partial fulfilment for the award of the degree of
**BACHELOR OF ENGINEERING**
IN
**ELECTRONICS AND COMMUNICATION ENGINEERING**

**SRI KRISHNA COLLEGE OF ENGINEERING AND TECHNOLOGY**
An Autonomous Institution | Approved by AICTE | Affiliated to Anna University | Accredited by NAAC with A++ Grade
Kuniamuthur, Coimbatore – 641008.
September 2026

---

## SUSTAINABLE DEVELOPMENT GOALS
The Sustainable Development Goals are a collection of 17 global goals designed to provide a blueprint for achieving a better and more sustainable future for all. The LoveMind project is primarily aligned with **SDG 3 – Good Health and Well-being** and **SDG 9 – Industry, Innovation and Infrastructure**.

LoveMind supports SDG 3 by encouraging authentic connections and helping users find compatible partners through personality-based interactions, reducing the anxiety of traditional superficial dating apps. It supports SDG 9 by applying modern full-stack technologies to build a robust web application that combines a user interface, backend services, authentication, and a database.

| Question | Answer |
|----------|--------|
| Which SDGs does the project support? | SDG 3 – Good Health and Well-being and SDG 9 – Industry, Innovation and Infrastructure. |
| How does the project support these goals? | It provides a personality-first platform for authentic human connections and demonstrates the integration of modern web technologies. |
| What is the expected impact? | Improved mental well-being in dating, structured relationship-building, and practical software-development experience. |
| What is the project limitation? | The AI proxy represents a simulated persona; it does not replace actual human communication and interaction. |

---

## BONAFIDE CERTIFICATE
Certified that this mini project report titled “LoveMind – An AI Proxy Character Dating App” is the bonafide work of **V SADHANA (2403727710622168)** who carried out the mini project under my supervision.

**SIGNATURE**
**DR. D. MOHANA GEETHA**
HEAD OF THE DEPARTMENT
Professor
Department of ECE 
Sri Krishna College of Engineering and Technology
Kuniyamuthur, Coimbatore–641008.

**SIGNATURE**
**DR. B VIJAYALAKSHMI**
SUPERVISOR
Asst Professor
Sri Krishna College of Engineering and Technology
Kuniyamuthur, Coimbatore–641008.

Submitted for the Project viva-voce examination held on ______________________________.

---

## ACKNOWLEDGEMENT
At this juncture, we take the opportunity to convey our sincere thanks and gratitude to the management of the college for providing all the facilities and academic environment required to complete this mini project.

We wish to convey our gratitude to the Principal, **DR. K PORKUMARAN**, for providing encouragement, resources and adequate time to complete the project successfully.

We express our sincere thanks to the Head of the Department, **DR. D. MOHANA GEETHA**, for the valuable support, motivation and guidance provided throughout the development of LoveMind.

We extend our heartfelt gratitude to our project guide for the continuous supervision, technical suggestions and constructive feedback provided during the stages of requirement analysis, design, implementation, testing and documentation.

We also thank our faculty members, classmates, friends and family for their encouragement and support. Their suggestions helped us improve the usability, organization and presentation of the application.

---

## ABSTRACT
Modern dating applications often prioritize superficial swiping based on physical appearance, leading to a lack of genuine connection and increased user frustration. To address this, there is a need for a platform that emphasizes personality, intellect, and authentic compatibility before users even initiate a conversation.

**LoveMind – An AI Proxy Character Dating App** is a full-stack web application designed around the innovative idea of personality-first matching. The system allows users to create an account and complete a situational questionnaire. These answers are used to train an AI proxy that mimics the user's personality. Other users can explore potential matches and chat with their AI proxies to gauge compatibility and chemistry before interacting with the real person.

The application uses a modern web-development architecture. **React** with **Vite** is used for the frontend interface, while **Java Spring Boot** provides a robust backend API layer. **MongoDB** is used to store user information, questionnaires, and chat histories. Passwords are protected using bcrypt hashing, and authenticated routes are protected using JWT (JSON Web Token) based authentication.

The project demonstrates practical concepts such as component-based interface development, REST API communication, form validation, CRUD operations, database modelling, security, error handling, and modular software design. The premium dark-themed interface provides an engaging visual identity, while the implementation remains robust and suitable for academic evaluation.

Keywords: LoveMind, AI Proxy, Dating App, React, Vite, Java, Spring Boot, MongoDB, bcrypt, JWT, REST API.

---

## TABLE OF CONTENTS
1. INTRODUCTION
2. SYSTEM ANALYSIS
3. SYSTEM REQUIREMENTS
4. SYSTEM DESIGN
5. TESTING
6. CONCLUSION AND FUTURE WORK
7. APPENDICES

---

## CHAPTER 1: INTRODUCTION

### 1.1 OVERVIEW
The development of interactive web applications has created opportunities to solve real-world social problems through innovative interfaces. One such challenge is online dating, where users often experience fatigue from endless swiping based solely on photos. 
LoveMind is developed to shift the focus back to personality. It introduces an AI proxy system where a user's situational responses train a simulated version of their mind. Potential matches can chat with this proxy, exploring their intellect, humor, and values in a structured, engaging manner.

The application is designed as a full-stack system. The React frontend is responsible for the visual experience and user interaction. The Spring Boot backend validates requests, manages authentication, processes AI chat logic, and communicates with the database. MongoDB stores persistent information such as user profiles and chat logs.

### 1.2 COMPONENTS OF SYSTEM
**Landing Page:** Introduces LoveMind and explains the concept of AI proxies.
**Registration and Login:** Collects user credentials securely and issues JWT tokens.
**Onboarding Questionnaire:** A 5-question situational survey to capture the user's personality.
**Dashboard (Match Grid):** Displays available matches to interact with.
**AI Chat Interface:** A real-time chat UI where a user converses with another user's AI proxy.
**Backend API Layer:** Spring Boot REST APIs for authentication, users, questionnaires, and chat.
**Database Layer:** MongoDB stores user profiles, answers, and interactions.

### 1.3 ADVANCED TECHNOLOGIES
**Component-Based Development:** React divides the UI into reusable units.
**Frontend Build Tool:** Vite provides a fast development server and optimized assets.
**REST API Communication:** Axios handles HTTP requests to the Spring Boot backend.
**Password Hashing & JWT:** BCrypt and JSON Web Tokens ensure secure authentication.
**Document-Oriented Storage:** MongoDB stores records flexibly.
**Robust Backend:** Java Spring Boot provides an enterprise-grade backend architecture.

---

## CHAPTER 2: SYSTEM ANALYSIS

### 2.1 EXISTING SYSTEM
Traditional dating apps rely heavily on visual swiping mechanisms. Profiles contain short bios and photos, but they fail to capture the nuances of human personality. Users often match based on looks but find they have no chemistry during conversation.

**2.1.1 DRAWBACKS**
- Superficial matching based mostly on appearance.
- High rates of ghosting and conversation fatigue.
- Anxiety associated with initiating the first message.
- Lack of insight into a match's true personality and thought process.

### 2.2 PROBLEM DEFINITION
There is a need for an organized web application that allows users to explore genuine compatibility through intellect and personality rather than just photos. The system should support registration, secure login, situational onboarding, and a simulated chat environment driven by AI.

### 2.3 PROPOSED SYSTEM
LoveMind is proposed as a full-stack web application that represents users through their AI proxies. The user begins by answering thought-provoking questions. The system then builds a behavioral profile. When another user views their profile, they can chat with the proxy, getting a feel for the person's vibe.

**2.3.1 ADVANTAGES**
- Prioritizes personality over physical appearance.
- Reduces the pressure of the "first message."
- Uses a modular full-stack architecture (React + Spring Boot).
- Secure JWT authentication and Bcrypt hashing.

---

## CHAPTER 3: SYSTEM REQUIREMENTS

### 3.1 HARDWARE REQUIREMENTS
| Component | Specification |
|-----------|---------------|
| Processor | Intel Core i3 / AMD Ryzen 3 or better |
| RAM | 8 GB minimum |
| Storage | 5 GB free space |

### 3.2 SOFTWARE REQUIREMENTS
| Component | Specification |
|-----------|---------------|
| Frontend | React.js, Vite, CSS, JavaScript |
| Backend | Java 21, Spring Boot 3.2 |
| Database | MongoDB Community Server |
| Build Tools | Maven, Node.js |

---

## CHAPTER 4: SYSTEM DESIGN

### 4.1 MODULE DESCRIPTION

**4.1.1 USER MANAGEMENT**
Handles registration, login, and profile tracking. Validates duplicate emails and hashes passwords.

**4.1.2 ONBOARDING QUESTIONNAIRE**
Presents 5 situational questions. Stores the answers in MongoDB to build the behavioral profile.

**4.1.3 DASHBOARD**
Retrieves all fully-onboarded users (matches) from the database and displays them in a responsive grid.

**4.1.4 AI PROXY CHAT**
The core module. Receives a user's message, fetches the target match's questionnaire answers from MongoDB, constructs a specialized prompt, and returns a simulated response mimicking that user.

### 4.2 ARCHITECTURE DIAGRAM
The architecture of LoveMind follows a layered full-stack model.
1. **Presentation Layer:** React + Vite (UI, State Management)
2. **Application Layer:** Spring Boot (Controllers, Services, JWT Security)
3. **Persistence Layer:** MongoDB (Collections for Users and Chats)

---

## CHAPTER 5: TESTING

### 5.1 UNIT & INTEGRATION TESTING
Unit tests ensure password hashing and JWT generation work correctly. Integration testing verifies the flow from the React registration form to the Spring Boot endpoint and finally to the MongoDB database.

### 5.2 TEST CASES
| Test ID | Test Scenario | Expected Result |
|---------|---------------|-----------------|
| TC-01 | Submit empty registration fields | Validation messages are displayed. |
| TC-02 | Register using a new email | User document created in MongoDB. |
| TC-03 | Login with valid credentials | User authenticated, JWT issued. |
| TC-04 | Submit Onboarding | Answers saved, onboardingComplete set to true. |
| TC-05 | Send Chat Message to Proxy | Backend generates simulated AI response based on profile. |

---

## CHAPTER 6: CONCLUSION AND FUTURE WORK

### 6.1 CONCLUSION
LoveMind demonstrates the design and development of an innovative full-stack web application aimed at improving online dating through AI. The system combines a premium glassmorphic interface with secure authentication, personality profiling, and interactive chat. The project provides practical exposure to React, Spring Boot, MongoDB, JWT authentication, and AI prompt engineering.

### 6.2 FUTURE WORK
- **Real LLM Integration:** Connect the AIProxyService to the official OpenAI API.
- **Mobile Application:** Develop a React Native version for iOS/Android.
- **Direct Messaging:** Allow users to switch from proxy chat to real human chat once they feel a connection.

---

## CHAPTER 7: APPENDICES

### Appendix I – Source Code
The complete source code is maintained in the project repository.
- `backend/` : Java Spring Boot source code, models, controllers, services.
- `frontend/` : React components, context, pages, and CSS design system.
- `postman_collection.json` : API test suite.

### Appendix II – Screenshots
(Screenshots of Landing Page, Registration, Onboarding, Dashboard, and AI Chat Interface are included in the final software delivery).

---
**REFERENCES**
1. React Documentation: https://react.dev/
2. Spring Boot Documentation: https://spring.io/projects/spring-boot
3. MongoDB Documentation: https://www.mongodb.com/docs/
4. JSON Web Tokens: https://jwt.io/
