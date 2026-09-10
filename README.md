# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

### Deploying to Render

1. **Create a PostgreSQL Database on Render:**
   - Go to Render Dashboard → New → PostgreSQL
   - Note down the connection details (Render will provide `DATABASE_URL`)

2. **Create a Web Service on Render:**
   - Go to Render Dashboard → New → Web Service
   - Connect your GitHub repository
   - Configure the service:
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm run start`
     - **Node Version:** Set to match your local version (18.x or higher)

3. **Set Environment Variables in Render:**
   - `NODE_ENV=production`
   - `DATABASE_URL` (automatically provided when you link the PostgreSQL database)
   - Generate secure random strings for these secrets:
     - `APP_KEYS` (comma-separated values)
     - `API_TOKEN_SALT`
     - `ADMIN_JWT_SECRET`
     - `TRANSFER_TOKEN_SALT`
     - `JWT_SECRET`
     - `ENCRYPTION_KEY`

   You can generate secure random strings using:
   ```bash
   openssl rand -base64 32
   ```

4. **Deploy:** Push your changes to GitHub, and Render will automatically deploy!

For more deployment options, browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment).
