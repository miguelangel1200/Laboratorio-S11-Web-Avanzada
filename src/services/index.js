const baseURL = "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json";

export const get = async (url) => {
  try {
    const response = await fetch(`${baseURL}`);
    const data = await response.json()
    // console.log(data.entries)
    return data.entries
  } catch (error) {
    console.log("error", error);
  }
};
