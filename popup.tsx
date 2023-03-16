import { useEffect, useState } from "react"

import { sendToBackground, sendToBackgroundViaRelay } from "@plasmohq/messaging"

import { storage } from "~handlers/storageHandler"
import { WalletHandler } from "~handlers/walletHandler"

import * as style from "./styles/popup.module.css"

import "~style.css"

function IndexPopup() {
  const [currentProfile, setCurrentProfile] = useState<any>()
  const [profileImage, setProfileImage] = useState<string>()

  const getIpfsGatedURL = (ipfsURL: string): string => {
    const ipfsId = ipfsURL.split("//")[1]
    return `https://ipfs.filebase.io/ipfs/${ipfsId}`
  }
  const getUserProfiles = async () => {
    const profiles = await sendToBackground({
      name: "getUserProfiles"
    }).then((data) => data.profiles)
    console.log(profiles)
    setCurrentProfile(profiles[0])
    await storage.store("profile_id", profiles[0].id)
    console.log(profiles[0].id)
    setProfileImage(getIpfsGatedURL(profiles[0].picture.original.url))
  }

  const login = async () => {
    const walletHandler = new WalletHandler()
    console.log("logging in")
    await walletHandler.login()
  }

  const logout = async () => {
    await sendToBackground({
      name: "storageSet",
      body: {
        id: "accessToken",
        data: null
      }
    })
    await sendToBackground({
      name: "storageSet",
      body: {
        id: "refreshToken",
        data: null
      }
    })
    await sendToBackground({
      name: "storageSet",
      body: {
        id: "address",
        data: null
      }
    })
    console.log("logged out")
  }

  useEffect(() => {
    if (!currentProfile) {
      getUserProfiles()
    }
  }, [])

  return (
    <div className={style.popup_container}>
      {currentProfile ? (
        <div className={style.info_container}>
          <div className={style.profile_picture_container}>
            <img className={style.profile_picture} src={profileImage}></img>
          </div>
          <h3>@{currentProfile.handle}</h3>
          <div className={style.following_container}>
            <div className={style.followers_container}>
              <p>
                <strong>{currentProfile.stats.totalFollowers} </strong>
                <span>Followers</span>
              </p>
            </div>
            <div>
              <p>
                <strong> {currentProfile.stats.totalFollowing} </strong>
                <span>Following</span>
              </p>
            </div>
          </div>
          <div className={"button-group"}>
            <a className={"button-primary"} onClick={logout}>
              Logout
            </a>
            <a className={"button-primary"}>Settings</a>
          </div>
        </div>
      ) : (
        <div className={style.info_container}>
          <div className={style.profile_picture_container}>
            <img
              className={style.profile_picture}
              src={"https://via.placeholder.com/500"}></img>
          </div>
          <h3>Welcome on Lenshare!</h3>
          <p>Start by connecting your account</p>

          <div className={"button-group"}>
            <a className={"button-primary"} onClick={logout}>
              Login
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default IndexPopup
