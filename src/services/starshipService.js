const BASE_URL = `${import.meta.env.Swapi}/starships`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch starships.");
    }
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
export {
    index,
    
}