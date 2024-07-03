const API_KEY = "1b3939ab-8e4f-40ad-8039-c6e87c8a9c2e";

//get all the matches
export const getMatches = () => {
  const url = `https://api.cricapi.com/v1/currentMatches?apikey=${API_KEY}` ;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("Error:", error));
}; 

