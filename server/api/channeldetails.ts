export default defineEventHandler((event) => {
    return {
        "kind": "youtube#channelListResponse",
        "pageInfo": {
          "totalResults": 1,
          "resultsPerPage": 5
        },
        "items": [
          {
            "kind": "youtube#channel",
            "id": "UCBVjMGOIkavEAhyqpxJ73Dw",
            "snippet": {
              "title": "Maroon 5",
              "description": "Welcome to the Maroon 5 official Youtube Channel. Head to our website for more info- www.maroon5.com",
              "customUrl": "@maroon5",
              "publishedAt": "2006-03-09T03:19:51Z",
              "thumbnails": {
                "default": {
                  "url": "https://yt3.ggpht.com/S_jTelpAHOdADumYkZAtwyLydEkqtv39s3T-Rmif0v1WCDb8pZit-Vlo43pR1jBEn0Tmcpkx=s88-c-k-c0x00ffffff-no-nd-rj",
                  "width": 88,
                  "height": 88
                },
                "medium": {
                  "url": "https://yt3.ggpht.com/S_jTelpAHOdADumYkZAtwyLydEkqtv39s3T-Rmif0v1WCDb8pZit-Vlo43pR1jBEn0Tmcpkx=s240-c-k-c0x00ffffff-no-nd-rj",
                  "width": 240,
                  "height": 240
                },
                "high": {
                  "url": "https://yt3.ggpht.com/S_jTelpAHOdADumYkZAtwyLydEkqtv39s3T-Rmif0v1WCDb8pZit-Vlo43pR1jBEn0Tmcpkx=s800-c-k-c0x00ffffff-no-nd-rj",
                  "width": 800,
                  "height": 800
                }
              },
              "localized": {
                "title": "Maroon 5",
                "description": "Welcome to the Maroon 5 official Youtube Channel. Head to our website for more info- www.maroon5.com"
              }
            },
            "contentDetails": {
              "relatedPlaylists": {
                "likes": "",
                "uploads": "UUBVjMGOIkavEAhyqpxJ73Dw"
              }
            },
            "statistics": {
              "viewCount": "23149869979",
              "subscriberCount": "36800000",
              "hiddenSubscriberCount": false,
              "videoCount": "175"
            },
            "brandingSettings": {
              "channel": {
                "title": "Maroon 5",
                "description": "Welcome to the Maroon 5 official Youtube Channel. Head to our website for more info- www.maroon5.com",
                "keywords": "\"maroon 5 Adam Levine\" \"James Valentine\" \"Jesse Carmichael\" \"Mickey Madden\" \"Matt Flynn\"",
                "unsubscribedTrailer": "Ntc2XNAGGMQ"
              },
              "image": {
                "bannerExternalUrl": "https://yt3.googleusercontent.com/w6R8mgf1yASGcr7ynzJBcUQNEORBwWd5QIQ51q20PHOJi2Wz32QNFB-trqn_4rawCL_j7Amn"
              }
            }
          }
        ]
      }
  })