//Create a class Catalog that holds Media library 
class Catalog {
    constructor(type) {
        this._type = type;
    }

    get type() {
        return this._type;
    }
}

class Media extends Catalog {
    constructor (type, title) {
        super(type)
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    getAverageRating() {
        let total = this._ratings.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        })

        return total / this._ratings.length;
    }

    toggleCheckOutStatus() {
        return this._isCheckedOut != this._isCheckedOut;
    }

    addRating(value) {
        this._ratings.push(value);
    }
}

class Book extends Media {
    constructor(author, title,  pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    }

}

const historyOfEverything = new Book('Bill Bryson', 'A Short Story of Nearly Everything', 544);

const hobbit = new Book('J.R. Tolkien', 'Hobbit', 744);

historyOfEverything.toggleCheckOutStatus();

historyOfEverything.addRating(4);

historyOfEverything.addRating(5);

historyOfEverything.addRating(5);

historyOfEverything.getAverageRating();

console.log(historyOfEverything.getAverageRating());

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckOutStatus();

speed.addRating(1);

speed.addRating(1);

speed.addRating(5);

speed.getAverageRating();

console.log(speed.getAverageRating());

const newMedia = new Media();

console.log(newMedia.isCheckedOut);