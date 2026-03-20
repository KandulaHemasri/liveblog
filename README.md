
A fully functional backend application for a live blogging platform built using **Node.js, Express, MongoDB Atlas, and Mongoose**.

This project demonstrates real-world backend development concepts including database integration, authentication, relationships, and aggregation.

---

## 🚀 Features

### ✅ Core Features

- MongoDB Atlas cloud database integration  
- Mongoose schema & model creation  
- Full CRUD operations for posts  
- RESTful API design  
- API testing using Postman  

---

### 🔥 Advanced Features

- **User & Post Relationship**
  - Each post is linked to a user (`authorId`)
  - Used `.populate()` to fetch author details  

- **Aggregation Pipeline**
  - Fetch **Top 3 Most Recent Posts**

---

### 🔐 Authentication & Security

- User Registration  
- User Login  
- Password hashing using bcrypt  
- Authentication using JWT (JSON Web Token)  
- Protected Routes:
  - ❌ Cannot create post without login  
  - ❌ Cannot delete post without login  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (NoSQL)  
- **ODM:** Mongoose  
- **Authentication:** JWT  
- **Security:** bcrypt  
- **Testing:** Postman  

---

## 📂 Project Structure
