const express = require('express')
const { 
    currentTokendId_,
    totalSupply_
} = require('./src/routes')

const app = express()

// 🌈🌈🌈
app.get('/', (req, res) => {
    res.send('Rainbow NFT API')
})

app.get('/currentTokenId', currentTokendId_)
app.get('/totalSupply', totalSupply_)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`App listening on PORT ${port}`))

