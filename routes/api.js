var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'palo-it-test.cryz8onlc6fs.us-east-1.rds.amazonaws.com',
  user     : 'mon',
  password : 'welcome1',
  database : 'mon'
});


const getASCII = (name) => {
  let sum=0
  for(const letter of name) {
    sum += letter.charCodeAt(0)
  }
  return sum
}
const getZero = (name) => {
  let count = -1
  let counter = 0
  let bin = 0

  bin = getASCII(name)
  while (bin)
  {
        if (!(bin & 1))
      {
          counter++;
          bin >>= 1;
          count = Math.max(count, counter);
      }
      else
      {
          count = Math.max(count, counter);
          counter = 0;
          bin >>= 1;
      }
  }
  return count
}
exports.countZero = function(req,res){
  try {
    let reqName = req.body.yourName
    let names = reqName.split(' ')

    connection.query('INSERT INTO msNames (firstName, lastName) VALUES (?, ?)', [names[0], names[1]], function(err, result) {
    })

    res.json({
      "total":getZero(reqName)
    })
  } catch(e) {
    res.json({
      "error":"something is wrong"
    })

  }

};
