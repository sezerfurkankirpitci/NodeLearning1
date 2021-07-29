var path =require ('path');

module.exports.index = function(req,res){
    res.sendFile(path.join(__dirname,'../../index.html'));
}

module.exports.login = function(req,res){
    res.sendFile(path.join(__dirname,'../../login.html'));
}

module.exports.signin = function(req,res){
    res.sendFile(path.join(__dirname,'../../signin.html'));
}