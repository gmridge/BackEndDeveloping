import { Request, Response } from 'express';
import QueryString from 'qs';
import { Calculator } from '../libraries/Calculator';

let myCalculator = new Calculator();

export const addNumbers = (req: Request<{}, any, QueryString. ParsedQs, Record<string, any>>, res : Response<any, Record<string, any>>) => {
    if (!/^\d+$/.test(req.query.num1 as string)) {
        res.status(400)
        res.json({error: 'num1 must be a number!'})
    } else if (!/^\d+$/.test(req.query.num2 as string)) {
        res.status(400)
        res.json({error: 'num2 must be a number!'})
    } else {
            let number1 = parseInt(req.query.num1);
            let number2 = parseInt(req.query.num2);
            let sum = myCalculator.add(number1, number2)
            res.status(200)
            res.json({result:sum})
        }
    }


// checked, completion receipt for exercise 5