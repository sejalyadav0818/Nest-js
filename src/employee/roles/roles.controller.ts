import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  Query,
} from '@nestjs/common';

@Controller('roles')
export class RolesController {
  @Get()
  userinfo(): string {
    return 'roles PAGE';
  }
  @Get('history')
  userHistory(): object {
    return { id: 1, text: 'sejal', rol: 'dev' };
  }
}
