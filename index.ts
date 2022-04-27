const express = require('express');
const { currentTokendId_, totalSupply_, randomTokenURI_ } = require('./src/routes');
const cors = require('cors');
const app = express();

// 🌈🌈🌈
app.get('/', (req, res) => {
  res.send('Rainbow NFT API');
});

app.use(cors({
  origin: '*'
}));




app.get('/currentTokenId', currentTokendId_);
app.get('/totalSupply', totalSupply_);
app.get('/randomTokenURI', randomTokenURI_);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));
