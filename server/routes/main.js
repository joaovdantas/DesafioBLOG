const express = require('express');
const router = express.Router();

//rota server
router.get('',(req,res)=> {
    const locals = {
        title:"Blog Diario",
        description:"Simples teste de com nodejs blog"
    }
    res.render('index',{ locals });
});

router.get('/about',(req,res)=> {
    res.render('about');
});

module.exports = router;