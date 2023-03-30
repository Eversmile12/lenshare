import { Storage } from "@plasmohq/storage";

export class AppStorage {
  static store(objectName: string, value: any, area?: string) {
    const storage = new Storage({
      area: area === "local" ? "local" : "sync",
    });
    try {
      // console.log("stored ", objectName, " as ", value);
      return storage.set(objectName, value);
    } catch (e) {
      console.log("ERR_STORE_SET:", e);
      return;
    }
  }
  static retrieve(objectName, area?: string) {
    const storage = new Storage({
      area: area === "local" ? "local" : "sync",
    });
    try {
      return storage.get(objectName);
    } catch (e) {
      console.log("ERR_STORE_RETRIEVE:", e);
      return;
    }
  }
}

export const storage = new AppStorage();
