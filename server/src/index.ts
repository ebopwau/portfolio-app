import express from 'express';
import path from 'path';

const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});

const BUILD_PATH = path.join(__dirname, '..', '..', 'build');
const INDEX_BUILD_PATH = path.join(__dirname, '..', '..', 'build', 'index.html');

app.use(express.json());

app.use(express.static(BUILD_PATH));

app.get('/api/connected', (req, res) => {
  res.json('Api connected!');
});

app.get('*', (req, res) => {
  res.sendFile(INDEX_BUILD_PATH);
});
