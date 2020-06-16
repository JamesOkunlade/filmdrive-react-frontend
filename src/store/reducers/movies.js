import { REQUEST_MOVIES, RECEIVE_MOVIES, ERROR_REQUESTING } from "../actions";

const initialState = {
  movies: [
    {
      id: 18353,
      title: "2040",
      year: 2019,
      rating: 7.1,
      genres: ["Documentary"],
      synopsis:
        "2040 is an innovative feature documentary that looks to the future, but is vitally important NOW. Award-winning director Damon Gameau embarks on journey to explore what the future would look like by the year 2040 if we simply embraced the best solutions already available to us to improve our planet and shifted them into the mainstream. Structured as a visual letter to his 4-year-old daughter, Damon blends traditional documentary footage with dramatized sequences and high-end visual effects to create a vision board for his daughter and the planet.",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/2040_2019/medium-cover.jpg",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/BEB58F361BCA7D2E677EDF2ADE17B2F6C9872CAD",
          quality: "1080p",
          type: "bluray",
          size: "1.71 GB",
          date_uploaded: "2020-06-15 19:43:49",
        },
      ],
      date_uploaded: "2020-06-15 18:12:16",
    },
    {
      id: 17353,
      title: "Game of Thrones",
      year: 2019,
      rating: 7.1,
      genres: ["Documentary"],
      synopsis:
        "2040 is an innovative feature documentary that looks to the future, but is vitally important NOW. Award-winning director Damon Gameau embarks on journey to explore what the future would look like by the year 2040 if we simply embraced the best solutions already available to us to improve our planet and shifted them into the mainstream. Structured as a visual letter to his 4-year-old daughter, Damon blends traditional documentary footage with dramatized sequences and high-end visual effects to create a vision board for his daughter and the planet.",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/2040_2019/medium-cover.jpg",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/BEB58F361BCA7D2E677EDF2ADE17B2F6C9872CAD",
          quality: "1080p",
          type: "bluray",
          size: "1.71 GB",
          date_uploaded: "2020-06-15 19:43:49",
        },
      ],
      date_uploaded: "2020-06-15 18:12:16",
    },
    {
      id: 16353,
      title: "Peaky Blinders",
      year: 2019,
      rating: 7.1,
      genres: ["Documentary"],
      synopsis:
        "2040 is an innovative feature documentary that looks to the future, but is vitally important NOW. Award-winning director Damon Gameau embarks on journey to explore what the future would look like by the year 2040 if we simply embraced the best solutions already available to us to improve our planet and shifted them into the mainstream. Structured as a visual letter to his 4-year-old daughter, Damon blends traditional documentary footage with dramatized sequences and high-end visual effects to create a vision board for his daughter and the planet.",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/2040_2019/medium-cover.jpg",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/BEB58F361BCA7D2E677EDF2ADE17B2F6C9872CAD",
          quality: "1080p",
          type: "bluray",
          size: "1.71 GB",
          date_uploaded: "2020-06-15 19:43:49",
        },
      ],
      date_uploaded: "2020-06-15 18:12:16",
    },
    {
      id: 15353,
      title: "The Promise",
      year: 2019,
      rating: 7.1,
      genres: ["Documentary"],
      synopsis:
        "2040 is an innovative feature documentary that looks to the future, but is vitally important NOW. Award-winning director Damon Gameau embarks on journey to explore what the future would look like by the year 2040 if we simply embraced the best solutions already available to us to improve our planet and shifted them into the mainstream. Structured as a visual letter to his 4-year-old daughter, Damon blends traditional documentary footage with dramatized sequences and high-end visual effects to create a vision board for his daughter and the planet.",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/2040_2019/medium-cover.jpg",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/BEB58F361BCA7D2E677EDF2ADE17B2F6C9872CAD",
          quality: "1080p",
          type: "bluray",
          size: "1.71 GB",
          date_uploaded: "2020-06-15 19:43:49",
        },
      ],
      date_uploaded: "2020-06-15 18:12:16",
    },
    {
      id: 14353,
      title: "Insecure",
      year: 2019,
      rating: 7.1,
      genres: ["Documentary"],
      synopsis:
        "2040 is an innovative feature documentary that looks to the future, but is vitally important NOW. Award-winning director Damon Gameau embarks on journey to explore what the future would look like by the year 2040 if we simply embraced the best solutions already available to us to improve our planet and shifted them into the mainstream. Structured as a visual letter to his 4-year-old daughter, Damon blends traditional documentary footage with dramatized sequences and high-end visual effects to create a vision board for his daughter and the planet.",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/2040_2019/medium-cover.jpg",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/BEB58F361BCA7D2E677EDF2ADE17B2F6C9872CAD",
          quality: "1080p",
          type: "bluray",
          size: "1.71 GB",
          date_uploaded: "2020-06-15 19:43:49",
        },
      ],
      date_uploaded: "2020-06-15 18:12:16",
    },
    {
      id: 13353,
      title: "Suits",
      year: 2019,
      rating: 7.1,
      genres: ["Documentary"],
      synopsis:
        "2040 is an innovative feature documentary that looks to the future, but is vitally important NOW. Award-winning director Damon Gameau embarks on journey to explore what the future would look like by the year 2040 if we simply embraced the best solutions already available to us to improve our planet and shifted them into the mainstream. Structured as a visual letter to his 4-year-old daughter, Damon blends traditional documentary footage with dramatized sequences and high-end visual effects to create a vision board for his daughter and the planet.",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/2040_2019/medium-cover.jpg",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/BEB58F361BCA7D2E677EDF2ADE17B2F6C9872CAD",
          quality: "1080p",
          type: "bluray",
          size: "1.71 GB",
          date_uploaded: "2020-06-15 19:43:49",
        },
      ],
      date_uploaded: "2020-06-15 18:12:16",
    },
    {
      id: 12353,
      title: "Friends",
      year: 2019,
      rating: 7.1,
      genres: ["Documentary"],
      synopsis:
        "2040 is an innovative feature documentary that looks to the future, but is vitally important NOW. Award-winning director Damon Gameau embarks on journey to explore what the future would look like by the year 2040 if we simply embraced the best solutions already available to us to improve our planet and shifted them into the mainstream. Structured as a visual letter to his 4-year-old daughter, Damon blends traditional documentary footage with dramatized sequences and high-end visual effects to create a vision board for his daughter and the planet.",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/2040_2019/medium-cover.jpg",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/BEB58F361BCA7D2E677EDF2ADE17B2F6C9872CAD",
          quality: "1080p",
          type: "bluray",
          size: "1.71 GB",
          date_uploaded: "2020-06-15 19:43:49",
        },
      ],
      date_uploaded: "2020-06-15 18:12:16",
    },
    {
      id: 11353,
      title: "Big Bang Theory",
      year: 2019,
      rating: 7.1,
      genres: ["Documentary"],
      synopsis:
        "2040 is an innovative feature documentary that looks to the future, but is vitally important NOW. Award-winning director Damon Gameau embarks on journey to explore what the future would look like by the year 2040 if we simply embraced the best solutions already available to us to improve our planet and shifted them into the mainstream. Structured as a visual letter to his 4-year-old daughter, Damon blends traditional documentary footage with dramatized sequences and high-end visual effects to create a vision board for his daughter and the planet.",
      medium_cover_image:
        "https://yts.mx/assets/images/movies/2040_2019/medium-cover.jpg",
      torrents: [
        {
          url:
            "https://yts.mx/torrent/download/BEB58F361BCA7D2E677EDF2ADE17B2F6C9872CAD",
          quality: "1080p",
          type: "bluray",
          size: "1.71 GB",
          date_uploaded: "2020-06-15 19:43:49",
        },
      ],
      date_uploaded: "2020-06-15 18:12:16",
    },
  ],
  isFetching: false,
  error: null,
  lastUpdated: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MOVIES:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        isFetching: false,
        movies: action.movies,
        lastUpdated: action.receivdedAt,
      });
    case ERROR_REQUESTING:
        return Object.assign({}, state, { isFetching: false, error: action.error } )
    default:
      return state;
  }
};

export default reducer;
