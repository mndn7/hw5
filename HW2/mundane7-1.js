function kolo(A,x)
{
    let B = []
    let sum=0
    let c = A.length / x
    for (let i = 0; i < c; i++)
    {
        for (let k = 0; k < A.length; k += c)
        {
           sum += A[k+i]
        }
        B[i] = sum
        sum=0
    }
    return Math.max.apply(null,B)
}
console.log(kolo([1,2,3,4], 2))
