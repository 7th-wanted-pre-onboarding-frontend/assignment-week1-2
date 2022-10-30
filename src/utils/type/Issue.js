class Issue {
  constructor(user, createdAt, number, title, comments, userImage, contents) {
    this.user = user;
    this.createdAt = createdAt;
    this.number = number;
    this.title = title;
    this.comments = comments;
    this.userImage = userImage;
    this.contents = contents;
  }
}

export default Issue;
