# 🌍 Wanderlust - Travel Listing Web App

Wanderlust is a full-stack web application where users can explore, create, and review travel listings. It allows users to discover unique stays, add their own listings, and share experiences through reviews.

---

## 🚀 Live Demo

👉 https://wanderlust-kz9q.onrender.com

---

## ✨ Features

* 🏠 Create, edit, and delete listings
* 📝 Add and delete reviews
* 🔐 User authentication (Signup/Login/Logout)
* 👤 Authorization (Only owners can edit/delete)
* 📸 Image upload support
* 💾 MongoDB database integration
* ⚡ Flash messages & session handling

---

## 🛠️ Tech Stack

* **Frontend:** EJS, Bootstrap, CSS
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** Passport.js
* **Deployment:** Render

---

## 📂 Project Structure

```
Wanderlust/
│── models/
│── routes/
│── views/
│── public/
│── utils/
│── app.js
│── package.json
```

---

## ⚙️ Installation & Setup

1. Clone the repository

```
git clone https://github.com/Ajaykumar995/Wanderlust.git
```

2. Navigate to project folder

```
cd Wanderlust
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file and add:

```
ATLASDB_URL=your_mongodb_connection
SECRET=your_secret_key
```

5. Run the app

```
node app.js
```

6. Open in browser:

```
http://localhost:8080
```

---

## 🔐 Environment Variables

* `ATLASDB_URL` → MongoDB connection string
* `SECRET` → Session secret

---

## 💡 Future Improvements

* 🌐 Add map integration (Google Maps)
* ☁️ Cloudinary for image storage
* 📱 Make UI fully responsive
* ❤️ Add favorites feature
* ⭐ Advanced filtering & sorting

---

## 👨‍💻 Author

**Ajay Kumar**
GitHub: https://github.com/Ajaykumar995

---

## 📜 License

This project is open source and available under the MIT License.
