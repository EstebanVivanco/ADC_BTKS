// const { guardar } = require('../controllers/crud');
// const conexion = require('../database/bd');

// describe('guardar', () => {
//   beforeEach(() => {
//     // Restaurar el estado inicial de la base de datos o realizar configuraciones necesarias antes de cada prueba
//   });

//   afterEach(() => {
//     // Limpiar o restaurar el estado de la base de datos después de cada prueba
//   });

//   test('debería guardar un nuevo registro y redirigir a "asientos"', () => {
//     const req = {
//       body: {
//         inputcontainer: '1,2,3',
//         user: 'userId',
//       },
//     };
//     const res = {
//       redirect: jest.fn(),
//     };

//     guardar(req, res);

//     expect(conexion.query).toHaveBeenCalledTimes(2); // Verifica que se haya llamado a la función de consulta de la base de datos dos veces
//     expect(conexion.query).toHaveBeenCalledWith(
//       'UPDATE asiento SET ? WHERE id_asiento IN (?)',
//       [{ estado: 1, id_usuario: 'userId' }, ['1', '2', '3']],
//       expect.any(Function)
//     );
//     expect(res.redirect).toHaveBeenCalledWith('asientos');
//   });
// });
