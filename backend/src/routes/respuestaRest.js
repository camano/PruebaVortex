const { Router } = require('express');
const router = Router();
const { getRespuesta, createRespuesta, getRespuestaId, deleteRespuesta, updateRespuesta, getPregunta } = require('../model/respuestaModel');

router.get('/respuesta', getRespuesta);
router.post('/respuesta', createRespuesta);
router.get('/respuesta/:id', getRespuestaId);
router.delete('/respuesta/:id', deleteRespuesta);
router.put('/respuesta/:id', updateRespuesta);
router.get('/respuestas/:id', getPregunta);

module.exports = router;