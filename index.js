const expess = require('express');
const path = require('path');

const app = expess();

app.use(expess.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.sendFile('/index.js');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
