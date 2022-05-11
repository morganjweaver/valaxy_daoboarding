import { Controller, Get } from '@nestjs/common';
import { DaoService } from './dao.service'

@Controller('dao')
export class DaoController {
    constructor(private daoService: DaoService ) {}

    @Get()
    async getDAOs() {
        return this.daoService.getDaos();
    }
}
