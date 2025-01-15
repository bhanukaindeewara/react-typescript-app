class Website {
  public id: number
  public title: string
  public description: string

  constructor(website: Website) {
    this.id = website.id
    this.title = website.title
    this.description = website.description
  }
}

export default Website
