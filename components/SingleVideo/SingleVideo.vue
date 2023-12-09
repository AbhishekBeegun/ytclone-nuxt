<script setup>

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const {data} = props ; 

const isFullScreen = ref(false);

const toggleFullScreen = () => {
  isFullScreen.value = !isFullScreen.value;
};


const recommendedvideos = [
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "bbZm-NdJB5M"
      },
      "snippet": {
        "publishedAt": "2023-09-09T00:00:00Z",
        "channelId": "UCx390thQW_2dct0Pt8-Mn-w",
        "title": "You Broke Me First ♫ Sad songs playlist for broken hearts ~ Depressing Songs That Will Make You Cry",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/bbZm-NdJB5M/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/bbZm-NdJB5M/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/bbZm-NdJB5M/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "First Love",
        "liveBroadcastContent": "none",
        "publishTime": "2023-09-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "YwgNpObouB0"
      },
      "snippet": {
        "publishedAt": "2020-12-09T00:00:00Z",
        "channelId": "UCpmD3iT-8TQzRuygIiS9bAw",
        "title": "Tate McRae - you broke me first",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YwgNpObouB0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YwgNpObouB0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YwgNpObouB0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Conor Maynard",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "DPPDCw_TQmg"
      },
      "snippet": {
        "publishedAt": "2020-12-09T00:00:00Z",
        "channelId": "UCQh6LB206jF3JxpCDD-fp5Q",
        "title": "Tate McRae - friends don't look at friends that way (Official Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DPPDCw_TQmg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DPPDCw_TQmg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DPPDCw_TQmg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Tate McRae",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "eXA3uMdEt0c"
      },
      "snippet": {
        "publishedAt": "2021-12-09T00:00:00Z",
        "channelId": "UCuAI6jn9Rhpk6q8gqIYgvJQ",
        "title": "Tate McRae - you broke me first (Lyrics) 🎵1 Hour",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/eXA3uMdEt0c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/eXA3uMdEt0c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/eXA3uMdEt0c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "SoundForest 🎵",
        "liveBroadcastContent": "none",
        "publishTime": "2021-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "1K_--gz5jhY"
      },
      "snippet": {
        "publishedAt": "2023-11-09T00:00:00Z",
        "channelId": "UCQh6LB206jF3JxpCDD-fp5Q",
        "title": "Tate McRae - greedy (Official Lyric Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/1K_--gz5jhY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/1K_--gz5jhY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/1K_--gz5jhY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Tate McRae",
        "liveBroadcastContent": "none",
        "publishTime": "2023-11-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "4fqwVBuunxY"
      },
      "snippet": {
        "publishedAt": "2016-12-09T00:00:00Z",
        "channelId": "UCRWkUp26A4TFJQrjhkn-Vuw",
        "title": "Astrid S - Hurts So Good",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4fqwVBuunxY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4fqwVBuunxY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4fqwVBuunxY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Astrid S",
        "liveBroadcastContent": "none",
        "publishTime": "2016-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "50VNCymT-Cs"
      },
      "snippet": {
        "publishedAt": "2018-12-09T00:00:00Z",
        "channelId": "UCtWBCzqucZXq0M8jsqunM0g",
        "title": "Alec Benjamin - Let Me Down Slowly [Official Music Video]",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/50VNCymT-Cs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/50VNCymT-Cs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/50VNCymT-Cs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Alec Benjamin",
        "liveBroadcastContent": "none",
        "publishTime": "2018-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "UrGS_6_HglU"
      },
      "snippet": {
        "publishedAt": "2020-12-09T00:00:00Z",
        "channelId": "UCQam2rlpwMx1YlvBN8PSS2A",
        "title": "Zoe Wees - Control (Official Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UrGS_6_HglU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UrGS_6_HglU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UrGS_6_HglU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Zoe Wees",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "p1e-nSWNn2g"
      },
      "snippet": {
        "publishedAt": "2023-11-25T00:00:00Z",
        "channelId": "UCv0tsUuId-2CtUS9Li5izzQ",
        "title": "Billie Eilish Playlist - Billie Eilish Top Hits - Billie Eilish The Most Popular Songs",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/p1e-nSWNn2g/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/p1e-nSWNn2g/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/p1e-nSWNn2g/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Top_Lyrics",
        "liveBroadcastContent": "none",
        "publishTime": "2023-11-25T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "uS_y_65CcpA"
      },
      "snippet": {
        "publishedAt": "2022-12-09T00:00:00Z",
        "channelId": "UCQh6LB206jF3JxpCDD-fp5Q",
        "title": "Tate McRae - she's all i wanna be (Official Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/uS_y_65CcpA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/uS_y_65CcpA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/uS_y_65CcpA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Tate McRae",
        "liveBroadcastContent": "none",
        "publishTime": "2022-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "8AtiHCDGZ8c"
      },
      "snippet": {
        "publishedAt": "2023-11-09T00:00:00Z",
        "channelId": "UCQh6LB206jF3JxpCDD-fp5Q",
        "title": "Tate McRae - greedy (Official Audio)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/8AtiHCDGZ8c/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/8AtiHCDGZ8c/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/8AtiHCDGZ8c/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Tate McRae",
        "liveBroadcastContent": "none",
        "publishTime": "2023-11-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "GeWo6zG53Mc"
      },
      "snippet": {
        "publishedAt": "2023-07-09T00:00:00Z",
        "channelId": "UC3h81ZSpLOVjUv7Cp8-V2_w",
        "title": "tate mcrae | playlist",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/GeWo6zG53Mc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/GeWo6zG53Mc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/GeWo6zG53Mc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Kristina Ewans",
        "liveBroadcastContent": "none",
        "publishTime": "2023-07-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "d2GOjxA8HQ4"
      },
      "snippet": {
        "publishedAt": "2023-07-09T00:00:00Z",
        "channelId": "UCvfRnJ72k-PrCzUmDdeaX-Q",
        "title": "Paloma Faith - Only Love Can Hurt Like This (Lyrics)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/d2GOjxA8HQ4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/d2GOjxA8HQ4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/d2GOjxA8HQ4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "7clouds Country",
        "liveBroadcastContent": "none",
        "publishTime": "2023-07-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "4lD0-1Uplms"
      },
      "snippet": {
        "publishedAt": "2023-03-09T00:00:00Z",
        "channelId": "UCa5Ms_IBIxzAexW__370eHQ",
        "title": "Loreen - Tattoo (Official Lyric Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/4lD0-1Uplms/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/4lD0-1Uplms/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/4lD0-1Uplms/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Loreen",
        "liveBroadcastContent": "none",
        "publishTime": "2023-03-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "zABLecsR5UE"
      },
      "snippet": {
        "publishedAt": "2019-12-09T00:00:00Z",
        "channelId": "UCveFkLdSOUsGwMJEgedO9dQ",
        "title": "Lewis Capaldi - Someone You Loved",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zABLecsR5UE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zABLecsR5UE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zABLecsR5UE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Lewis Capaldi",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "BiQIc7fG9pA"
      },
      "snippet": {
        "publishedAt": "2016-12-09T00:00:00Z",
        "channelId": "UCZGHYE5T-1Q4AVq3lu5V0yQ",
        "title": "gnash - i hate u, i love u ft. olivia o'brien (music video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BiQIc7fG9pA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BiQIc7fG9pA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BiQIc7fG9pA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "gnash",
        "liveBroadcastContent": "none",
        "publishTime": "2016-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "Qzc_aX8c8g4"
      },
      "snippet": {
        "publishedAt": "2019-12-09T00:00:00Z",
        "channelId": "UCZ2nKwA5u9zhtF9LfCjXJ9g",
        "title": "Sasha Alex Sloan - Dancing With Your Ghost (Lyric Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Qzc_aX8c8g4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Qzc_aX8c8g4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Qzc_aX8c8g4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Sasha Alex Sloan",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "_emUu0cyoTE"
      },
      "snippet": {
        "publishedAt": "2023-08-09T00:00:00Z",
        "channelId": "UCQqEC0LPfvgFCP8ixrCqADA",
        "title": "G-Eazy & Halsey - Him & I (Lyrics)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/_emUu0cyoTE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/_emUu0cyoTE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/_emUu0cyoTE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "7clouds Rock",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "HG_HRjKXZB0"
      },
      "snippet": {
        "publishedAt": "2023-02-09T00:00:00Z",
        "channelId": "UCx390thQW_2dct0Pt8-Mn-w",
        "title": "You Broke Me First ♫ Sad songs playlist for broken hearts ~ Depressing Songs That Will Make You Cry",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HG_HRjKXZB0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HG_HRjKXZB0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HG_HRjKXZB0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "First Love",
        "liveBroadcastContent": "none",
        "publishTime": "2023-02-09T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "QXzC2eiHBG8"
      },
      "snippet": {
        "publishedAt": "2020-12-09T00:00:00Z",
        "channelId": "UCGY2E83PapX47mviakM_IpQ",
        "title": "Tate McRae - you broke me first (Lyrics)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/QXzC2eiHBG8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/QXzC2eiHBG8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/QXzC2eiHBG8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Aminium Music",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-09T00:00:00Z"
      }
    }
  ]

const formatNumber = (number) => {
  if (typeof number === 'number') {
    return number.toLocaleString('en-US'); 
  }
  return number; 
};
</script>

<template>
  <div class="flex">

    <div class="w-3/4">
      <div class="md:h-[350px] lg:h-[500px] rounded-xl">
        <NuxtImg :src="data[0].snippet.thumbnails.maxres.url" class="w-full h-full object-cover rounded-lg" />
      </div>

      <div class="py-2">
        <h2 class="text-xl font-semibold">{{data[0].snippet.title}}</h2>
        
        <div class="flex justify-between items-center py-1 pb-2">

          <div class="flex gap-4 items-center">
            <NuxtLink :to="`/channel/${data[0].snippet.channelId}`" class="mt-1">
              <UAvatar
                size="lg"
                src="https://avatars.githubusercontent.com/u/739984?v=4"
                alt="Avatar"
              />
            </NuxtLink>

            <NuxtLink :to="`/channel/${data[0].snippet.channelId}`" class="">
              <p class="text-lg font-semibold">{{data[0].snippet.channelTitle}}</p>
              <p class="text-xs text-gray-300">125K subscribers</p>
            </NuxtLink>

            <div class="ml-3">
              <button class="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-purple-600 to-red-500 group-hover:from-purple-600 group-hover:to-red-500 hover:text-white dark:text-white focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
              <span class="relative rounded-full px-5 py-1 transition-all ease-in duration-75 bg-white dark:bg-gray-900 group-hover:bg-opacity-0">
                Subscribe
              </span>
             </button>
            </div>

          </div>

          <div class="flex gap-3">
            <div class="flex items-center dark:bg-[#202326] px-4 py-2 rounded-full">
              <button class="flex item-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/></svg>

                <span class="ml-2 font-semibold whitespace-nowrap"> {{ data[0].statistics.likeCount}}</span>
              </button>

              <button class="ml-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M1 16v-4.4L4.65 3H17v13l-7 7l-1.85-1.85L9.45 16H1ZM15 5H6l-3 7v2h9l-1.35 5.5L15 15.15V5Zm0 10.15V5v10.15Zm2 .85v-2h3V5h-3V3h5v13h-5Z"/></svg>
              </button>
            </div>

            <div class=" dark:bg-[#202326] px-4 py-2 rounded-full">
              <button class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14 5v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7l-7-7m2 4.83L18.17 12L16 14.17V12.9h-2c-2.07 0-3.93.38-5.66.95c1.4-1.39 3.2-2.48 5.94-2.85l1.72-.27v-.9Z"/></svg>

                <span class="ml-2">Share</span>
              </button>
            </div>
  
          </div>

        </div>

        <div class="bg-gray-100 dark:bg-[#202326] h-32 rounded-xl py-2 px-4 overflow-scroll slider">
          <p><span>{{data[0].statistics.viewCount}}</span> views 14 Jul 2022</p>

          <div class="py-4 text-sm " v-html="data[0].snippet.description"></div>
        </div>


        <div class="py-2">
          <p class="text-xl font-bold">{{data[0].statistics.commentCount}} Comments</p>

          <p class="text-xs pt-10">Comments are expensive to call</p>
            
        </div>

      </div>
    </div>
      
    <div class="pl-4 w-1/4">
      <RecommendedVideos v-for="recommendedvideo of recommendedvideos" :data="recommendedvideo"/>       
    </div>
  </div>
</template>

  <style scoped>
  .shadow-lg {
    box-shadow: 0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06);
  }
  .shadow-xl {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.2), 0 0 01px rgba(255, 255, 255, 0.01), 0 0 10px rgba(255, 255, 255, 0.1);
  }

  .slider::-webkit-scrollbar {
  display: none;
  }
  </style>
  