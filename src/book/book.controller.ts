import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, UseInterceptors } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookGuard } from './book.guard';
import { BookInterceptor } from './book.interceptor';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiHeader,
} from '@nestjs/swagger';
import { BookEntity } from './entities/book.entity';

@ApiTags('book')
@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @UseGuards(new BookGuard())
  @ApiOperation({ summary: 'Create a new book' })
  @ApiResponse({
    status: 201,
    description: 'The book has been successfully created.',
    type: BookEntity,
  })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  @ApiBody({ type: Book, description: 'Payload for creating a book' })
  @ApiHeader({
    name: 'token', // Name of the header
    description: 'A custom header required for this endpoint', // Header description
    required: true, // Whether the header is mandatory
  })
  create(@Body() createBookDto: Book) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @UseInterceptors(BookInterceptor)
  @ApiOperation({ summary: 'Retrieve all books' }) // Brief description of the operation
  @ApiResponse({
    status: 200,
    description: 'A list of all books',
    type: [BookEntity], // Specifies the expected response type (array of BookEntity)
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
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
