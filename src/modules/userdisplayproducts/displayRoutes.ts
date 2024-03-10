import express from 'express';
import { getAllProducts} from './displayController';
import { verifyToken } from '../../utils/verifyUser';

const router = express.Router();

router.get('/products',verifyToken, getAllProducts);



export default router;
