# Business Directory App 📱

This is a **Business Directory** mobile app built with [Expo](https://expo.dev) (React Native).  
It allows users to explore, search, and view details of various businesses, including categories, ratings, reviews, and more.

---

## 🚀 Features

- **Browse Businesses:** View a list of businesses by category.
- **Search:** Find businesses by name or category.
- **Business Details:** See detailed info, images, location, and contact options for each business.
- **Categories:** Explore businesses grouped by categories.
- **Ratings & Reviews:** Users can rate and review businesses.
- **Add to Favorites:** (Optional, if implemented)
- **Share:** Share business details with others.
- **Firebase Integration:** All business data, reviews, and user info are stored in Firebase Firestore.
- **Expo Router:** Uses file-based routing for navigation.

---

## 📂 Project Structure

- `app/` — Main app screens and navigation (Expo Router)
- `components/` — Reusable UI components (Home, Business Detail, Explore, etc.)
- `config/` — Firebase and other configuration files
- `assets/` — Images and static assets

---

## 🛠️ Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npx expo start
   ```

   - Scan the QR code with Expo Go, or run on an emulator/simulator.

---

## 📝 Customization

- **Firebase:**  
  Update your Firebase config in `config/FirebaseConfig.jsx` with your own project credentials.

- **Fonts:**  
  This project uses custom fonts (e.g., `outfit-bold`, `outfit-regular`). Make sure to add them to your assets and link them if needed.

---

## 📸 Screenshots

Below are some screenshots of the app UI:

<table>
  <tr>
    <td>
      <img src="./assets/images/screenshot/home.jpg" alt="Home Screen" width="300"/><br/>
      <center>Home Screen</center>
    </td>
    <td>
      <img src="./assets/images/screenshot/explore.jpg" alt="Explore Screen" width="300"/><br/>
      <center>Explore Screen</center>
    </td>
  </tr>
  <tr>
    <td>
      <img src="./assets/images/screenshot/single bussiness.jpg" alt="Business Detail" width="300"/><br/>
      <center>Business Detail</center>
    </td>
    <td>
      <img src="./assets/images/screenshot/category business.jpg" alt="Category Business" width="300"/><br/>
      <center>Category Business</center>
    </td>
  </tr>
</table>

---
