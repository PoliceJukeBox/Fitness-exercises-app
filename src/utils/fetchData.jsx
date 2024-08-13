export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '96b6663211mshbdf966c91e9fb97p1d8189jsna910a8a1e855',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}