function treatRepoLink(path) {
  const endString = path.lastIndexOf("/");
  return path.slice(0, endString);
}

function createFileField(filename) {
  const startString = filename.lastIndexOf(".");
  if (startString == -1) return "dir";
  return filename.substring(startString + 1);
}

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
  async fetchRepoData(path) {
    const treatedPath = treatRepoLink(path);
    const response = await fetch(treatedPath);
    const repoFiles = await response.json();
    let responseList = [];
    for (const file of repoFiles) {
      if (file.type == "dir") {
        const aux = await fetch(`${treatedPath}/${file.path}`);
        const data = await aux.json();
        for (const child of data) {
          child["file"] = createFileField(child.name);
        }
        file["children"] = data;
      } else {
        file["file"] = createFileField(file.name);
      }
      responseList.push(file);
    }
    return responseList;
  },
};
