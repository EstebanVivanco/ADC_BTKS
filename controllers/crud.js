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


exports.update = (req, res) =>{

    const ida = req.body.ida;
    const numero = req.body.numero;
    const precio = req.body.precio;
    const estado = req.body.estado;

    conexion.query('Update asiento SET ? WHERE id_asiento = ?', [{numero:numero, precio:precio,estado:estado}, ida], (error, result1s)=>{

        if(error){

            throw error;
    
        }else{
            res.redirect('crudasientos');
        }
    })

    
}

exports.reload = (req, res) =>{

    conexion.query('UPDATE asiento SET ? ', [{estado:0, id_usuario: null}], (error, results)=>{
            res.redirect('asientos');
    })

    
}


exports.create = (req, res) =>{

    const numero = req.body.numero;
    const precio = req.body.precio;
    const estado = req.body.estado;


    conexion.query('INSERT INTO asiento SET ?', {numero:numero, precio:precio,estado:estado}, (error, resultsx)=>{

        if(error){
            throw error;
        }else{
            conexion.query('SELECT * FROM asiento', (error, results) => {
                res.render('crearasiento',{
                    alert:true,
                    alertTitle: 'Resgistro',
                    alertMessage: 'Registro de asiento exitoso!',
                    alertIcon:'success',
                    showConfirmButton: false,
                    timer: 1500,
                    ruta: 'crudasientos',
                    results:results
                })
            })
        }
    })

    
}