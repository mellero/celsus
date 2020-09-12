const express = require('express')
const router = express.Router()

const User = require('../models/User')

router.get('/', (req, res, next) => {
//    User.find()
//         .then(users => res.json(users))

    // const testUser = new User({ username: 'Test' })
    // testUser.save()
    //     .then(user => res.send(user))
});

router.post('/', (req, res, next) => {
    // const newUser = new User({
    //     name: req.body.name
    // })

    // newUser.save()
    //     .then(user => res.json(user))
});

router.put('/:id', async (req, res, next) => {
    // console.log(req.params.id)
    // const { title, authors, imageLinks } = req.body.text.volumeInfo

    // // Text.find({ title: title, author: authors })
    // //     .then(res => {
    // //         if (!res) createNewText()
    // //     })

    // const user = await User.findById(req.params.id)
    // await user.library.push(imageLinks.thumbnail)
    // await user.save()
    // return await res.send(user)
})

async function createNewText() {

}
 

module.exports = router