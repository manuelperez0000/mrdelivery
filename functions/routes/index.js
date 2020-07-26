const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');
var serviceAccount = require('./mrdeliveryvnz-firebase-adminsdk-qy0up-4688b812d7.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://mrdeliveryvnz.firebaseio.com/'
})
const db = admin.database();

//------todas las paginas --------//
router.get('/',           (req, res)=>{res.render('index'      )});
router.get('/login',      (req, res)=>{res.render('login'      )});
router.get('/register',   (req, res)=>{res.render('register'   )});
router.get('/f-password', (req, res)=>{res.render('f-password' )});
router.get('/perfil',     (req, res)=>{res.render('perfil'     )});
router.get('/carrito',    (req, res)=>{res.render('carrito'    )});
router.get('/menu',       (req, res)=>{res.render('menu'       )});
router.get('/pagos',      (req, res)=>{res.render('pagos'      )});
router.get('/categorias', (req, res)=>{res.render('categorias' )});
router.get('/negocio',    (req, res)=>{res.render('negocio'    )});
router.get('/editar-menu',(req, res)=>{res.render('editar-menu')});

router.get('/prueba',(req, res)=>{
    res.send('prueba');
});

router.post('/register', (req, res)=>{
    //resibir un json y luego registrar devolder algo
   /* const user = {
        nombre: req.body.name,
        telefono: req.body.telefono,
        email: req.body.email,
        clave: req.body.pass
    }
    db.ref('users').push(user);
    console.log(req.body);
    */
    var email = req.body.email;
    var password = req.body.pass;
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    alert("Registrado con exito");
    var errorCode = error.code;
    var errorMessage = error.message;
    res.redirect('/');
  });
})


module.exports = router;