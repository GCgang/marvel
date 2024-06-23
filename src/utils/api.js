const BASE_URL = 'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters'

export const getCharactersListUrl = () => `${BASE_URL}?limit=50&orderBy=modified&series=24229,1058,2023`;
export const getCharacterDetailsUrl = (id) => `${BASE_URL}/${id}`;
export const getCharacterComicsUrl = (id) => `${BASE_URL}/${id}/comics`;
export const getCharacterSeriesUrl = (id) => `${BASE_URL}/${id}/series`;
export const getCharacterEventsUrl = (id) => `${BASE_URL}/${id}/events`;
export const getCharacterStoriesUrl = (id) => `${BASE_URL}/${id}/stories`;

export const getHomeMainBackgroundImage = () => 'https://cdn.marvel.com/content/1x/characters_art_mas_dsk_01.jpg';