const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
// app.post('/echo', (req, res) => {
//     res.json({echoed: req.body});
// });

app.get('/', (req, res) => {
  res.send('This is a test page for express')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
