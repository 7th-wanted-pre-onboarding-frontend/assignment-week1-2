import client from './CustomAxios';

class IssueService {
  getIssueList() {
    return client.get(
      'repos/angular/angular-cli/issues?sort=comments&page=1&per_page=4&direction=desc'
    );
  }

  getIssue(id) {
    return client.get(`repos/angular/angular-cli/issues/${id}`);
  }
}

export default new IssueService();
