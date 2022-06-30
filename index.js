function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function miscFunction(){    
    };
}

function returnsAnAnonymousFunction(){
    return (function () {
        //...
     });
}

