const { create, all } = require('mathjs')
const math = create(all)

export default class Calculation {

    

    
    constructor(expression) {
        this.expression = expression;
        
    }

    calculate() {
        /**
         * @TODO Add your implementaiton here
         */
        //add checks for input
        if ( this.expression.match(/[`~!@#$%&§_<>?:"{},;'[\]]/im)){
            return null
        }
        let input=this.expression
        this.expression=math.evaluate(this.expression) 
        if (typeof this.expression ==='number'){
            return input+ " = " + this.expression
        }else{
            return null
        }
        //9 of 11 tests succed
        //save the input expression as local storage? don t have an other clue
        ;
    }
}
