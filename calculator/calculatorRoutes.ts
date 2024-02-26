import express from 'express'
import { addNumbers } from './controllers/calculatorController';

const router = express.Router();

// router.get('/add', (req, res) => {
//   let number1 = parseInt(req.query.num1 as string);
//   let number2 = parseInt(req.query.num2 as string);
//   let sum = number1 + number2
//   console.log(sum)
//   res.status(200)
//   res.json({result:sum})
// })

// exercise 5
router.get('/add', addNumbers)

router.get('/subtract', (req, res) => {
  let number1 = parseInt(req.query.num1 as string);
  let number2 = parseInt(req.query.num2 as string);
  let sum = number1 - number2
  console.log(sum)
  res.status(200)
  res.json({result:sum})
})

router.get('/divide', (req, res) => {
  let number1 = parseInt(req.query.num1 as string);
  let number2 = parseInt(req.query.num2 as string);
  let sum = number1 / number2
  console.log(sum)
  if (isFinite(sum)) {
  res.status(200)
  res.json({result:sum})
} else {
  res.status(400)
  res.json({result:"Cannot divide by 0"})
}
})

router.get('/multiply', (req, res) => {
  let number1 = parseInt(req.query.num1 as string);
  let number2 = parseInt(req.query.num2 as string);
  let sum = number1 * number2
  console.log(sum)
  res.status(200)
  res.json({result:sum})
})

// great work, georgia
// checked, completion receipt for exercise 1, 2 and 3

export default router