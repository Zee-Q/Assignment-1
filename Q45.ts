// 45.	Cars: Write a function that stores information about a car in a 
// Object. The function should always receive a manufacturer and a model 
// name. It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value 
// pairs, such as a color or an optional feature. Print the Object that’s 
// returned to make sure all the information was stored correctly.

interface Car {
    Manufacturer: string;
    Model: string;
    [key: string]: string | number;
}

function make_car(Manufacturer: string, Model: string, options?: { [key: string]: string | number }): Car {
    let car: Car = { Manufacturer, Model };
    if (options) {
        for (let key in options) {
            car[key] = options[key];
        }
    }
    return car;
}

let car = make_car('Cruse', 'Mehran', { color: 'cream', year: 2010 });
console.log(car);