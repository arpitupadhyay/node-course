const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express() //comment
const port = process.env.PORT || 3000

// define paths for express config
const publicdirectorypath = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')
const partialspath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs') 
app.set('views', viewspath)
hbs.registerPartials(partialspath)


// setup static directory to serve
app.use(express.static(publicdirectorypath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Arpit Upadhyay'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {

        title: 'About Me',
        name: 'Arpit Upadhyay'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: 'This is some more help.',
        title: 'Help',
        name: 'Arpit Upadhyay'
    })
})

app.get('/weather', (req, res)=> {
    if (!req.query.address) {
        return res.send({
            error: 'You must provide an address!'
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location} = {} ) => {
        if (error) {
            return res.send({ error })
        }

    forecast( latitude, longitude, (error, forecastdata) => {
        if (error) {
            return res.send({ error })
        }

        res.send({
            forecast: forecastdata,
            location,
            address: req.query.address
            })
        })
    })
})


app.get('/products', (req, res)=> {

    if (!req.query.search) {
        return res.send ({
            error: 'you must provide a search term'
        })
    }

    console.log(req.query.search)
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res)=> {
    res.render('404', {
        title: '404 help',
        name: 'Arpit Upadhyay',
        errormessage: 'help article not found.'
    })
})

app.get('*', (req, res)=> {
    res.render('404', {
        title: '404',
        name: 'Arpit Upadhyay',
        errormessage: 'page not found'
    })
})
app.listen(port, () => {
    console.log('Server is on port ' + port)
})
