const app = require('./server/server');
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
