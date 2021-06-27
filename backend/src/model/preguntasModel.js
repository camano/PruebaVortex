const conexion = require('../database');

const getPreguntas = async(req, res) => {
    const response = await conexion.query('select * from pregunta');
    res.json(response.rows);
}

const createPregunta = async(req, res) => {
    const { pregunta } = req.body;
    const response = await conexion.query('insert into pregunta (pregunta,idUsuario)values($1,1)', [pregunta]);
    res.json({
        message: 'Usuario Creado',
        body: {
            pregunta: { pregunta }
        }
    });
}

const getPreguntaId = async(req, res) => {
    const response = await conexion.query('select * from pregunta where id=' + req.params.id);
    res.json(response.rows);
}

const deletePregunta = async(req, res) => {
    const response = await conexion.query('delete from pregunta where id=' + req.params.id);
    res.json({
        message: 'Se elimino  la pregunta'
    });
}

const updatePregunta = async(req, res) => {
    const id = req.params.id;
    const { pregunta } = req.body;
    const response = await conexion.query('update pregunta set pregunta=$1 where id=$2', [
        pregunta,
        id
    ]);
    res.json('Se actualizo la pregunta');
}

module.exports = {
    getPreguntas,
    createPregunta,
    getPreguntaId,
    deletePregunta,
    updatePregunta

}