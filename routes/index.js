var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Muhammad Aldo Nugraha' });
});
router.get('/profile', function(req,res){
  res.render("profile")
})

module.exports = router;
