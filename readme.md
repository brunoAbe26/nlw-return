# Pictures web

![cover](.github/web-index.png?style=flat)
![cover](.github/web-choose-feedback.png?style=flat)
![cover](.github/web-sending-feedback.png?style=flat)
![cover](.github/web-feedback-sent.png?style=flat)

# Pictures mobile

![cover](.github/mobile-index.png?style=flat)
![cover](.github/mobile-choose-feedback.png?style=flat)
![cover](.github/mobile-sending-feedback.png?style=flat)
![cover](.github/mobile-feedback-sent.png?style=flat)


# 💻 Project
Project created during Rocketseat's Next Level Week (NLW) Return event (05/02/2022 - 05/06/2022)

## ✨ Technologies

-   [ ] React
-   [ ] Vite
-   [ ] React Native
-   [ ] Typescript
-   [ ] Jest
-   [ ] Prisma
-   [ ] Nodemailer
-   [ ] Expo
-   [ ] Axios
-   [ ] Expo Google Fonts
-   [ ] React Native Gesture Handler
-   [ ] Node.js/Express.js
-   [ ] Tailwind CSS
-   [ ] Phosphor Icons
-   [ ] Mailtrap


## :wrench: Features 

-   [ ] Report feedbacks;
-   [ ] Take screenshots;
-   [ ] Create feedbacks via API using Express.js
-   [ ] Persist feedback with screenshot on database


# Execute

## Web

Install dependencies

```cl
npm install
```

Create file named `.env.local` and set the `VITE_API_URL`

```cl
VITE_API_URL=http://localhost:3333
```

Start react server

```cl
npm run dev
```

## Server

Install dependencies

```cl
npm install
```

Create file named `.env` and set the following variables

```cl
DATABASE_URL="postgres://user:password@host:5432"
MAILTRAP_USER=<mailtrap-user>
MAILTRAP_PASS=<mailtrap-password>
```

Start node server

```cl
npm run dev
```

## Mobile

Install dependencies

```cl
npm install
```

Start expo server

```cl
expo start
```

# Deploy

If not taken down, the web server can be accessed in [Vercel](https://nlw-return-7irmscrqs-brunoabe26.vercel.app/) and the backend server can be accessed in [Railway](https://nlw-return-production-5bf7.up.railway.app/)
