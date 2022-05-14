import { UserService } from './user.service';
import { UserDTO } from './user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<{
        id: number;
        wallet: string;
        completed_quizzes: number[];
    }[]>;
    getUser(id: number): Promise<any>;
    putQuizComplete(id: number, query: any): Promise<any>;
    deleteUser(id: number): Promise<any>;
    postUser(user: UserDTO): number;
}
