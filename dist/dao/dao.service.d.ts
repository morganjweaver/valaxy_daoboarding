export declare class DaoService {
    private daos;
    getDaos(): Promise<{
        id: string;
        name: string;
        description: string;
        quizzes: number[];
    }[]>;
}
