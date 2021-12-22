const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseURL = require('./framework/parseUrl')
const mongoose = require('mongoose')
const app = new Application()

app.use(jsonParser)
app.use(parseURL('http://localhost:5000'))

app.addRouter(userRouter)


const start = async() => {
    try {
        await mongoose.connect('mongodb+srv://Olexander:16041989@cluster0.r2n9r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`Servak start na PORTy ${PORT}`))

    } catch (e) {
        console.log(e);
    }
}
start()