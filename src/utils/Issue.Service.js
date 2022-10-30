import client from './CustomAxios';

class IssueService {
  getIssue() {
    return client.get(
      'repos/angular/angular-cli/issues?sort=comments&page=1&per_page=4&direction=desc'
    );
  }

  getIssueList(id) {
    return client.get(`repos/angular/angular-cli/issues/${id}`);
  }
}

export default new IssueService();
