import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateIrrfDto } from './dto/create-irrf.dto';
import { UpdateIrrfDto } from './dto/update-irrf.dto';
import { IrrfService } from './irrf.service';

@Controller('irrf')
export class IrrfController {
  constructor(private readonly irrfService: IrrfService) {}

  @Post()
  async create(@Body() createIrrfDto: CreateIrrfDto) {
    return await this.irrfService.create(createIrrfDto);
  }

  @Get()
  async findAll() {
    return await this.irrfService.findAll();
  }

  @Get('buscar/id/:id')
  async findOne(@Param('id') id: string) {
    return await this.irrfService.findOne(+id);
  }

  @Get('buscar/ano')
  async findByYear(@Query('ano') ano: string) {
    return await this.irrfService.findByYear(+ano);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateIrrfDto: UpdateIrrfDto) {
    return await this.irrfService.update(+id, updateIrrfDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.irrfService.remove(+id);
  }

  @Get('anos-distintos')
  async getDistinctYears() {
    return this.irrfService.findDistinctYears();
  }
}
