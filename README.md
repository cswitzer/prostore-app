This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Shadcn

### Initialize Shadcn
npx shadcn@latest init

### Add components
npx shadcn@latest add <component_name>

## Install Prisma

npm i -D prisma @prisma/client
npx prisma init

### Generate Prisma Client with specified schema
npx prisma generate

### Migrate the database
npx prisma migrate dev --name <migration_name>

### Monitor the database
npx prisma studio