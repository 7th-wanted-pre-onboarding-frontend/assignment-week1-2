import client from './CustomAxios';

class IssueService {
  getIssueList(page) {
    return client.get(
      `repos/angular/angular-cli/issues?sort=comments&page=${page}&per_page=4&direction=desc`
    );
  }

  getIssue(id) {
    return client.get(`repos/angular/angular-cli/issues/${id}`);
  }
}

export default new IssueService();
