export const RecommendedVideosQuery = (query) => {
    const config = useRuntimeConfig();
    const BaseUrl = config.public.baseUrl;
    const APIKEY = config.public.apiKey;
    const APIHOST = config.public.apiHost;
  
    const url = `${BaseUrl}/search?relatedToVideoId=${query}&part=id%2Csnippet&type=video&maxResults=20`;
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': APIHOST
      }
    };
  
    return { url, options };
  };