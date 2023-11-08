let B
let n
function findNb(A)
{
    if(Math.sqrt(A)%1===0)
    {
        B=2*Math.sqrt(A)
        n=(-1+Math.sqrt(1+4*B))/2
        if(n%1===0)
        {
            return n
        }
        else
            return -1
    }
    return -1
}
console.log(findNb(1071225))