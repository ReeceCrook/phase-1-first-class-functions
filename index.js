function receivesAFunction(myFunction){
    console.log(myFunction)
    myFunction()
}

function returnsANamedFunction(namedFunction){
    return (function namedFunction(){
        console.log(`hi`);
        
    }) 
}

returnsANamedFunction()


function returnsAnAnonymousFunction(){
    return function(){
        console.log('hi')
    }
}