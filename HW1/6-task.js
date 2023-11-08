function rerange(a)
{
    let n
    let trans
    let c
    n = String(a).split("").map((a)=>
    {
        return Number(a)
    })
    for(let i=0;i<n.length;i++)
    {
        for (let j = 0; j < n.length - 1-i; j++)
        {
            if(n[j]<n[j+1])
            {
                trans=n[j]
                n[j]=n[j+1]
                n[j+1]=trans
            }
        }
    }
    c=n.join('')
    return(c)
}
console.log(rerange(783425))