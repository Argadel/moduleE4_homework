// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.


function check (obj, key) {

    return console.log(key in obj);
}

const Cat = {
    name: 'Bonya',
    age: '2 years old',
    breed: 'stray'
}

check(Cat, "age");
check(Cat, "fav_food");