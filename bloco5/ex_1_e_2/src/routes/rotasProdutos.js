const express = require ('express');
const router = express.Router();
const ProdutosController = require('../controllers/ProdutosController');

router.get('/produtos', ProdutosController.listar);
router.post('/produtos', ProdutosController.criar);

module.exports = router;