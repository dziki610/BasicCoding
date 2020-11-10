const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {  
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.mains = desserts;
  },
  get courses() {
   return {
    appetizers: this.appetizers,
    mains: this.mains,
    desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
getRandomDishFromCourse(courseName) {
  const dishes = this.courses[courseName];
  const randomIndex = Math.floor(Math.random() * dishes.length); 
  return dishes[randomIndex];
},
generateRandomMeal() {
  const appetizers = this.getRandomDishFromCourse('appetizers');
  const mains = this.getRandomDishFromCourse('mains');
  const desserts = this.getRandomDishFromCourse('desserts');
  const totalPrice = appetizers.price + mains.price + desserts.price;
  return `Your meal is ${appetizers.name}, ${mains.name}, and ${desserts.name}, and the total price is ${totalPrice}`
  }
};

menu.addDishToCourse('appetizers', 'salad', 5);
menu.addDishToCourse('appetizers', 'olives', 3);
menu.addDishToCourse('appetizers', 'cheese', 9);

menu.addDishToCourse('mains', 'pasta', 10);
menu.addDishToCourse('mains', 'seafood', 15);
menu.addDishToCourse('mains', 'pizza', 12);

menu.addDishToCourse('desserts', 'cake', 5);
menu.addDishToCourse('desserts', 'fruits', 4);
menu.addDishToCourse('desserts', 'tea', 2);

const meal = menu.generateRandomMeal();
console.log(meal);
