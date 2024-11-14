import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  author: string;

  @Column()
  published: string;
}
