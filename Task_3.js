// Написать функцию, которая создает пустой объект, но без прототипа.


function my_func() {

    return Object.create(null);
}

const MyDog = my_func()
console.log(MyDog)