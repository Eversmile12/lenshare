
import "@plasmohq/messaging"

interface MmMetadata {
	"authenticateSignature" : {}
	"getChallenge" : {}
	"getCurrentTab" : {}
	"getTweet" : {}
	"getUserProfiles" : {}
	"refreshTokens" : {}
	"storageGet" : {}
	"storageSet" : {}
	"verifyAuthToken" : {}
}

interface MpMetadata {
	
}

declare module "@plasmohq/messaging" {
  interface MessagesMetadata extends MmMetadata {}
  interface PortsMetadata extends MpMetadata {}
}