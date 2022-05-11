import { Injectable } from '@nestjs/common';
import { DAOS } from './daos.mock';

@Injectable()
export class DaoService {
    private daos = DAOS;
    public async getDaos() {
        return this.daos;
    }
}
