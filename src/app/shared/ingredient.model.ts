//SHORTCUT автоматически создаст свойства и присвоит им значения, то же, что и ниже
// export class Ingredient {
//     constructor(public name: string, public amount: number){} 
// }

export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name,
        this.amount = amount
    }
}