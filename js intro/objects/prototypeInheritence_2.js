function Book(title, author) {
  this.title = title;
  this.author = author;
}

Book.prototype.displayTitle = function () {
  // note the syntax of how the function is declared
  console.log(`Title is :: ${this.title}`);
};

function Magazine(title, author, issue) {
  Book.call(this, title, author);
  this.issue = issue;
}

Magazine.prototype = Object.create(Book.prototype);
Magazine.prototype.constructor = Magazine;
Magazine.prototype.displayIssue = function () {
  console.log(`Magazine issue is :: ${this.issue}`);
};

var m1 = new Magazine("title1", "author1", "issue1");
console.log(m1);
m1.displayTitle();
m1.displayIssue();
