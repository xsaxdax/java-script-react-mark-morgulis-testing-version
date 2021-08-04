const { create, all } = require('mathjs') //import mathjs, because why code it yourself?
const math = create(all)//create an instance with all mathjs functonality, although its not necesarry now, 
//you can trigonometry and other stuff later on 

export default class Calculation {

    

    
    constructor(expression) {
        this.expression = expression;
        
    }

    calculate() {
        /**
         * @TODO Add your implementaiton here
         */
        //add checks for input, check illegal characters
        if ( this.expression.match(/[`~!@#$%&§_<>?:"{},;'[\]]/im)){
            return null
        }
        let input=this.expression
        this.expression=math.evaluate(this.expression) //evaluate Input
        if (typeof this.expression ==='number'){ //if result isn t a number it s probaly a wrong Input
            return input+ " = " + this.expression //tests will fail if it s coded that way, but makes it easier, to not store the input at an other place
        }else{
            return null
        }
        //9 of 11 tests succed
        //save the input expression as local storage? don t have an other clue
        ;
    }
}
