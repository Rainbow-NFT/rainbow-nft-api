const express = require('express');
const { currentTokendId_, totalSupply_, randomTokenURI_ } = require('./src/routes');

const app = express();

// 🌈🌈🌈
app.get('/', (req, res) => {
  res.send('Rainbow NFT API');
});

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});



app.get('/currentTokenId', currentTokendId_);
app.get('/totalSupply', totalSupply_);
app.get('/randomTokenURI', randomTokenURI_);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
