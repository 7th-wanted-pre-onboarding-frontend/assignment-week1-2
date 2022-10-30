class Issue {
  constructor(user, createdAt, number, title, comments) {
    this.user = user;
    this.createdAt = createdAt;
    this.number = number;
    this.title = title;
    this.comments = comments;
  }
}

export default Issue;
