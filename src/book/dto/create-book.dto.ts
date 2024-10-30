import { IsString, IsInt } from 'class-validator';
export class Book {
  @IsInt()
  id: number;
  @IsString()
  title: string;
  @IsString()
  author: string;
  @IsString()
  published: string;
}
