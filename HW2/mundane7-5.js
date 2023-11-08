function search(obj,val)
{
    if(Array.isArray(obj))
        return obj.includes(val)
    for(let key in obj)
        if(search(obj[key],val))
            return key
    return null
}
console.log(search({
    "one": {
        "nest1": {
            "val1": [9, 34, 92, 100]
        }
    },
    "2f7": {
        "n1": [10, 92, 53, 71],
        "n2": [82, 34, 6, 19]
    }
},82))