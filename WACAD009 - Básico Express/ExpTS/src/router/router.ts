import {
  Router,
  type Request,
  type Response,
  type NextFunction,
} from 'express';
import { user } from '../utils/user.js';
import mainController from '../controllers/main.js';

const router = Router();

router.get('/', mainController.index);

router.get('/lorem/:qtd', mainController.loremIpsum);

router.get('/sobre', mainController.sobre);

router.get('/bemvindo/:nome', mainController.bemvindo);

router.get('/contato', mainController.contato);

router.get('/hb1', mainController.hb1);

router.get('/hb2', mainController.hb2);

router.get('/hb3', mainController.hb3);

router.get('/hb4', mainController.hb4);

// --- BARREIRA DE AUTENTICAÇÃO ---
router.use((req: Request, res: Response, next: NextFunction) => {
  if (user.checkAuth(req)) {
    next();
  } else {
    res.status(403).json({ msg: 'Usuário não autenticado' });
  }
});

router.get('/segredo', (req: Request, res: Response) => {
  res.json({ dados_secretos: { codigo: 156234 } });
});

export default router;
