require('dotenv').config()
const app = require('./src/app')
const mongoDb = require('./src/db/db')

mongoDb()

app.listen(3000,()=>{
    console.log('server is listen at port 3000.')
})