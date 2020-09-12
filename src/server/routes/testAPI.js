const express = require('express')
const axios = require('axios')
const compression = require('compression')

const router = express.Router()
router.use(compression())

const fields = 'fields=items(id,volumeInfo(authors,categories,imageLinks,title))'

router.get('/', (req, res, next) => {
    console.log('get', req.ip)
    let query = ''
    for (let q in req.query) {
        if (req.query[q]) {
            query += `${q}:${escape(req.query[q])}+`
        }
    }
    console.log(query)
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&${fields}`)
        .then(response => res.send(response.data))
        .catch(err => err)
});

module.exports = router
