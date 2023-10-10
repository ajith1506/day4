let prime=[8,9,5,3]
let primenumber = (prime)=> {
    return prime.filter(function(n){
      for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    });
  };
  console.log(primenumber(prime));
  