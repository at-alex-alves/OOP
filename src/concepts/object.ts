class Address {
    public street: string;
    public city: string;
    public country: string;

    /**
     * Creates a new instance of the Address class.
     * @param {string} street - The street where the address is located.
     * @param {string} city - The city where the address is located.
     * @param {string} country - The country where the address is located.
     */
    constructor(street: string, city: string, country: string) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

class User {
    public firsNmae: string;
    public lastName: string;
    public age: number;
    public address: Address;

    /**
     * Creates a new instance of the User class.
     * @param {string} firstName - The first name of the user.
     * @param {string} lastName - The last name of the user.
     * @param {number} age - The age of the user.
     * @param {Address} address - The address of the user.
     */
    constructor(firstName: string, lastName: string, age: number, address: Address) {
        this.firsNmae = firstName;
        this.lastName = lastName;
        this.age = age;
        this.address = address;
    }
}

/**
 * Creates a User object using the Address object as property.
 */
export function test() {
    console.log('\n\nObject:\n');

    var user = new User('Henri', 'Monet', 32, new Address('Rue du Premier Film', 'Lyon', 'France'));

    console.log(user);
}