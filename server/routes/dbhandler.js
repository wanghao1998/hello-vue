var oracledb =require("oracledb");
var express = require('express');
var router = express.Router();

var config = {
  user:'system',
  password:'Wanghao1998',
  connectString : "localhost:1521/orcl"
};
//查找
router.post('/login', function(req, res, next) {
  var password = req.body.password;
  oracledb.getConnection(
    config,
    function(err, connection)
    {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute("SELECT * from NAMEUS WHEAR UNAME=:name",
      {
        name:req.body.username
      },
        function(err, result)
        {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          }
          //打印返回的表结构
          console.log(result.metaData);
          //打印返回的行数据
          console.log(result.rows);  
          req.session.username = req.body.username; //存session
          req.session.password = password;
          
          res.end('{"success":"true"}');  
        });
    });
  
  function doRelease(connection)
  {
    connection.close(
      function(err) {
        if (err) {
          console.error(err.message);
        }
      });
  } 
});

module.exports = router;

