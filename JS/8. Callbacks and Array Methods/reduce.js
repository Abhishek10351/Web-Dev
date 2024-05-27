const games = [
    {
        name: "God of War: Ragnarok",
        rating: 94,
        year: 2022,
    },
    {
        name: "Red Dead Redemption 2",
        rating: 97,
        year: 2018,
    },
    {
        name: "The Witcher 3: Wild Hunt",
        rating: 93,
        year: 2015,
    },
    {
        name: "Uncharted 4: A Thief's End",
        rating: 93,
        year: 2016,
    },
    {
        name: "Horizon Forbidden West",
        rating: 91,
        year: 2022,
    },
    {
        name: "Ghost of Tsushima",
        rating: 83,
        year: 2020,
    },
    {
        name: "Death Stranding",
        rating: 86,
        year: 2019,
    },
    {
        name: "The Last of Us Part II",
        rating: 93,
        year: 2020,
    },
    {
        name: "Detroit: Become Human",
        rating: 80,
        year: 2018,
    },
    {
        name: "Life is Strange: True Colors",
        rating: 80,
        year: 2021,
    },
    {
        name: "What Remains of Edith Finch",
        rating: 88,
        year: 2017,
    },
];

// find the max rated game

const max_rated = games.reduce((best, current) => {
    if (current.rating > best.rating) {
        return current;
    }
    return best;
});

console.log(max_rated);

const gp = [2, 4, 8, 16];
const gp_series = gp.reduce((initial, current) => {
    return initial + current;
}, (initialValue = 1));
// add a initial value to start with instead of first element of array
console.log(gp_series);
