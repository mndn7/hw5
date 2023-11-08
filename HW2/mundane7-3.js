
function anagram(strs)
{
    let map = {}

    for(let str of strs){
        let s = str.split('').sort().join('')
        if(!map[s])
            map[s] = []
        map[s].push(str)
    }
    return Object.values(map)
}
console.log(anagram(["tsar", "rat", "tar", "star", "tars", "cheese"]))
console.log(anagram(["tsar", "rat", "tar", "star", "tars", "cheese"]))