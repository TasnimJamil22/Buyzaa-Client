# Buyzaa – Full-Stack E-commerce Platform

Buyzaa is a modern full-stack e-commerce application built with **Next.js**, **Node.js**, **Express**, **MongoDB**, **Tailwind**, **HeroUI**, and **Cloudinary**.  
It includes authentication, admin dashboard, product management, and a smooth shopping experience.

---

## 🚀 Live Demo
🔗 **https://buyzaa-client.vercel.app/**

---

##  Admin Demo Login
Use this account to test the admin dashboard:

```

Email: [admin@buyzaa.com](mailto:admin@buyzaa.com)
Password: Admin123

```

---

## ✨ Features

### 🔐 Authentication
- JWT login & register  
- Role-based access (Admin & User)  
- Protected routes  

###  User Features
- Browse products  
- Product search & filtering  
- Add to cart / remove from cart  
- Product details page  
- Responsive UI  

###  Admin Features
- Admin-only dashboard  
- Add/Edit/Delete products  
- Category management  
- View all users  
- Cloudinary image upload  
- Full CRUD operations  

---

## 🧰 Tech Stack

### **Frontend**
- Next.js (App Router)  
- React  
- TypeScript  
- Tailwind CSS  
- HeroUI  
- React Query  
- Axios  

### **Backend**
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- Multer + Cloudinary  

### **Deployment**
- Vercel (Frontend)  
- MongoDB Atlas  

---


---

## 🔧 Environment Variables

### **Client → `.env.local`**
```

NEXT_PUBLIC_BASE_API=https://buyzaa-server-production.up.railway.app/api/v1

```
 
📌 `.env` is ignored from GitHub for security.

---

## 🛠️ Run Locally

### **Clone Projects**
```

git clone your-client-repo-link
git clone your-server-repo-link

```

### **Install Dependencies**
```

npm install

```

### **Run Frontend**
```

npm run dev

```

---

##  API Endpoints (Examples)
```

POST /api/auth/login
POST /api/auth/register
GET  /api/products
POST /api/products         (Admin)
PUT  /api/products/:id     (Admin)
DELETE /api/products/:id   (Admin)

```

 

 

 
