import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookGuard } from './book.guard';
import { BookInterceptor } from './book.interceptor';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @UseGuards(new BookGuard)
  create(@Body() createBookDto: Book) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @UseInterceptors(BookInterceptor)
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: ParseIntPipe, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: ParseIntPipe) {
    return this.bookService.remove(+id);
  }
}
