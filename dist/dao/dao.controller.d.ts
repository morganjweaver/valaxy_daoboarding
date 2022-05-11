import { DaoService } from './dao.service';
export declare class DaoController {
    private daoService;
    constructor(daoService: DaoService);
    getDAOs(): Promise<{
        id: string;
        name: string;
        description: string;
        quizzes: number[];
    }[]>;
}
