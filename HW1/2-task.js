let other
let x = 0
function h(n,start,end)
{
    if(n===1)
    {
        x += 1
    }
    else {
        other = 6 - start - end
        h(n - 1, start, other)
        x += 1
        h(n - 1, end, other)
    }
    return(x)
}
console.log(h(3,1,3))