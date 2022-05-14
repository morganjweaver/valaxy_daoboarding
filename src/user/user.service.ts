import { HttpException, Injectable } from '@nestjs/common';
import { USERS } from './users.mock';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    private users = USERS;
    
    public async getUsers() {
        return this.users;
    }

    public async getUser(id: string) {
        const user = this.users.find((user) => user.id === id);
        if(user){
            throw new HttpException('User not found', 404);
        }
        return user;
    }

    public putQuizComplete(id: string, quiz_id: number) {
        const user = this.users.find((user) => user.id === id);
        if(user){
            throw new HttpException('User not found', 404);
        }
        this.users[id]['completed_quizzes'] += quiz_id;
        return this.users[id]['completed_quizzes'];
    }

    public deleteUser(id: string) {
        const index = this.users.findIndex((user) => user.id === id);
        if(index === -1){
            throw new HttpException('User not found', 404);
        }
        this.users.splice(index, 1);
        return this.users;
    }

    public postUser(user: UserDTO) {
        return this.users.push(user);
    }
}
