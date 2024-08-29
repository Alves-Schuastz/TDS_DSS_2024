

function resultado(param){
    for(let i=0; i<9; i++){
        let valA = param[i];
        let valB = param[i+1];

        if(valA<valB){
            return valA;
        }
        else{
            return valB;
        }
    }
}

var lista =  [2,6,8,9,7,5,3,1,4];
console.log("hollo world");


