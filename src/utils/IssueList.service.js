import Issue from './type/Issue';

class IssueListService {
  #list = [];

  get list() {
    return this.#list;
  }

  push(issue) {
    if (issue instanceof Issue) {
      this.#list.push(issue);
    } else {
      throw new Error('이슈타입이 아닙니다.');
    }
  }
}

export default new IssueListService();
