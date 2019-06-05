//#100daysofcode challenge on instagram [3/100]

// Accessing properties of an object via dot notation
let lunchOrder = {
    appetizer: 'Ahi Tuna',
    drink: 'Iced Tea',
    entree: 'Macaroni and Cheese',
    lunchGuests: 4,
    desertOptions: ['Chocolate Cake', 'Ice Cream', 'Pudding']
};

// Access different properties with dot notation
let lunchEntree = lunchOrder.entree;
console.log(lunchEntree);

let desertArray = lunchOrder.desertOptions;
console.log(desertArray);


// Accessing properties of an object with bracket notations

let dinnerOrder = {
    'Has Reservation' : true,
    appetizer: 'Soup',
    drink: 'Martini',
    entree: 'Lobster',
    dinnerGuests: 2,
    desertOptions: ['Cheesecake', 'Cake']
};

let checkReservation = 'Has Reservation';
console.log(dinnerOrder[checkReservation]);
