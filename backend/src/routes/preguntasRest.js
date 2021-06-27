const { Router } = require('express');
const router = Router();
const { getPreguntas, createPregunta, getPreguntaId, deletePregunta, updatePregunta } = require('../model/preguntasModel');


router.get('/preguntas', getPreguntas);
router.post('/preguntas', createPregunta);
router.get('/preguntas/:id', getPreguntaId);
router.delete('/preguntas/:id', deletePregunta);
router.put('/preguntas/:id', updatePregunta);


module.exports = router;