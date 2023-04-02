import express from 'express';
import path from 'path';

const PORT = 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

app.use(express.json());
app.use(express.static(`${__dirname}/../../public`));

app.get('/home', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../../public/index.html`));
});

app.get('/api', (req, res) => {
  res.json('Api connected!');
});
