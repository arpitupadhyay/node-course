const multer = require('multer')
const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

router.post('/users/me/pic', upload.single('pic'), async (req,res) => {
    const buffer = await sharp(req.file.buffer).png().toBuffer()
    req.user.pic = buffer
    await req.user.save()
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.delete('/users/me/pic', async (req, res) => {
    req.user.pic = undefined
    await req.user.save()
    res.send()
})

router.get('/users/:id/pic', async (req,res) => {
    try {
        const user = await User.findById(req.params.id)


        if (!user || !user.pic) {
            throw new Error()
        }

        res.set('Content-Type', 'image/png')
        res.send(user.pic)
    } catch (e) {
        Response.status(404).send()
    }
})

module.exports = router