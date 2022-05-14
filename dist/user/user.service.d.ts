import { UserDTO } from './user.dto';
export declare class UserService {
    private users;
    getUsers(): Promise<{
        id: number;
        wallet: string;
        completed_quizzes: number[];
    }[]>;
    getUser(id: number): Promise<any>;
    putQuizComplete(id: number, quiz_id: number): Promise<any>;
    deleteUser(id: number): Promise<any>;
    postUser(user: UserDTO): number;
}
