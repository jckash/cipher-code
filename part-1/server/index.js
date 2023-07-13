const express = require('express')
const cors = require('cors')
const bcryptjs = require('bcryptjs')

const app = express()

app.use(express.json())
app.use(cors())


const {
    login,
    register
} = require('./controllers/auth')

app.post(`/api/login`, login)
app.post(`/api/register`, register)

const database = []

module.exports = {
    register: (req, res) => {
        const {username, email, firstName, lastName, password} = req.body
        const saltRounds = 10
        
        bcrpyt.hash(password, saltRounds, (err, passwordHash) =>  {
            let newDatabaseEntry = {}
            newDatabaseEntry.username = username
            newDatabaseEntry.email = email
            newDatabaseEntry.firstName = firstName
            newDatabaseEntry.lastName = lastName
           newDatabaseEntry.passwordHash = passwordHash
           console.log(newDatabaseEntry)
           database.push(newDatabaseEntry)
           res.status(200).send({success: true})
 })
 },
login: (req, res) => {
 const {email, password} = req.body
 let userData

 for (let i = 0; i<database.length; i++) {
    if (email === database[i].email) {
        userData = database[i]
    }
}
 
 if (!userData) {
    res.status(400).send({success: false, message: 'Incorrect Username'})
 } else {
    bcrypt.compare(password, userData.password, (err, result) => {
        if (!err) {
            if (result){
                const userCopy = { ...userData }
                delete userCopy.passwordHash
                res.status(200).send(userCopy)
    } else {
        console.log('Error during bycrypt.compare(): ' + err)
        res.status(400).send({success: false})
    }
        }
 })
}
}
}

app.listen(4004, () => console.log(`running on 4004`))

