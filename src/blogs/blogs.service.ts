import { Injectable } from '@nestjs/common';
interface Blog {
  name: string;
  id: number;
}
@Injectable()
export class BlogsService {
  private readonly blogs: Blog[] = [];

  create(data: Blog) {
    this.blogs.push(data);
  }

  findData(): Blog[] {
    return this.blogs;
  }
}
