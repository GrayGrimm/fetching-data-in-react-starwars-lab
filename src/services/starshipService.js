const BASE_URL = "https://swapi.info/api/starships";

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export { index };
