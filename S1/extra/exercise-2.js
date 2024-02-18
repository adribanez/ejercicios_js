const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}]




let fruitschoice = 0;



for (let i = 0; i < foodSchedule.length; i++) {

    const food = foodSchedule[i];
    const foodVegan = food.isVegan;

    console.log(food, foodVegan);
    

if (!foodVegan) {

    food.name = fruits[fruitschoice]
    food.isVegan = true;

    fruitschoice++;
    
    
}



}

console-log(foodSchedule);










