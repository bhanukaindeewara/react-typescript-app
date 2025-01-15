class Subscriber {
  public id: number
  public websiteId: number
  public email: string

  constructor(subscriber: Subscriber) {
    this.id = subscriber.id
    this.websiteId = subscriber.websiteId
    this.email = subscriber.email
  }
}

export default Subscriber
