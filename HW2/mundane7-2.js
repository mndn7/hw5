function mediana(A)
{
    for(i = 0; i < A.length; i++)
    {
        let sum1 = 0;
        for(j = i; j >= 0; j--)
        {
            sum1 += A[j];
        }

        let sum2 = 0;
        for(k = i; k < A.length; k++){
            sum2 += A[k];
        }

        if(sum1 === sum2)
        {
            return i;
        }

    }
    return -1;
}
console.log(mediana([1,2,3,4,3,2,1]))