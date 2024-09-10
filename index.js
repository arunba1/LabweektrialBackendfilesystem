const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/sd', (req, res) => {
  const body = (req.body);
  console.log('Data received');

  try{
    fs.appendFileSync('data.json',JSON.stringify(body)+'\n');
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end('Data Received Successfully');
} catch(err){
    res.writeHead(500,{'Content-Type':'text/plain'});
    res.end('Error writing to the file!!');
}

});

app.listen(3030, '0.0.0.0', () => {
  console.log('Server is running on port 3030');
});