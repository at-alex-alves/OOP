class BankAccount {
    public owner: string;
    private money: number;

    /**
     * Creates a new instance of the BankAccount class.
     * @param {string} owner - The owner of the bank account.
     * @param {number} money - The amount of money the bank account has.
     */
    constructor(owner: string, money: number) {
        this.owner = owner;
        this.money = money;
    }

    /**
     * Returns the amount of money.
     * @returns The money variable.
     */
    public getMoney(): number {
        return this.money;
    }

    /**
     * Sets the money property to the new value.
     * @param {number} newValue - The new value to be "money" property.
     */
    private setMoney(newValue: number): void {
        this.money = newValue;
    }

    /**
     * Adds money to the bank account.
     * @param {number} moneyToBeAdded - The money to be added in the bank account.
     */
    public addMoney(moneyToBeAdded: number): void {
        if (moneyToBeAdded > 0) {
            this.setMoney(this.getMoney() + moneyToBeAdded);
            console.log(`${moneyToBeAdded.toFixed(2)} pounds have been added to your bank account. Now it has ${this.getMoney().toFixed(2)}`);
        } else {
            console.log('Can only add values greater than 0!');
        }
    }

    /**
     * Removes the money from the bank account.
     * @param {number} moneyToBeRomoved - The money to be removed from the bank account.
     */
    public removeMoney(moneyToBeRomoved: number): void {
        if (moneyToBeRomoved > 0) {
            this.setMoney(this.getMoney() - moneyToBeRomoved);
            console.log(`${moneyToBeRomoved.toFixed(2)} pounds have been removed from your bank account. Now it has ${this.getMoney().toFixed(2)}`);
        } else {
            console.log('Can only remove values greater than 0!');
        }
    }
}

/**
 * Creates a BankAccount object, adds 153.70 pounds and removes 67.04 to it.
 */
export function test(): void {
    console.log('\n\nEncapsulation Test:\n');

    var banco = new BankAccount('Daniel', 2560.20);

    banco.addMoney(153.70);

    console.log(banco);

    banco.removeMoney(67.04);

    console.log(banco);
}