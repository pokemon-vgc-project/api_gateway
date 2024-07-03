import { Controller, Get } from '@nestjs/common';
import { NatureService } from 'src/infra/microservices/pokedex/services/nature.service';
import { GetNaturesDto } from '../dtos/nature/nature.dto';
import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';

@Controller('natures')
export class NatureController {
  constructor(private readonly natureService: NatureService) {}

  @Get()
  @ApiOperation({ description: 'Get the nature list' })
  @ApiOkResponse({ type: GetNaturesDto })
  async getNatures(): Promise<GetNaturesDto> {
    return this.natureService.getNatures();
  }
}
