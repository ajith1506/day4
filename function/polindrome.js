( function () {
    var myArray = ['thala', 'anna', 'yamaha', 'madam'];
    var arr = myArray.filter(function (c, d) {
      var palindrome = c.split('').reverse().join('');
      if (c == palindrome) {
        console.log(myArray[d]);
      }
    });
  })()
  
  