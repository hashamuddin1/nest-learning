import { IsString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class Book {
  @IsString()
  @IsNotEmpty({ message: 'Title is required' })
  @ApiProperty({
    description: 'The title of the book',
    example: 'The Great Gatsby',
  })
  title: string;
  @IsString()
  @IsNotEmpty({ message: 'Author is required' })
  @ApiProperty({
    description: 'The author of the book',
    example: 'F. Scott Fitzgerald',
  })
  author: string;
  @IsString()
  @IsNotEmpty({ message: 'Published is required' })
  @ApiProperty({
    description: 'The publication year of the book',
    example: 1925,
  })
  published: string;
}
