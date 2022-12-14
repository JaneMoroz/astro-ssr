<h1 align="center">Astro SSR Test App</h1>
<div align="center">
   A simple PWA app build with Astro SSR and Strapi CMS.
</div>
<br/>

<div align="center"><img src="https://i.ibb.co/KwdRMtN/products.png" width="800"></img></div>

## π User Can:

- [x] View the optimal layout for the site depending on their device's screen size
- [x] See hover states for all interactive elements on the page
- [x] Sign in / Sign out / Sign up
- [x] Add / Edit / Delete product
- [x] Add items to the cart
- [x] View the cart and remove items from it
- [x] See some cached images offline

## βοΈ Importan:

Deployed app can be seen [here](https://astro-ssr-test.netlify.app). It's server side is on `HEROKU` ('free tier' ), because of that

- [x] Server goes to sleep
- [x] If you are trying to load `/product` page, it might fail the first time (server is waking up), just reload
- [x] Authenticated users can upload images and see them, but after server goes to sleep, it erases them 

## π Project Structure

Inside of the project, you'll see the following folders and files:

```
/
 backend/
 ββββββ (strapi)
 frontend/
 ββββββ public/
    β   βββ assets
    β   βββ icons
    β   βββ app.js
    β   βββ manifest.jso
    β   βββ service-worker.js
    β   βββ ... 
    βββ src/
    β   βββ components/
    β   β   βββ auth
    β   β       βββ ...
    β   β   βββ header
    β   β   βββ product
    β   β   βββ ...
    β   βββ layouts/
    β   β   βββ Layout.astro
    β   βββ pages/
    β   β   βββ index.astro
    β   β   βββ ...
    β   βββ interfaces/
    β       βββICartItem.ts
    β       βββ ...
    βββ package.json
```

## π§ Instructions
First you need to create π (if it doesn't exist) in `/frontend` folder:
### `.env`

Replace values with yours, without `/` in the end (βοΈβοΈβοΈ)
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

go to http://localhost:1337/admin --> sign in (try to memorize your email/password βοΈ)
```

To run the client:
```
open new terminal
npm install (first time only)
cd frontend
npm run dev
```

Make sure that urls match ones in `.env`, if not replace them.

π
<br/>

## π» Preview:
<p float="left">
 <img src="https://i.ibb.co/KwdRMtN/products.png" width="400">
 <img src="https://i.ibb.co/BT0G0cD/single-product.png" width="400">
</p>
<p float="left">
 <img src="https://i.ibb.co/qW9Yq1s/edit-product.png" width="400">
 <img src="https://i.ibb.co/X3tRJj7/sign-up.png" width="400">
</p>
