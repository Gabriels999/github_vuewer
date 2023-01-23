export const searchUsersAPI = {
  async fetchUsers(value) {
    const response = await fetch(`https://api.github.com/search/users?q=${value}`);
    const data = await response.json();
    return data.items;
  },
};

export const fetchRepos = {
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
    debugger;
    return responseList;
  },
};
