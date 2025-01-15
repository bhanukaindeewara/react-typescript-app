class Post {
  public id: number
  public websiteId: number
  public title: string
  public description: string

  constructor(post: Post) {
    this.id = post.id
    this.websiteId = post.websiteId
    this.title = post.title
    this.description = post.description
  }
}

export default Post
