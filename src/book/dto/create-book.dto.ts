import { IsString, IsInt, IsNotEmpty } from 'class-validator';
export class Book {
  @IsInt()
  id: number;
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  title: string;
  @IsString()
  @IsNotEmpty({ message: 'Author is required' })
  author: string;
  @IsString()
  @IsNotEmpty({ message: 'Published is required' })
  published: string;
}
