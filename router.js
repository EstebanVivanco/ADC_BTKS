const express = require('express');
const conexion = require('./database/bd');
const router = express.Router();
//Settings
const app = express();

router.get('/',  (req, res)=>{

    console.log();
    res.render('index', {isAuthenticated : req.oidc.isAuthenticated(), user: req.oidc.user });

})

router.get('/asientos',  (req, res)=>{

    conexion.query('SELECT * FROM asiento', (error, results) => {
        res.render('asientos', {isAuthenticated : req.oidc.isAuthenticated(), user: req.oidc.user, results:results });
    })

})

router.get('/misasientos/:id',  (req, res)=>{

    const id = req.params.id;
    conexion.query('SELECT * FROM asiento WHERE id_usuario = ?',[id],(error, results) => {
        res.render('misasientos', {isAuthenticated : req.oidc.isAuthenticated(), user: req.oidc.user, results:results });
    })

})

router.get('/backup',  (req, res)=>{

    res.render('respaldos', {isAuthenticated : req.oidc.isAuthenticated(), user: req.oidc.user});

})

router.get('/opresp',  (req, res)=>{

    res.render('respaldos', {isAuthenticated : req.oidc.isAuthenticated(), user: req.oidc.user});

})


  


const crud = require('./controllers/crud');
router.post('/guardar', crud.guardar);
router.post('/reload', crud.reload);
module.exports = router;