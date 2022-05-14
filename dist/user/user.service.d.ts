import { UserDTO } from './user.dto';
export declare class UserService {
    private users;
    getUsers(): Promise<{
        id: string;
        wallet: string;
        completed_quizzes: number[];
    }[]>;
    getUser(id: string): Promise<{
        id: string;
        wallet: string;
        completed_quizzes: number[];
    }>;
    putQuizComplete(id: string, quiz_id: number): any;
    deleteUser(id: string): {
        id: string;
        wallet: string;
        completed_quizzes: number[];
    }[];
    postUser(user: UserDTO): number;
}
