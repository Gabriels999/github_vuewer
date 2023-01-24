export const API = {
  async fetchUsers(value) {
    const response = await fetch(`https://api.github.com/search/users?q=${value}`);
    const data = await response.json();
    return data.items;
  },
  async userRepos(link) {
    let page = 1;
    let search = true;
    let responseList = [];
    while (search) {
      const response = await fetch(`${link}?page=${page}`);
      const data = await response.json();
      if (data.length > 0) {
        responseList = responseList.concat(data);
      } else {
        search = false;
      }
      page++;
    }
    return responseList;
  },
  async fetchRepoData(link) {
    const endString = link.lastIndexOf("/");
    link = link.slice(0, endString);
    const response = await fetch(link);
    return response;
  },
  async fetchFileChildren(baseLink, filePath) {
    const endString = baseLink.lastIndexOf("/");
    baseLink = baseLink.slice(0, endString);
    const response = await fetch(`${baseLink}/${filePath}`);
    const data = await response.json();
    return data;
  },
};
