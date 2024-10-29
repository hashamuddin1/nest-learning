import { Injectable } from '@nestjs/common';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './dto/create-book.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];
  create(createBookDto: Book) {
    this.books.push(createBookDto);
    return 'Book has been added';
  }

  findAll() {
    return this.books;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    let indexNumber = this.books.findIndex((currentBook) => {
      return currentBook.id == id;
    });
    this.books[indexNumber] = {
      ...this.books[indexNumber],
      ...updateBookDto,
    };
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    this.books = this.books.filter((currentBook) => currentBook.id != id);
    return `This action removes a #${id} book`;
  }
}
