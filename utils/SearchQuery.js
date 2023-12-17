export const SearchQuery = (query) => {
  const config = useRuntimeConfig();
  const BaseUrl = config.public.baseUrl;
  const APIKEY = config.public.apiKey;
  const APIHOST = config.public.apiHost;

  const url = `${BaseUrl}/search?q=${query}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': APIKEY,
      'X-RapidAPI-Host': APIHOST
    }
  };

  return { url, options };
};