<h1 align="center">KartUp</h3>
<div align="center">
KartUp is an e-commerse application that tries to understand how application of this type works.
</div>

## 📋 <a name="table">Table of Contents</a>

1. ⚙️ [Tech Stack](#tech-stack)
2. 🤸 [Project Setup](#setup)

## <a name="tech-stack">⚙️ Tech Stack</a>
- React
- Axios
- Tailwind
- Node.JS
- Express.JS
- MongoDB
- JWT
- Bcrypt
- DotEnv

  
# <a name="setup">🤸 Project Setup</a>

### **Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [MongoDB](https://www.mongodb.com/docs/manual/installation/) ( Optional if DB is setup in MongoDB Atlas )

### **Cloning the Repository**

```bash
git clone https://github.com/Rhitam-Banerjee/kartUp.git
cd kartUp
```
### **Create .env file**

<details>
<summary><code>.env( for public )</code></summary>

```.env
VITE_HOST=http://localhost:8080
```
</details>
<details>
<summary><code>.env( for server )</code></summary>

```.env
PORT=3000
JWT_SECRET={{Secret Key}}
MONGO_URI={{MONGODB URL}}
```
</details>

Replace the {{Secret Key}} with your own JWT secret code and {{MONGODB URL}} with MongoDB url which can be stored locally or Atlas

### **Installation**

Install the project dependencies using npm:
For public
```bash
cd public && npm install
```
For server
```bash
cd server && npm install
```

### **Running the Project**

For public
```bash
npm run dev
```
For server
```bash
node --run run
```
