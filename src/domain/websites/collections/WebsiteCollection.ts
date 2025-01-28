import Website from "../models/Website.ts"

class WebsiteCollection {
  public websites: Website[]

  constructor(websites: Website[] = []) {
    this.websites = websites
  }

  public all() {
    return this.websites
  }
}

export default WebsiteCollection
