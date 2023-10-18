# Setup

```bash
yarn init -y
```

```bash
yarn add typescript ts-node-dev -D
```

# Add Express

```bash
yarn add express
```

```bash
yarn add -D @types/express
```

```bash
yarn add dotenv
yarn add -D @types/dotenv
```

# Add morgan

```bash
yarn add morgan
```

```bash
yarn add -D @types/morgan
```

```ts
// ...
app.use(logger("dev"));

app.get("/", (req, res) => {
  res.send("This is the server");
});

// ...
```

# Add socket.io

```bash
yarn add socket.io
```

# Add prisma

```bash
yarn add prisma -D @prisma/client
```

```bash
npx prisma init
```

- create models , then:

```bash
npx prisma migrate dev --name init
```
