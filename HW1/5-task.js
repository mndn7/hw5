function max_min(a)
{
    let i
    let n = a.split(' ')
    n =n.map((x) => parseInt(x))
    let max = n[0]
    let min = n[0]
    for ( i=1;i<=n.length;i++)
    {
        if(n[i]>max)
        max= n[i]
    }
    for ( i=1;i<=n.length; i++)
    {
        if(n[i]<min)
            min = n[i]
    }
    let C =[max,min]
return(C)
}
console.log(max_min('31 1 4 6 5'))
