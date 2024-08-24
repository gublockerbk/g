const express = require('express')
const app = express()
const port = 6060
app.use(express.static("./"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
