import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The unique ID of the book', example: 1 })
  id: number;

  @Column()
  @ApiProperty({
    description: 'The title of the book',
    example: 'The Great Gatsby',
  })
  title: string;

  @Column()
  @ApiProperty({
    description: 'The author of the book',
    example: 'F. Scott Fitzgerald',
  })
  author: string;

  @Column()
  @ApiProperty({
    description: 'The publication year of the book',
    example: 1925,
  })
  published: string;
}
