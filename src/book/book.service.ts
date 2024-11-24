import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './dto/create-book.dto';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private readonly bookRepository: Repository<BookEntity>,
  ) {}
  public books: Book[] = [];
  async create(createBookDto: Book): Promise<BookEntity> {
    let addBook: BookEntity = new BookEntity();
    addBook.title = createBookDto.title;
    addBook.author = createBookDto.author;
    addBook.published = createBookDto.published;
    const book = await this.bookRepository.save(addBook);
    return book;
  }

  async findAll() {
    return await this.bookRepository.find();
  }

  async findOne(id: number): Promise<BookEntity> {
    const book = await this.bookRepository.findOneBy({ id });
    if (!book) {
      throw new NotFoundException(`Book with ID #${id} not found`);
    }
    return book;
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
    if (id < 1) {
      throw new BadRequestException('Id must be greater than 0');
    }
    this.books = this.books.filter((currentBook) => currentBook.id != id);
    return `This action removes a #${id} book`;
  }
}
