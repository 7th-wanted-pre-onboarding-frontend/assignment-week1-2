import client from './CustomAxios';

class IssueService {
  getIssueList(page = null) {
    return client.get(
      `repos/angular/angular-cli/issues?sort=comments&page=${
        page || 1
      }&per_page=4&direction=desc`
    );
  }

  getIssue(id) {
    return client.get(`repos/angular/angular-cli/issues/${id}`);
  }
}

export default new IssueService();
