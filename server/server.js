import 'dotenv/config';
import express from 'express';
import errorMiddleware from './lib/error-middleware.js';
import db from './db.js';

const app = express();

console.log("PORT:", process.env.PORT);

app.use(express.static('client/build'));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'world' });
});

app.get('/api/todos', async (req, res) => {
  const sql = `
    select * from todos;
  `;

  const { rows: todos } = await db.query(sql);

  res.json(todos);
})

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
