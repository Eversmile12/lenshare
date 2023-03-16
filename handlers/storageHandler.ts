import { Storage } from "@plasmohq/storage"

class AppStorage {
  private storage: Storage

  constructor() {
    this.storage = new Storage()
  }
  store(objectName: string, value: any) {
    try {
      console.log("stored ", objectName, " as ", value)
      return this.storage.set(objectName, value)
    } catch (e) {
      console.log("ERR_STORE_SET:", e)
      return
    }
  }
  retrieve(objectName) {
    try {
      return this.storage.get(objectName)
    } catch (e) {
      console.log("ERR_STORE_RETRIEVE:", e)
      return
    }
  }
}

export const storage = new AppStorage()
