export const CHALLENGE_REQUEST = `
query($request: ChallengeRequest!) {
    challenge(request: $request){
        text
    }
}`
