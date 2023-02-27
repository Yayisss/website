const mysql = require("mysql")

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "SCRUM4U",
})

db.connect(err => {
  if (err) {
    console.error("Error connecting to MySQL database: " + err.stack)
    return
  }
  console.log("Connected to MySQL database as ID " + db.threadId)
})

module.exports = db
