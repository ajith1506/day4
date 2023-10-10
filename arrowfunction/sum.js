let ar = [1, 2, 3, 4, 5]
let abs =(ar)=> {
    
    let sum = ar.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
  }
  console.log(abs(ar));
  
  