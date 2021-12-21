const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application')
const userRouter = require('./src/user-router')
const jsonParser = require('./framework/parseJson')
const parseURL = require('./framework/parseUrl')
const app = new Application()

app.use(jsonParser)
app.use(parseURL('http://localhost:5000'))

app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Servak start na PORTy ${PORT}`))