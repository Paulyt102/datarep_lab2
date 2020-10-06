class BMI {
    constructor(height, weight) { // constructor
        this.height = height;
        this.weight = weight;


    }
    calculateBMI() { //method to calculted bmi
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}
let MyBmi = new BMI(2, 90);
let calulatedBMI = MyBmi.calculateBMI();
console.log(calulatedBMI); // prints BMI to terminal