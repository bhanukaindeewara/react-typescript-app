import { IsInt, IsNotEmpty, IsPositive, IsString } from "class-validator"

class PostRequest {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  public websiteId: number

  @IsString()
  @IsNotEmpty()
  public title: string

  @IsString()
  @IsNotEmpty()
  public description: string
}

export default PostRequest
