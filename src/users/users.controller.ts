import {
  Controller,
  Get,
  Post,
  HttpCode,
  Query,
  Body,
  Param,
} from '@nestjs/common';
import { BlogsService } from '../blogs/blogs.service';
@Controller('users')
export class UsersController {
  constructor(private blogService: BlogsService) {}

  @Get()
  userinfo(): string {
    return 'USER  PAGE';
  }
  @Get('history')
  userHistory(): object {
    return { id: 1, text: 'sejal' };
  }
  @Post('add-user')
  userinsert(@Body() record: any): string {
    console.log(record);
    return 'data inserted';
  }
  @Get('list-user/:id')
  //@HttpCode(204)
  userinsertbyidparam(@Param() record: any): string {
    console.log(record.id);
    return 'data inserted using param';
  }
  @Get('list-user')
  // @HttpCode(204)
  userinsertbyidquery(@Query() record: any): string {
    console.log(record.id);
    return 'data inserted usimng query ';
  }
  @Get('user*info')
  userinfoo(): string {
    return 'user info';
  }
  @Get('blog-list')
  async blogList(): Promise<any[]> {
    return this.blogService.findData();
  }
  @Post('blog-add')
  blogAdd(@Body() record: any) {
    this.blogService.create(record);
  }
}
