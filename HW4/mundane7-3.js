class Warrior {
    experience1 = 100;
    level1 = Math.trunc(this.experience1/100);
    rank1 = 'Pushover';
    achievements1=[]
    updateLevel() {
        this.level1 = Math.trunc(this.experience1 / 100);
    }
    level() {
        this.updateLevel()
        return this.level1;
    }
    experience() {
        return this.experience1;
    }
    rank() {
        if (this.level1 >= 1 && this.level1 <= 9)
            this.rank1 = 'Pushover';
        else if (this.level1 >= 10 && this.level1 <= 19)
            this.rank1 = 'Novice';
        else if (this.level1 >= 20 && this.level1 <= 29)
            this.rank1 = 'Fighter';
        else if(this.level1 >= 30 && this.level1 <= 39)
            this.rank1='Warrior'
        else if(this.level1 >= 40 && this.level1 <= 49)
            this.rank1='Veteran'
        else if(this.level1 >= 50 && this.level1 <= 59)
            this.rank1='Sage'
        else if(this.level1 >= 60 && this.level1 <= 69)
            this.rank1='Elite'
        else if(this.level1 >= 70 && this.level1 <= 79)
            this.rank1='Conqueror'
        else if(this.level1 >= 80 && this.level1 <= 89)
            this.rank1='Champion'
        else if(this.level1 >= 90 && this.level1 <= 99)
            this.rank1='Master'
        else if(this.level1 ===100)
            this.rank1='Greatest'
        return this.rank1;
    }
    achievements() {
        return this.achievements1;
    }
    training([achiv,exp,minlvl]){
        if(this.level1 >= minlvl){
            this.experience1 += exp
            if(this.experience1>10000)
            {
                this.experience1 = 10000
            }
            this.achievements1.push(achiv)
            this.updateLevel()
            return achiv
        }
        else{
            return "Not strong enough"
        }
    }
    battle(b){
        if(b>=1 && b<=100){
            if (((b - this.level1)>=5) && ((Math.floor(b/10)) > (Math.floor(this.level1/10))))
            {
                return "You've been defeated"
            }
            if(this.level1===b){
                this.experience1+=10
            }
            if(this.level1-b===1){
                this.experience1+=5
            }
            if(b-this.level1>=1){
                this.experience1 += 20 * (b-this.level1) * (b-this.level1)
            }
            if(this.experience1>10000)
            {
                this.experience1 = 10000
            }
            if((this.level1 - b) >= 2 ){
                this.updateLevel()
                return "Easy fight"
            }
            if(this.level1-b === 1 || this.level1 === b){
                this.updateLevel()
                return "A good fight"
            }
            if(b-this.level1>0){
                this.updateLevel()
                return "An intense fight"
            }
        }
        return "Invalid level"
    }
}

let Goku = new Warrior;
Goku.training(["Do ten push-ups", 95, 1])
Goku.battle(0)
Goku.battle(1)
Goku.battle(3)
Goku.training(["Survive one night at the Forest of Death", 170, 2])
Goku.training(["Mastered the Spirit Bomb", 1580, 10])
Goku.battle(2)
Goku.battle(9)
console.log(Goku.level())
console.log(Goku.battle(14))
console.log(Goku.achievements());
console.log(Goku.level())
