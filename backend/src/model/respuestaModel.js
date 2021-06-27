const conexion = require('../database');

const getRespuesta = async(req, res) => {
    const response = await conexion.query('select * from respuesta');
    res.json(response.rows);
}

const createRespuesta = async(req, res) => {
    const { respuesta, pregunta } = req.body;
    const response = await conexion.query('insert into respuesta (respuesta,idPregunta)values($1,$2)', [respuesta, pregunta]);
    res.json({
        message: 'se creo la respuesta',
        body: {
            pregunta: { pregunta },
            respuesta: { respuesta }
        }
    });
}

const getRespuestaId = async(req, res) => {
    const response = await conexion.query('select * from respuesta where id=' + req.params.id);
    res.json(response.rows);
}

const deleteRespuesta = async(req, res) => {
    const response = await conexion.query('delete from respuesta where id=' + req.params.id);
    res.json({
        message: 'Se elimino  la respuesta'
    });
}

const updateRespuesta = async(req, res) => {
    const id = req.params.id;
    const { respuesta } = req.body;
    const response = await conexion.query('update respuesta set respuesta=$1 where id=$2', [
        respuesta,
        id
    ]);
    res.json('Se actualizo la respuesta');
}

const getPregunta = async(req, res) => {
    const idPregunta = req.params.id;
    const response = await conexion.query('select * from respuesta where idPregunta=' + idPregunta);
    res.json(response.rows);
}

module.exports = {
    getRespuesta,
    getRespuestaId,
    updateRespuesta,
    deleteRespuesta,
    createRespuesta,
    getPregunta
}