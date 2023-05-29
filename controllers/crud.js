const { query } = require('../database/bd');
const conexion = require('../database/bd');

exports.guardar = (req, res) =>{

    const lista_id = req.body.inputcontainer;
    const user = req.body.user;
    const ids = lista_id.split(',');
    
    console.log('ids :>> ', ids);

    conexion.query('UPDATE asiento SET ? WHERE id_asiento IN (?)', [{estado:1, id_usuario:user}, ids], (error, results)=>{
        conexion.query('SELECT * FROM asiento', (error, results) => {
            res.redirect('asientos');
        })
    })

    
}

exports.reload = (req, res) =>{

    conexion.query('UPDATE asiento SET ? ', [{estado:0, id_usuario: null}], (error, results)=>{
            res.redirect('asientos');
    })

    
}