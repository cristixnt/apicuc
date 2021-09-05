import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id/code/:user_code')
  getHello(
    @Param('id') user_id: number,
    @Param('user_code') code: string,
  ): any {
    console.log('El parametro Id es: ' + user_id);
    console.log('El parametro Code es: ' + code);
    return this.appService.getHello();
  }

  @Post(':id')
  postData(@Param('id') id: number, @Body() data: any): string {
    console.log('Por el Body se está enviando: ', data);
    return data;
  }
}
