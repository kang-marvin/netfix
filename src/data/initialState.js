export const initialState = {
  /** The main current videos */
  advertisedVideo: {
    id: '',
    title: '',
    description: '',
    rating: '',
    releaseDate: '',
  },

  /** Data structure of Original Content (panel) */
  originalsVideos: [
    {
      id: '',
      isSeasonedShow: true ,        /** Boolean value */
      currentWatchingProgress: {
        season: '',                 /** Both season and episode is nil if hasSeasons returns false */
        episode: '',
        pausedAt: ''                /** nil or 0 if not started */
      },
      displayImage: ''
    }
  ],

  /** Data Structure of Categories Component */
  availableCategories: [
    {
      categoryID: '',
      displayName: '',
      videosIDs: []
    },
  ],

  /** Data structure of a Video inside a Categories Component */
  videosByCategory: {
    categoryID: [
      {
        videoID: '',
        videoName: '',
        videoRating: '',
        videoProfileImage: '',
        userVideoMatchScore: '',
        topCasts: [{ name: '' }, { name: '' }, { name: '' }]
      }
    ]
  },

  /** Data Structure of video after being expaned in Category Component */
  videoDetails: {
    videoOverview: {
      videoID: '',
      videoName: '',
      videoRating: '',
      videoDescription: '',
      videoProfileImage: '',
      userVideoMatchScore: '',
    },
    similaTitles: [
      {
        videoProfileImage: '',
        userVideoMatchScore: '',
        releaseDate: '',
        videoRating: '',
        contentRuntime: '',         /** Show number of seasons if series else show shows runtime */
        videoDescription: ''
      }
    ],
    videoExtraDetails: {
      videoGenres: [],
      videoCasts: [],
      videoCreators: [],
      videoOtherGenres: []
    }
  },

  videoGenres: [
    {
      genreID: '',
      genreName: ''
    }
  ]
};
