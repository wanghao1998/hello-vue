var oracledb =require("oracledb");
var express = require('express');
var router = express.Router();

var config = {
  user:'system',
  password:'Wanghao1998',
  connectString : "localhost:1521/orcl"
};
//注册用户名是否有效
router.post('/zhuceuser', function(req, res, next) {
  var password = req.body.password;
  oracledb.getConnection(
    config,
    function(err, connection)
    {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute("SELECT * from NAMEUS WHERE UNAME=:name",
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
          
         if(result.rows.length)
         {
          res.end('{"success":"1"}'); 
         }
          else{
            res.end('{"success":"0"}'); 
          }
          
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
//保存数据到表
router.post('/zhucelogin', function(req, res, next) {
  var password = req.body.password;
  console.log(password);
  oracledb.getConnection(
    config,
    function(err, connection)
    {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute("insert into NAMEUS(UNAME，PASSWORD) values(:name,:pass) ",
      {
          name:req.body.username,
          pass:req.body.password
          //id:"jl"
      },
      {autoCommit:true},
        function(err, result)
        {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          }
        
          res.end('{"USERNAME":"'+req.body.username+'","PASS":"'+req.body.password+'"}'); 
         
          
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
//保存数据到表
router.post('/login', function(req, res, next) {
  var password = req.body.password;
  console.log(password);
  oracledb.getConnection(
    config,
    function(err, connection)
    {
      if (err) {
        console.error(err.message);
        return;
      }
      connection.execute("SELECT * from NAMEUS WHERE UNAME=:name AND PASSWORD=:pass",//增加数据
      {
          name:req.body.username,
          pass:req.body.password
          //id:"jl"
      },
      {autoCommit:true},
        function(err, result)
        {
          if (err) {
            console.error(err.message);
            doRelease(connection);
            return;
          }
          if(result.rows.length)
          {
            console.log(result.rows);
           res.end('{"success":"1","USERNAME":"'+req.body.username+'","PASS":"'+req.body.password+'"}'); 
          }
           else{
             res.end('{"success":"0"}'); 
           }
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

