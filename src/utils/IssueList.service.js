class IssueListService {
  #list = [];

  push(item) {
    this.#list.push(item);
  }

  get list() {
    return this.#list;
  }
}

export default new IssueListService();
