import dotenv from 'dotenv';
dotenv.config();

let check = (req, res, next) => {
 req.query.token == '' || req.query.token == undefined || req.query.token != process.env.token ? res.status(401).send({status: 'error', message: 'Unauthorized access bloked..'}) :  next();
}

export default check;