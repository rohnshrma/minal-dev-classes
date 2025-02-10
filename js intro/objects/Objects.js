function Book(name,author) {
    this.name=name;
}

Book.prototype.finished = function() {
    console.log(`Book ${this.name} is finished`)
}

function Magazine(name,author,category) {
    Book.call(this,name,author,category)
    this.category=category;
}

Magazine.prototype = Object.create(Book.prototype)
Magazine.prototype.constrcutor = Magazine

var mag = new Magazine("mag1","auth1","tech")
mag.finished()