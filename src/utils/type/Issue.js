class Issue {
  constructor(user, updatedAt, number, title, comments) {
    this.user = user;
    this.updatedAt = updatedAt;
    this.number = number;
    this.title = title;
    this.comments = comments;
  }
}

export default Issue;
