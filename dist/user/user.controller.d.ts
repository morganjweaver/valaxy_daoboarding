import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
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
    putQuizComplete(id: string, query: any): any;
    deleteUser(id: string): {
        id: string;
        wallet: string;
        completed_quizzes: number[];
    }[];
    postUser(user: UserDTO): number;
}
