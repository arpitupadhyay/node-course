console.log('client side java script file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((Response) => {
    Response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=!').then((Response) => {
    Response.json().then((data) => {
        if (data.error) {
            console.log(data.error)
        } else {
            console.log(data.location)
            console.log(data.forecast)
        }
    })
})