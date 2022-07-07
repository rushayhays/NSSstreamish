const baseUrl = '/api/video';
const commentsUrl ='/api/Video/GetWithComments';

export const getAllVideos = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
};

export const getAllWithComments = () => {
    return fetch(commentsUrl)
      .then((res) => res.json())
  };

export const addVideo = (video) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(video),
  });
};
