import Hoagie from './Hoagie';

export default class VeggieHoagie extends Hoagie {
  private veggiesUsed: string[] = [
    'Lettuce',
    'Tomatoes',
    'Onions',
    'Sweet Peppers'
  ];
  private condimentsUsed: string[] = ['Oil', 'Vinegar'];

  customerWantsMeat(): boolean {
    return false;
  }
  customerWantsCheese(): boolean {
    return false;
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

  addMeat(): string {
    return 'NO MEAT ';
  }

  addCheese(): string {
    return 'NO CHEESE ';
  }
}
