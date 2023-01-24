function later(result) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(result);
    }, 500);
  });
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
    const response = [
      {
        name: ".gitignore",
        path: ".gitignore",
        sha: "1d74e21965c4f858f5f818a270e64e1bfad7d843",
        size: 9,
        url: "https://api.github.com/repos/launasci/desafiosdelogica/contents/.gitignore?ref=main",
        html_url: "https://github.com/launasci/desafiosdelogica/blob/main/.gitignore",
        git_url:
          "https://api.github.com/repos/launasci/desafiosdelogica/git/blobs/1d74e21965c4f858f5f818a270e64e1bfad7d843",
        download_url: "https://raw.githubusercontent.com/launasci/desafiosdelogica/main/.gitignore",
        type: "file",
        _links: {
          self: "https://api.github.com/repos/launasci/desafiosdelogica/contents/.gitignore?ref=main",
          git: "https://api.github.com/repos/launasci/desafiosdelogica/git/blobs/1d74e21965c4f858f5f818a270e64e1bfad7d843",
          html: "https://github.com/launasci/desafiosdelogica/blob/main/.gitignore",
        },
      },
      {
        name: "README.md",
        path: "README.md",
        sha: "0d65e3a37ab242b00bdbf654f1e7f0f2876e475f",
        size: 944,
        url: "https://api.github.com/repos/launasci/desafiosdelogica/contents/README.md?ref=main",
        html_url: "https://github.com/launasci/desafiosdelogica/blob/main/README.md",
        git_url:
          "https://api.github.com/repos/launasci/desafiosdelogica/git/blobs/0d65e3a37ab242b00bdbf654f1e7f0f2876e475f",
        download_url: "https://raw.githubusercontent.com/launasci/desafiosdelogica/main/README.md",
        type: "file",
        _links: {
          self: "https://api.github.com/repos/launasci/desafiosdelogica/contents/README.md?ref=main",
          git: "https://api.github.com/repos/launasci/desafiosdelogica/git/blobs/0d65e3a37ab242b00bdbf654f1e7f0f2876e475f",
          html: "https://github.com/launasci/desafiosdelogica/blob/main/README.md",
        },
      },
      {
        name: "leet-code",
        path: "leet-code",
        sha: "f218a9031a98ddee990850433580a9e0c8c1b766",
        size: 0,
        url: "https://api.github.com/repos/launasci/desafiosdelogica/contents/leet-code?ref=main",
        html_url: "https://github.com/launasci/desafiosdelogica/tree/main/leet-code",
        git_url:
          "https://api.github.com/repos/launasci/desafiosdelogica/git/trees/f218a9031a98ddee990850433580a9e0c8c1b766",
        download_url: null,
        type: "dir",
        _links: {
          self: "https://api.github.com/repos/launasci/desafiosdelogica/contents/leet-code?ref=main",
          git: "https://api.github.com/repos/launasci/desafiosdelogica/git/trees/f218a9031a98ddee990850433580a9e0c8c1b766",
          html: "https://github.com/launasci/desafiosdelogica/tree/main/leet-code",
        },
      },
    ];
    return later(response);
  },
  async fetchFileChildren(baseLink, filePath, fileType) {
    if (fileType == "file") {
      return [];
    }
    const data = [
      {
        name: ".gitignore",
        path: ".gitignore",
        sha: "1d74e21965c4f858f5f818a270e64e1bfad7d843",
        size: 9,
        url: "https://api.github.com/repos/launasci/desafiosdelogica/contents/.gitignore?ref=main",
        html_url: "https://github.com/launasci/desafiosdelogica/blob/main/.gitignore",
        git_url:
          "https://api.github.com/repos/launasci/desafiosdelogica/git/blobs/1d74e21965c4f858f5f818a270e64e1bfad7d843",
        download_url: "https://raw.githubusercontent.com/launasci/desafiosdelogica/main/.gitignore",
        type: "file",
        _links: {
          self: "https://api.github.com/repos/launasci/desafiosdelogica/contents/.gitignore?ref=main",
          git: "https://api.github.com/repos/launasci/desafiosdelogica/git/blobs/1d74e21965c4f858f5f818a270e64e1bfad7d843",
          html: "https://github.com/launasci/desafiosdelogica/blob/main/.gitignore",
        },
      },
    ];

    return later(data);
  },
};
