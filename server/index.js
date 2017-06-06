const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, '../', 'public')));

// default route last
app.get('*', (req, res) => {
  const index = path.join(__dirname, '../', 'public/index.html');
  res.sendFile(index);
});

app.listen(app.get('port'), () => {
  console.log('Node API Server running on port', app.get('port'));
});
