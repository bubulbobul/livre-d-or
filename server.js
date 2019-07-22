let express = require('express')
let bodyParser = require('body-parser')
let session =require('express-session')

app = express()


// Moteur de template
app.set('view engine', 'ejs')

// Middleware
app.use('/assets', express.static('public'))
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'yovbwerhggfdso',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(require('./middlewares/flash'))

// Routes
app.get('/', (req, res) => {
    console.log(process.env.NODE_ENV)

    // console.log(req.session.error)
    // if (req.session.error) {
    //     res.locals.error = req.session.error
    //     req.session.error = undefined
    // }
    // console.log(req.session)
    let Message = require('./models/message')
    Message.all((messages) => {
        res.render('page/index', {messages: messages})
    })
})

app.post('/', (req,res) => {
    // console.log(req.body)
    if(req.body.message === undefined || req.body.message === '') {
        // res.render('page/index', {error: "Vous n'avez pas entre de message"})
        req.flash('error', "Vous n'avez pas entre de message")    
        res.redirect('/')
    } else {
        let Message = require('./models/message')
        Message.create(req.body.message, () => {
            req.flash('success', "Merci !")
            res.redirect('/')
        })
    }
})

app.get('/message/:id', (req, res) => {
    // res.send(req.params.id)
    let Message = require('./models/message')
    Message.find(req.params.id, (message) => {
        res.render('message/show', {message: message})
    })
})

app.listen(8081)