//Milestone 2
export default class Task {
    constructor(id, title, completed) {
      this.id = id;
      this.title = title;
      this.completed = completed;
    }
  
    toggleStatus() {
      if (this.completed) {
        this.completed = false;
      } else {
        this.completed = true;
      }
    }
  }