let str=("hi guvi i am ajith")
cap= (str)=> {
 str = str.toLowerCase().split(' ');
    for(let i=0;i< str.length;i++){
        str[i]= str[i].charAt(0).toUpperCase()+ str[i].slice(1);
    }
    return (str.join(' '));

 }
 console.log(cap(str));