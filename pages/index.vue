<script setup>
const items = [
{
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "SlPhMPnQ58k"
      },
      "snippet": {
        "publishedAt": "2019-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Memories (Official Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/SlPhMPnQ58k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/SlPhMPnQ58k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/SlPhMPnQ58k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "Y7ix6RITXM0"
      },
      "snippet": {
        "publishedAt": "2014-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Maps (Lyric Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Y7ix6RITXM0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Y7ix6RITXM0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Y7ix6RITXM0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2014-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "OtihpgTWzFU"
      },
      "snippet": {
        "publishedAt": "2023-07-08T00:00:00Z",
        "channelId": "UCYQmoVHnumO1Y8UyHF4R6wQ",
        "title": "Top 40 Songs This Week 2023 Playlist 📣 Mix Top Hits 2023",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/OtihpgTWzFU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/OtihpgTWzFU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/OtihpgTWzFU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Music Mix Crushers",
        "liveBroadcastContent": "none",
        "publishTime": "2023-07-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "hmUyEDG7Jy0"
      },
      "snippet": {
        "publishedAt": "2021-12-08T00:00:00Z",
        "channelId": "UCEdvpU2pFRCVqU6yIPyTpMQ",
        "title": "Marshmello x Jonas Brothers - Leave Before You Love Me (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/hmUyEDG7Jy0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/hmUyEDG7Jy0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/hmUyEDG7Jy0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Marshmello",
        "liveBroadcastContent": "none",
        "publishTime": "2021-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "Womdi-aPeNQ"
      },
      "snippet": {
        "publishedAt": "2023-11-30T00:00:00Z",
        "channelId": "UCHRpUsOON5QRphNv1tqH0hw",
        "title": "Memories(Lyrics) - Maroon 5",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Womdi-aPeNQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Womdi-aPeNQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Womdi-aPeNQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Waveslyrics",
        "liveBroadcastContent": "none",
        "publishTime": "2023-11-30T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "BSzSn-PRdtI"
      },
      "snippet": {
        "publishedAt": "2021-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Beautiful Mistakes ft. Megan Thee Stallion (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BSzSn-PRdtI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BSzSn-PRdtI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BSzSn-PRdtI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2021-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "cBVGlBWQzuc"
      },
      "snippet": {
        "publishedAt": "2018-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Girls Like You ft. Cardi B (Volume 2) (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/cBVGlBWQzuc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/cBVGlBWQzuc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/cBVGlBWQzuc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2018-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "f2LHyzrYOq0"
      },
      "snippet": {
        "publishedAt": "2023-07-08T00:00:00Z",
        "channelId": "UCaElsQWb_LmECweRB5UQP2Q",
        "title": "Alan Walker, Coldplay, Maroon 5, Selena Gomez , Miley Cyrus Cover🪴 Summer Music Mix 2023",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/f2LHyzrYOq0/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/f2LHyzrYOq0/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/f2LHyzrYOq0/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Deep Bass",
        "liveBroadcastContent": "none",
        "publishTime": "2023-07-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "6GUm5g8SG4o"
      },
      "snippet": {
        "publishedAt": "2015-12-08T00:00:00Z",
        "channelId": "UCnDr74LN-7WUqgWwaTr2JUA",
        "title": "R. City - Locked Away ft. Adam Levine",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/6GUm5g8SG4o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/6GUm5g8SG4o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/6GUm5g8SG4o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Rock City",
        "liveBroadcastContent": "none",
        "publishTime": "2015-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "mj0XInqZMHY"
      },
      "snippet": {
        "publishedAt": "2019-12-08T00:00:00Z",
        "channelId": "UC0C-w0YjGpqDXGB8IHb662A",
        "title": "Ed Sheeran - Beautiful People (feat. Khalid) [Official Music Video]",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/mj0XInqZMHY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/mj0XInqZMHY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/mj0XInqZMHY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ed Sheeran",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "ADmCFmYLns4"
      },
      "snippet": {
        "publishedAt": "2011-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Never Gonna Leave This Bed (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ADmCFmYLns4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ADmCFmYLns4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ADmCFmYLns4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2011-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "7BJ3ZXpserc"
      },
      "snippet": {
        "publishedAt": "2014-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Animals (Lyric Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/7BJ3ZXpserc/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/7BJ3ZXpserc/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/7BJ3ZXpserc/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2014-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "WakQ6W_RtwE"
      },
      "snippet": {
        "publishedAt": "2023-07-08T00:00:00Z",
        "channelId": "UCYQmoVHnumO1Y8UyHF4R6wQ",
        "title": "Top 40 Songs This Week 2023 Playlist 📻 Top Songs 2023 Mix (Hits 2023)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/WakQ6W_RtwE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/WakQ6W_RtwE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/WakQ6W_RtwE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Music Mix Crushers",
        "liveBroadcastContent": "none",
        "publishTime": "2023-07-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "miO1Pn85wic"
      },
      "snippet": {
        "publishedAt": "2023-03-08T00:00:00Z",
        "channelId": "UCQXOl1Fk7wf2QQwdDoXkbNg",
        "title": "Maroon 5 - Memories (Lyrics)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/miO1Pn85wic/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/miO1Pn85wic/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/miO1Pn85wic/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Barem Music",
        "liveBroadcastContent": "none",
        "publishTime": "2023-03-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "fwK7ggA3-bU"
      },
      "snippet": {
        "publishedAt": "2012-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - One More Night (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fwK7ggA3-bU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fwK7ggA3-bU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fwK7ggA3-bU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2012-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "y83x7MgzWOA"
      },
      "snippet": {
        "publishedAt": "2019-12-08T00:00:00Z",
        "channelId": "UC0C-w0YjGpqDXGB8IHb662A",
        "title": "Ed Sheeran & Justin Bieber - I Don't Care [Official Music Video]",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/y83x7MgzWOA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/y83x7MgzWOA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/y83x7MgzWOA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ed Sheeran",
        "liveBroadcastContent": "none",
        "publishTime": "2019-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "xj6fHiF8Osg"
      },
      "snippet": {
        "publishedAt": "2014-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Maps (Audio)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/xj6fHiF8Osg/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/xj6fHiF8Osg/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/xj6fHiF8Osg/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2014-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "UXw44kmLtSU"
      },
      "snippet": {
        "publishedAt": "2022-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Memories",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/UXw44kmLtSU/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/UXw44kmLtSU/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/UXw44kmLtSU/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2022-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "aJOTlE1K90k"
      },
      "snippet": {
        "publishedAt": "2018-12-08T00:00:00Z",
        "channelId": "UCBVjMGOIkavEAhyqpxJ73Dw",
        "title": "Maroon 5 - Girls Like You ft. Cardi B (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/aJOTlE1K90k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/aJOTlE1K90k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/aJOTlE1K90k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Maroon 5",
        "liveBroadcastContent": "none",
        "publishTime": "2018-12-08T00:00:00Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "id": {
        "kind": "youtube#video",
        "videoId": "ePao0cTGG-o"
      },
      "snippet": {
        "publishedAt": "2020-12-08T00:00:00Z",
        "channelId": "UCEdvpU2pFRCVqU6yIPyTpMQ",
        "title": "Marshmello & Halsey - Be Kind (Official Music Video)",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ePao0cTGG-o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ePao0cTGG-o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ePao0cTGG-o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Marshmello",
        "liveBroadcastContent": "none",
        "publishTime": "2020-12-08T00:00:00Z"
      }
    }
];

</script>

<template>
    <Navbar/>
    <div class="pt-20 md:px-4 lg:px-20"> 
        <HomeCategoSlider />
     <div class="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-3">
        <MainCard v-for="(item, index) in items" :key="index" :data="item" />
        <MainCardSkeleton v-for="index in 10" />
     </div>
    </div>
</template>

