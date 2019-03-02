import Hoagie from './Hoagie';

export default class ItalianHoagie extends Hoagie {
  public meatUsed: string[] = ['Salami', 'Pepperoni', 'Capicola Ham'];
  public cheeseUsed: string[] = ['Provolone'];
  public veggiesUsed: string[] = [
    'Lettuce',
    'Tomatoes',
    'Onions',
    'Sweet Peppers'
  ];
  public condimentsUsed: string[] = ['Oil', 'Vinegar'];

  addMeat(): string {
    let addedMeat = 'MEAT: ';

    for (const meat of this.meatUsed) {
      addedMeat += `${meat} `;
    }
    return addedMeat;
  }

  addCheese(): string {
    let addedCheese = 'CHEESE: ';

    for (const cheese of this.cheeseUsed) {
      addedCheese += `${cheese} `;
    }
    return addedCheese;
  }

  addVegetables(): string {
    let addedVeggies = 'VEGGIES: ';

    for (const veg of this.veggiesUsed) {
      addedVeggies += `${veg} `;
    }
    return addedVeggies;
  }

  addCondiments(): string {
    let addedCondiments = 'CONDIMENTS: ';

    for (const cond of this.condimentsUsed) {
      addedCondiments += `${cond} `;
    }
    return addedCondiments;
  }
}
