var Vector = function (components) {
    this.components = components

    this.toString = function () {
        return '(' + this.components.join(',') + ')'
    }

    this.equals = function (b) {
        return this.toString() === b.toString()
    }

    this.add = function (b) {
        if (this.components.length === b.components.length) {
            let x = []
            for (let i = 0; i < this.components.length; i++) {
                x.push(this.components[i] + b.components[i])
            }
            return new Vector(x)
        }
        else{
            throw new Error('Error')
        }
    }
    this.subtract = function (b){
        if (this.components.length === b.components.length) {
            let x = []
            for (let i = 0; i < this.components.length; i++) {
                x.push(this.components[i] - b.components[i])
            }
            return new Vector(x)
        }
        else{
            throw new Error('Error')
        }
    }
    this.dot = function (b){
        if (this.components.length === b.components.length) {
            let x=0
            for (let i = 0; i < this.components.length; i++) {
                x += this.components[i] * b.components[i]
            }
            return x
        }
        else{
           throw new Error('Error')
        }
    }
    this.norm = function(){
            let x=0
            for (let i = 0; i < this.components.length; i++) {
                x += this.components[i] ** 2
            }
            return Math.sqrt(x)
    }
}

let x = new Vector([2, 3, 5])
let y = new Vector([2, 4, 6])
console.log(x.dot(y))
console.log(x.toString())// Output: (1,3,5)
console.log((x.subtract(y)).toString())
console.log((x.add(y)).toString())
console.log(x.norm())
