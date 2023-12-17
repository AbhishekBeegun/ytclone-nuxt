export const VideoQuery = (query) => {
    const config = useRuntimeConfig();
    const BaseUrl = config.public.baseUrl;
    const APIKEY = config.public.apiKey;
    const APIHOST = config.public.apiHost;
  
    const url = `${BaseUrl}/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${query}`;
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': APIKEY,
        'X-RapidAPI-Host': APIHOST
      }
    };
  
    return { url, options };
  };