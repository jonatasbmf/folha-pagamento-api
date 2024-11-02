import { Injectable } from '@nestjs/common';
import { CreateInssDto } from './dto/create-inss.dto';
import { UpdateInssDto } from './dto/update-inss.dto';

@Injectable()
export class InssService {
  create(createInssDto: CreateInssDto) {
    return 'This action adds a new inss';
  }

  findAll() {
    return `This action returns all inss`;
  }

  findOne(id: number) {
    return `This action returns a #${id} inss`;
  }

  update(id: number, updateInssDto: UpdateInssDto) {
    return `This action updates a #${id} inss`;
  }

  remove(id: number) {
    return `This action removes a #${id} inss`;
  }
}
