class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`);
    this.name = "HttpError";
    this.response = response;
  }
}

async function loadJson(url) {
  try {
    const res = await fetch(url);

    if (res.status === 200) {
      return await res.json();
    } else {
      throw new HttpError(res.status);
    }
  } catch (error) {
    alert(`loadJson error: ${error}`);
  }
}

async function demoGithubUser() {
  let name = prompt("Введите логин?", "ViktorPalchynskyi");
  try {
    const user = loadJson(`https://api.github.com/users/${name}`);
    return user;
  } catch (error) {
    if (error instanceof HttpError && error.response.status == 404) {
      alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
      return demoGithubUser();
    } else {
      throw error;
    }
  }
}

demoGithubUser().then(res => alert(`Полное имя: ${res.name}.`));