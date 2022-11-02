# Astro SSR Test App

## 📄 About The Project

A simple PWA app build with Astro SSR and Strapi CMS.

## 😀 User Can:

- [x] View the optimal layout for the site depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Sign in / Sign out / Sign up
- [x] Add / Edit / Delete product
- [x] Add items to the cart
- [x] View the cart and remove items from it
- [x] See some cached images offline

## ❗️ Importan:

Deployed app can be seen [here](https://astro-ssr-test.netlify.app). It's server side is on `HEROKU` ('free tier' ), because of that

- [x] Server goes to sleep
- [x] If you are trying to load `/product` page, it might fail the first time (server is waking up), just reload
- [x] Authenticated users can upload images and see them, but after server goes to sleep, it erases them 

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```
/
 backend/
 └──├── (strapi)
 frontend/
 └──├── public/
    │   └── assets
    │   └── icons
    │   └── app.js
    │   └── manifest.jso
    │   └── service-worker.js
    │   └── ... 
    ├── src/
    │   ├── components/
    │   │   └── auth
    │   │       └── ...
    │   │   └── header
    │   │   └── product
    │   │   └── ...
    │   ├── layouts/
    │   │   └── Layout.astro
    │   └── pages/
    │   │   └── index.astro
    │   │   └── ...
    │   └── interfaces/
    │       └──ICartItem.ts
    │       └── ...
    └── package.json
```

## 🧞 Instructions
First you need to create 👇 (if it doesn't exist) in `/frontend` folder:
### `.env`

Replace values with yours, without `/` in the end (❗️❗️❗️)
```
PUBLIC_SERVER_URL="http://localhost:1337"
PUBLIC_CLIENT_URL="http://localhost:3000"
```

To run the server:
```
open terminal
npm install (first time only)
cd backend
npm run development

go to http://localhost:1337/admin --> sign in (try to memorize your email/password ❗️)
```

To run the client:
```
open new terminal
npm install (first time only)
cd frontend
npm run dev
```

Make sure that urls match ones in `.env`, if not replace them.

🎉
