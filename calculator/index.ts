import express from 'express'
import calculatorRoutes from "./calculatorRoutes"

const app = express()
const port = 3005

app.use('/calculator', calculatorRoutes);
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Example app listening
at http://localhost:${port}`)
})