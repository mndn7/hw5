
function summ(A)
{
    let x=1
    let y = 0
   while(x<A)
   {
       if((x%3===0) || (x%5===0))
y+=x
       x+=1
   }
   return y
}
console.log(summ(10))