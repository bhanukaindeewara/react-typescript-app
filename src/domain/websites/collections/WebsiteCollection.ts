import Website from "../models/Website.ts"

class WebsiteCollection {
  public websites: Website[]

  constructor(websites: Website[] = []) {
    this.websites = websites.map(
      (website: Website): Website => new Website(website),
    )
  }

  public all() {
    return this.websites
  }
}

export default WebsiteCollection
