function VigenèreCipher(key, abc) {
    this.key = key.split('')
    this.abc = abc.split('')

    this.encode = function (str) {
        str = str.split('')
        let keymap = this.key.map((x) => this.abc.indexOf(x))
        let strmap = str.map((x) => this.abc.indexOf(x))
        let encstr = ''
        for (let i = 0; i < str.length; i++) {
            if (strmap[i] !== -1) {
                encstr += this.abc[(strmap[i] + keymap[i % this.key.length]) % this.abc.length]
            } else {
                encstr += str[i]
            }
        }
        return encstr
    };

    this.decode = function (str) {
        str = str.split('')
        let keymap = this.key.map((x) => this.abc.indexOf(x))
        let strmap = str.map((x) => this.abc.indexOf(x))
        let decstr = ''
        for (let i = 0; i < str.length; i++) {
            if (strmap[i] !== -1) {
                decstr += this.abc[(strmap[i] - keymap[i % this.key.length] + this.abc.length) % this.abc.length]
            } else {
                decstr += str[i]
            }
        }
        return decstr
    };
}

abc = "abcdefghijklmnopqrstuvwxyz"
key = "password"
let c = new VigenèreCipher(key, abc)
let m = c.encode('codewars')
console.log(m)
let z = c.decode('rovwsoiv')
console.log(z)