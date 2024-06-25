import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { pokedex } from './domain/proto/pokedex';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Observable<pokedex.ResponseNatureDto> {
    return this.appService.getNatures();
  }
}
