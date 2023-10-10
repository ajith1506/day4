( function() {
    let arr1 = [8, 23, 98, 68, 38,24];
    let arr2 = [6, 15, 76, 67, 20, 97];
    
      let c = [...arr1, ...arr2].sort((arr1, arr2) => arr1 - arr2);
    
      const half = c.length / 2 | 0;
      
    if (c.length % 2) {
    console.log(c[half]);
    } else {
      
    console.log((c[half] + c[half - 1]) / 2);
    }
    
    })()
    