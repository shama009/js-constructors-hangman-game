var movies = require("./movies.js");

var Word = function (index) {
    this.index = index;
    this.getWord = function () {
        if (this.index === movies.length) {
            this.index = 0;
        }
        this.movie = movies[this.index].trim();
        this.underscore = "";
        for (var i = 0; i < this.movie.length; i++) {
            if (this.movie[i] != " ") {
                this.underscore = this.underscore + "_ ";
            } else {
                this.underscore = this.underscore + "  ";
            }
        }

        console.log(this.underscore);
    }
}

module.exports = Word;