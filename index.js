/*Destructuring*/

/*1*/
const Country = {
    countryName: "Chech Republic",
    nationalities: ['Czechs', 'Poles', 'Ukrainians', 'Bulgarians', 'Americans'],
    population: 35000000,
    areaSqKM: 345000,
    helloPhrase: "Dobry Dzen",
};

/*2*/
const {countryName, helloPhrase} = Country;
console.log(countryName);
console.log(helloPhrase);

/*3*/
const {population, areaSqKM} = Country;
const populationDensity = population + areaSqKM;

/*4*/
const [firstNationalities] = Country.nationalities;
console.log(firstNationalities);

/*Spread*/

/*1*/
const array = ['Hello', 123, 'bu12'];

/*2*/
const array2 = [...array]

/*3*/
const string = 'тест строки как массива'
const array3 = [...string]

/*4*/
const object = {
    id: 1,
    firstname: 'Altair',
    lastname: "Ibn-La-Axad",
    age: 34
}

/*5*/
const object1 = {...object};

/*6*/
const object2 = {
    tel: 23121321,
    email: 'alt23@gmail.com'
}

/*7*/
const object3 = {...object, ...object2}

/*Rest*/

/*1*/
function arg(...array4){
    console.log(array4);
}
arg(1, 2, 3, 4);

/*2*/
function arg1(...array5){
    if (typeof(array5[0]) === 'number'){
        console.log(Math.pow(array5[0], 2))
    }else{
        console.log(array5[0])
}
}
arg1(5, 2, 3, 4);

/*3*/
function arg2(...array6){

    let min = array6[0]
    for (let i = 0; i < array6.length; i++) {
        if(array6[i] < min){
            min = array6[i];
        }else{
            continue;
        }
    }

    console.log(min);
}
arg2(43, 5, 10, 22);