self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "\\/feed(?:\\/(.*))?[\\/#\\?]?"
          }
        ],
        "source": "/posts/:postId",
        "destination": "/feed/(..)posts/:postId"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "\\/feed(?:\\/(.*))?[\\/#\\?]?"
          }
        ],
        "source": "/posts/:postId",
        "destination": "/feed/(..)posts/:postId"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "\\/feed(?:\\/(.*))?[\\/#\\?]?"
          }
        ],
        "source": "/posts/:postId",
        "destination": "/feed/(..)posts/:postId"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()