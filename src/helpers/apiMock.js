function later(result) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(result);
    }, 500);
  });
}

function createFileField(filename) {
  const startString = filename.lastIndexOf(".");
  return filename.substring(startString + 1);
}

export const API = {
  async fetchUsers(value) {
    const response = [
      {
        login: "gabriels999",
        avatar_url:
          "https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg",
      },
      {
        login: "gabriels",
        avatar_url:
          "https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg",
      },
      {
        login: "gabienjoy",
        avatar_url:
          "https://s2.glbimg.com/ush044sejAV2Tzisq3z_j0STVtM=/e.glbimg.com/og/ed/f/original/2022/10/06/mario_bros.jpg",
      },
    ];
    return later(response);
  },
  async userRepos(link) {
    let responseList = [];
    responseList = [{ name: "Django" }, { name: "Vue" }];
    return later(responseList);
  },
  async fetchRepoData(link) {
    const repoFiles = [
      {
        name: "a.py",
        path: "a.py",
        url: "https://api.github.com/repos/launasci/desafiosdelogica/contents/.gitignore?ref=main",
        download_url: "https://raw.githubusercontent.com/launasci/desafiosdelogica/main/.gitignore",
        type: "file",
      },
      {
        name: "README.md",
        path: "README.md",
        url: "https://api.github.com/repos/launasci/desafiosdelogica/contents/README.md?ref=main",
        download_url: "https://raw.githubusercontent.com/launasci/desafiosdelogica/main/README.md",
        type: "file",
      },
      {
        name: "leet-code",
        path: "leet-code",
        url: "https://api.github.com/repos/launasci/desafiosdelogica/contents/leet-code?ref=main",
        download_url: null,
        type: "dir",
      },
    ];
    const responseList = [];
    for (const file of repoFiles) {
      if (file.type == "file") {
        file["file"] = createFileField(file.name);
      }
      responseList.push(file);
    }
    return later(responseList);
  },
  async fetchFileContent(path) {
    const text = "# meutodo\n\n## Project setup\n\nnpm install\n";
    const name = "READme.md";
    let data = {};
    data["content"] = text;
    data["name"] = name;
    return later(data);
  },
};
