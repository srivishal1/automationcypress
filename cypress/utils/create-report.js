const fs = require('fs')

const d = new Date()
const formattedDate = `${d.getDate()}-${(d.getMonth() + 1)}-${d.getFullYear()} ${d.getHours()}_${d.getMinutes()}_${d.getSeconds()}`

const src = './cypress/reports'
const dest = `./cypress/reports-${formattedDate}`;

fs.rename(src, dest, err => {
  if (err) {
    console.error(err)
    return
  }
})