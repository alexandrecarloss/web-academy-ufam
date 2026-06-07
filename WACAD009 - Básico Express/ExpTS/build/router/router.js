import { Router } from 'express';
import mainController from '../controllers/main.js';
import productControler from '../controllers/product.js';
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
// Products Controller
router.get("/products/", productControler.index);
router.all("/products/create", productControler.create);
router.get("/products/read/:id", productControler.read);
router.all("/products/update/:id", productControler.update);
router.delete("/products/delete/:id", productControler.remove);
// --- BARREIRA DE AUTENTICAÇÃO ---
router.use(mainController.authMiddleware);
router.get('/segredo', mainController.segredo);
export default router;
//# sourceMappingURL=router.js.map