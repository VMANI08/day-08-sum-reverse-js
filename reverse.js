
//sum of given number reverse

let n=658;
let sum= 0 ;
while(n>0)
{
    lastdigit= n % 10;

        sum =(sum * 10)+lastdigit
        n = n-lastdigit;

    
    n=n/10;
}
console.log(sum);