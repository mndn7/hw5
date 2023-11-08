function Regex(B){
    let regex = /^\[(.)\1{3}\]$/
    return regex.test(B)
}
function unpackSausages(A){
    let k=0;
    let b = []
    let x =A.join(',')
    x=x.split(',')
    for (let i = 0; i < x.length; i++)
    {
        if(Regex(x[i]))
        {
            k++
            if(k%5!=0)
                b.push(x[i])
        }
    }
    b = b.map((x) => x.slice(1, -1))
    b=b.join('').replace(/(.)/g, '$1 ').trim()
    return b
}
console.log(unpackSausages([[ "[    ]", "[    ]","[]]]]]", "(-)", "[IIII]", "[aAaA]" ], [ "IuI", "[llll]" ], [ "[@@@@]", "UwU",
    "[IlII]" ], [ "IuI", "[))))]", "x","[    ]" ], ["[    ]"]] ))