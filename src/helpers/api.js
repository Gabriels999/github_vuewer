export const searchUsersAPI = {
  async fetchUsers(value) {
    const response = await fetch(`https://api.github.com/search/users?q=${value}`);
    const data = await response.json();
    return data.items;
  },
};
