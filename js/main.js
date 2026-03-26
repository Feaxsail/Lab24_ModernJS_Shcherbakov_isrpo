//  Деструктуризация массивов 


const colors = ["red", "green", "blue"];

const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary);

const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);

//  Деструктуризация объектов 


const user = {
  name: "Алиса",
  age: 25,
  city: "Москва",
};

const userName = user.name;
const userAge = user.age;
console.log(userName, userAge);

const { name, age, city } = user;
console.log(name, age, city);

const { name: fullName, age: years } = user;
console.log(fullName, years);

const { name: personName, country = "Россия" } = user;
console.log(personName, country);

// Деструктуризация в параметрах функций 


function printUserOld(userObj) {
  console.log(`${userObj.name}, ${userObj.age}, ${userObj.city}`);
}

function printUserNew({ name, age, city }) {
  console.log(`${name}, ${age}, ${city}`);
}

printUserOld(user);
printUserNew(user);

// Практическое задание 


const product = {
  name: "Ноутбук",
  price: 75000,
  category: "Электроника",
  inStock: true
};

const { name: productName, price, category, inStock } = product;
console.log(productName, price, category, inStock);

function printProduct({ name, price, category, inStock }) {
  console.log(`Товар: ${name}, цена: ${price} руб., категория: ${category}, наличие: ${inStock ? "есть" : "нет"}`);
}

printProduct(product);