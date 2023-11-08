let n
function is_prime(x)
{
    n = 1
    while (n <= x / 2)
    {
       n+=1
if((x/n)%1===0)
        {
    return 0
        }
    }
    return 1
}
console.log(is_prime(73))