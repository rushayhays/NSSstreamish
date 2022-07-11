const baseUrl = '/api/UserProfile';


export const getAllVideosByCertainUser = (id) => {
  return fetch(`${baseUrl}/GetWithVideos${id}`)
    .then((res) => res.json())
};


