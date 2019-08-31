const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express() //comment

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
        title: 'Weather app',
        name: 'Arpit Upadhyay'
    })
})

app.get('/about', (req,res) => {
    res.render('about', {

        title: 'About me',
        name: 'Arpit Upadhyay'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: 'this is some more help',
        title: 'Help',
        name: 'Arpit Upadhyay'
    })
})

app.get('/weather', (req, res)=> {
    if (!req.query.address) {
        return res.send({
            error: 'you must provide an address!'
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
app.listen(3000, () => {
    console.log('server is on port number 3000!')
})

