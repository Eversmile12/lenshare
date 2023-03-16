export const USER_PROFILES = `query($request:ProfileQueryRequest!){
  profiles(request:$request){
    items{
      id
      handle
      picture{
        ... on MediaSet{
          original{
            url
            mimeType

          }
        }
      }
      stats{
        totalFollowers
        totalFollowing
      }
    }
  }
}`