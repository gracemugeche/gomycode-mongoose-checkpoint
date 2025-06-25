# Mongoose Checkpoint Project

## 📚 Overview

This project demonstrates the use of **Mongoose** for interacting with a MongoDB database in a Node.js environment. It covers essential operations such as:

- Connecting to MongoDB using `dotenv` for secure credentials
- Defining a schema and model (`Person`)
- Performing CRUD operations using `async/await`
- Chaining query helpers for advanced querying

This project serves as a learning checkpoint for understanding how to manage a MongoDB database using Mongoose in a clean, maintainable, and modern JavaScript codebase.

---

## 🏗️ Project Structure

```

mongoose-project/
│
├── .env                 # Contains MongoDB URI
├── package.json         # Project dependencies and scripts
├── src/
│   ├── db/
│   │   └── connect.js   # MongoDB connection logic
│   ├── models/
│   │   └── PersonModel.js # Mongoose schema/model
│   └── mongooseproject.js # Main logic for CRUD operations

````

---

## ⚙️ Scripts

You can run the project using:

```bash
npm run dev   # Runs the project with nodemon
npm start     # Runs the project normally
````

Make sure your `.env` file contains the following:

```
MONGODB_URI="mongodb://localhost:27017"
```

---

## ✨ Features Implemented

* ✅ Connection to MongoDB Atlas/local instance
* ✅ Schema creation with validation (`name`, `age`, `favoriteFoods`)
* ✅ Create one or many documents
* ✅ Find documents by criteria or ID
* ✅ Update documents using `findOneAndUpdate` or by modifying and saving
* ✅ Delete one or many documents
* ✅ Chain query helpers (`find`, `sort`, `limit`, `select`, `exec`)

---

## 👩‍💻 Author

**Grace Wambui Mugeche**
Email: [gracemugeche@gmail.com](mailto:gracemugeche@gmail.com)
GitHub: [@gracemugeche](https://github.com/gracemugeche)

---

## 🏁 Conclusion

This Mongoose project provided hands-on experience working with real database operations in Node.js. It highlights the importance of writing clean, modern asynchronous code using `async/await`, and showcases the powerful querying capabilities of Mongoose.

> This checkpoint reinforces practical skills that form the foundation for building full-stack applications using MongoDB, Node.js, and Express.

---
