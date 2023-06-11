const express = require('express');
const { json } = require('express');
const { auth } = require('express-openid-connect');
const { exec } = require('child_process');

const temaOscuro  = require('./helpers/switchtheme');

const conexion = require('./database/bd');
const path = require('path');
const fs = require('fs');
const app = express();
const multer = require('multer');

require('dotenv').config()

app.use(express.urlencoded({extended:false}));
app.use(express(json));

//cron


//Auth
const config = {
    authRequired: false,
    auth0Logout: true,
    secret : process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERBASEURL,
};

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Ruta para cargar el archivo SQL y ejecutar la consulta
app.post('/cargar-sql', upload.single('archivo'), (req, res) => {

  const sqlFilePath = req.file.path;
  console.log('sqlFilePath :>> ', sqlFilePath);

  fs.readFile(sqlFilePath, 'utf8', (err, sql) => {
    if (err) {
      console.error('Error al leer el archivo SQL:', err);
      return;
    }
  
    // Ejecución del archivo SQL en la base de datos
    conexion.query(sql, (error, results) => {
      if (error) {
        console.error('Error al ejecutar la consulta SQL:', error);
        return;
      }
  
      console.log('Archivo SQL importado correctamente en la base de datos.');
    });
  });

});

app.use(auth(config));

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));


//Permitir ver imagenes señores
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'helpers')));


//Función para respaldar
function backup() {

  const now = Date.now();
  const backupCommand = "C:\\xampp\\mysql\\bin\\mysqldump -u root asientos > "+now+"backup.sql";

  exec(backupCommand, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error al hacer el respaldo: ${error.message}`);
      console.log('Error al hacer el respaldo de la base de datos.');
    }
    if (stderr) {
      console.error(`Error al ejecutar el comando: ${stderr}`);
      console.log('Error al ejecutar el comando mysqldump.');
    }

    const sourcePath = now+'backup.sql';
    const destinationPath = path.join(__dirname, 'public', 'respaldos', now+'backup.sql');

    fs.rename(sourcePath, destinationPath, (error) => {
      if (error) {
        console.error(`Error al mover el archivo de respaldo: ${error.message}`);
        console.log('Error al mover el archivo de respaldo.');
      }
      console.log('Respaldo de base de datos completado y archivo movido correctamente.');
      console.log('Respaldo de base de datos completado.');
    });
  });


}
// Ejecutar la función backup() cada 1 minutos HILO HILO HILO HILO
// setInterval(backup, 3 * 60 * 1000);
  
//Backup x Botón
app.get('/backup', (res,req) => {
  backup();
});


app.use('/', require('./router'));

app.listen(3000, ()=>{
    console.log("Server corriendo en el puerto 3000, buenas");
});

