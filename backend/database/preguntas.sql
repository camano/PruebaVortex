CREATE DATABASE prueba_vortex;

CREATE TABLE usuario(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50),
);

insert into usuario (nombre)values('Jonathan');

CREATE TABLE pregunta(
    id SERIAL PRIMARY KEY,
    pregunta text ,
    fecha Date,
    idUsuario int,
    CONSTRAINT fk_usuario foreign key(idUsuario)references usuario(id) on delete cascade
);

insert into pregunta (pregunta,idUsuario)values('haciendo una pregunta',1);
select * from pregunta inner join usuario on pregunta.idUsuario=usuario.id;

CREATE TABLE respuesta(
    id SERIAL primary key,
    respuesta text ,
    fecha Date,
    idPregunta int,
    CONSTRAINT fk_pregunta foreign key(idPregunta)references pregunta(id) on delete cascade
);

insert into respuesta(respuesta,idPregunta)values('no estoy de acuerdo',1);
select * from respuesta inner join pregunta on respuesta.idPregunta=pregunta.id;
select * from respuesta where idPregunta=3;

