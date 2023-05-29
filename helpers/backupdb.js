// const { exec } = require('child_process');

// const backupDatabase = () => {
//   const command = 'mysqldump -u localhost -p  asientos > backup.sql';

//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error al hacer el respaldo: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Error al ejecutar el comando: ${stderr}`);
//       return;
//     }
//     console.log('Respaldo de base de datos completado.');
//   });
// };

// window.addEventListener('backupDatabase',startup,false);
