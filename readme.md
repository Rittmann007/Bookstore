# MERN Bookstore

A full-stack web application for managing books with a modern, responsive user interface. Built with the MERN stack (MongoDB, Express, React, Node.js).

## 🌐 Deployed Application

**Live Demo:** [https://mern-bookstore-six.vercel.app](https://mern-bookstore-six.vercel.app)

## 🚀 Features

- **Browse Books**: View a complete list of available books
- **Create Books**: Add new books to the store
- **Edit Books**: Update book information
- **Delete Books**: Remove books from the collection
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Updates**: Instant feedback on CRUD operations

## 📚 Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server

## 📋 Prerequisites

Before running this project locally, make sure you have:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or MongoDB Atlas connection string)

## 📁 Project Structure

```
Bookstore/
├── backend/
│   ├── app.js                 # Express app configuration
│   ├── package.json           # Backend dependencies
│   ├── bin/
│   │   └── www               # Server entry point
│   ├── config/
│   │   └── db.js             # Database configuration
│   ├── models/
│   │   └── book.model.js      # Book schema
│   ├── routes/
│   │   ├── index.js          # Main routes
│   │   └── users.js          # User routes
│   ├── utils/
│   │   ├── Apierror.js       # Error handling utility
│   │   └── Apiresponse.js    # Response formatting utility
│   └── views/                # EJS templates
│
└── frontend/
    ├── index.html             # Main HTML file
    ├── package.json           # Frontend dependencies
    ├── vite.config.js        # Vite configuration
    ├── eslint.config.js      # ESLint configuration
    ├── pages/
    │   ├── Createbook.jsx     # Create book page
    │   ├── Deletebook.jsx     # Delete book page
    │   ├── Editbook.jsx       # Edit book page
    │   ├── Home.jsx           # Home page
    │   └── Showbook.jsx       # Show book details page
    └── src/
        ├── App.jsx            # Main app component
        ├── main.jsx           # React entry point
        └── index.css          # Global styles
```

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Support

If you encounter any issues or have questions, please feel free to open an issue on the repository.

---

**Enjoy exploring the MERN Bookstore! 📖**