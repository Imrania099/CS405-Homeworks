// 1) Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

let number = 100 ;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

console.log(`ədədinin bölənləri:${number}`);

// 2) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

let number1 = 100;

let say = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        say++;
    }
}

console.log(`${number} ədədinin ${say} böləni var`);

// 3) Stringi böyük hərflərə çevirən funksiya yazın
//function upperStr(str){}

function upperStr(str) {
    return str.toUpperCase();
}

let bfunction = upperStr("salam dünya");

console.log(bfunction);

// 4) Göndərilmiş 2 ədəddən 1-cisini 2-cisinin qüvvətinə 
// yüksəldən function. Misalçün function-a gələn ilk arqumenti 
// 2-ci arqument qədər qüvvətə yüksəldən function - dəyərləri 
// prompt vasitəsi ilə qəbul edib function-a göndərin)

let ilk = 5;
let quvvet = 2;

function qy(a, b) {
    return a ** b;
}

let yukseltme = qy(ilk, quvvet);

console.log(`${ilk} ^ ${quvvet} = ${yukseltme}`);

// 5) Write a JavaScript program(function) that accepts a
// string as input and swaps the case of each character. 
// For example, if you input 'The Quick Brown Fox' the output 
// should be 'tHE qUICK bROWN fOX'Example:
// console.log(convert('saLamNecesen)) -> SAlAMnECESEN

function bb(str) {
    let eks = "";

    for (let i = 0; i < str.length; i++) {
        let duz = str[i];

        if (duz === duz.toUpperCase()){
            eks += duz.toLowerCase();
        } else {
            eks += duz.toUpperCase();
        }
    }

    return eks;

}

console.log(bb("saLamNecesen"));

// ARRAY METHODS

// 1) const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

//#add 'Meat' in the beginning of your shopping cart if it has not been already added
//#add Sugar at the end of you shopping cart if it has not been already added
//#remove 'Honey' 
//#modify Tea to 'Green Tea'

let shopProduct = ['Milk', 'Coffee', 'Tea', 'Honey'];

if (!shopProduct.includes('apple')) {
    shopProduct.unshift('apple');
}

if (!shopProduct.includes('Sugar')) {
    shopProduct.push('Sugar');
}

let honeyIndex = shopProduct.indexOf('Honey');
if (honeyIndex !== -1) {
    shopProduct.splice(honeyIndex, 1);
}

let teaIndex = shopProduct.indexOf('Tea');
if (teaIndex !== -1) {
    shopProduct[teaIndex] = 'Green Tea';
}

// 2)

console.log(shopProduct);

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
];

countries.reverse();
console.log("Reversed:", countries);

countries.splice(7, 2, 'Azerbaijan');
console.log("Final:", countries);



//3) #Concatenate the following two variables and store it in a fullStack variable.

//const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
//const backEnd = ['Node','Express', 'MongoDB']

//console.log(fullStack)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);


//4) const itCompanies = [Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon]

//#Slice out the first 3 companies from the array
//#Slice out the last 3 companies from the array
//#Slice out the middle IT company or companies from the array
//#Sort companies array using sort() method
//#Change each company name to uppercase one by one and print them out
//#Check if a "Google" company exists in the itCompanies array. If it exist return the company else return a company is not found
//#Filter out companies which have more than one 'o' without the filter method

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

// 1. Slice out the first 3 companies
const firstThree = itCompanies.slice(0, 3);
console.log('First 3 companies:', firstThree);

// 2. Slice out the last 3 companies
const lastThree = itCompanies.slice(-3);
console.log('Last 3 companies:', lastThree);

// 3. Slice out the middle IT company
const middleIndex = Math.floor(itCompanies.length / 2);
const middleCompany = itCompanies.slice(middleIndex, middleIndex + 1);
console.log('Middle company:', middleCompany);

// 4. Sort companies array using sort() method
const sortedCompanies = [...itCompanies].sort(); // orijinal array dəyişməsin deyə spread ilə kopyaladıq
console.log('Sorted companies:', sortedCompanies);

// 5. Change each company name to uppercase and print them out
console.log('Companies in UPPERCASE:');
itCompanies.forEach(company => {
  console.log(company.toUpperCase());
});

// 6. Check if "Google" exists in the array
if (itCompanies.includes('Google')) {
  console.log('Google');
} else {
  console.log('Company is not found');
}

// 7. Filter out companies which have more than one 'o' without using filter()
const companiesWithMoreThanOneO = [];

for (let i = 0; i < itCompanies.length; i++) {
  const company = itCompanies[i];
  let count = 0;

  for (let char of company.toLowerCase()) {
    if (char === 'o') count++;
  }

  if (count > 1) {
    companiesWithMoreThanOneO.push(company);
  }
}

console.log('Companies with more than one "o":', companiesWithMoreThanOneO);

//extra:

//#  0 - 100 arası yalnız sadə ədədləri console'da çap edin

//# Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).

//racecar - polidromdur
//hello - polidrom deyil
//# const products = [
  //{
    //id: 1,
    //title: "Smartphone",
    //description: "A high-end smartphone with the latest features.",
  //  //price: 799.99,
  //},
  //{
//  id: 2,
//  title: "Laptop",
//  description: "Powerful laptop with a large screen and fast processor.",
//  price: 1299.99,
//},
//{
//  id: 3,
//  title: "Coffee Maker",
//  description: "An automatic coffee maker with a built-in grinder.",
//  price: 99.99,
//},
//{
//  id: 4,
//  title: "Headphones",
//  description: "Wireless over-ear headphones with noise-cancellation.",
//  price: 199.99,
//},
//{
//  id: 5,
//  title: "Smart TV",
//  description: "55-inch 4K Smart TV with streaming apps built-in.",
//  price: 699.99,
//},
//
//#product arrayindəki producların qiymətləri cəmini və ortalamasını tapın


function sade(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) ;
      return false;
  }
  return true;
}

console.log("0-100 arası sadə ədədlər:");
for (let i = 0; i <= 100; i++) {
  if (sade(i)) {
    console.log(i);
  }
}





function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

console.log("Palindrome yoxlaması:");
console.log("racecar ->", isPalindrome("racecar"));
console.log("hello ->", isPalindrome("hello"));
console.log("Madam ->", isPalindrome("Madam"));




const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
];

let cem = 0;

for (let i = 0; i < products.length; i++) {
  cem += products[i].price;
}

const average = cem / products.length;

console.log("Product Qiymətləri:");
console.log("Cəmi:", cem.toFixed(2));
console.log("Ortalama:", average.toFixed(2));