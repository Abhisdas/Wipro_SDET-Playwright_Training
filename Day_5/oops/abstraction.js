class CoffeMachine {
    #waterTemperature = 90;
 
    #boilWater() {
        return `Boiling water to ${this.#waterTemperature} degrees.`;
    }
 
    #grindBeans() {
        return "Grinding beans.";
    }
 
    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return `${boilMessage} ${grindMessage} Brewing coffee.`;
    }
}
 
const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());
 