console.log('here');

const getUsers = async (names) => {
  const promiseArr = [];

  for (const name of names) {
    const promise = fetch(`https://api.github.com/users/${name}`).then(
      (successResponse) => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      (failResponse) => {
        return null;
      }
    );

    promiseArr.push(promise);
  }

  try {
    const res = await Promise.all(promiseArr);

    return res;
  } catch (error) {
    throw new Error(`Request error ${error}`);
  }
};

(async () => {
    const tmp = await getUsers(['ViktorPalchynskyi', 'js-tasks-ru']);
    console.log(tmp);
})();