import { HttpException, Injectable } from '@nestjs/common';
import { USERS } from './users.mock';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
    private users = USERS;
    
    public async getUsers() {
        return this.users;
    }

    public getUser(id: number): Promise<any> {
        const userId = Number(id);
        return new Promise((resolve) => {
            const user = this.users.findIndex((user) => user.id === userId);
            if(user === -1){
             throw new HttpException('User not found', 404);
            }
        return resolve(this.users);
    });
    }

    public putQuizComplete(id: number, quiz_id: number):Promise<any> {
        const userId = Number(id);
        return new Promise((resolve) => {
        const user = this.users.findIndex((user) => user.id === userId);
        if(user === -1){
            throw new HttpException('User not found', 404);
        }
        this.users[user]['completed_quizzes'].push(quiz_id);
        return resolve(this.users[userId]);
    });
    }

    public deleteUser(id: number):Promise<any> {
        const userId = Number(id);
        return new Promise((resolve) => {
        const index = this.users.findIndex((user) => user.id === userId);
        if(index === -1){
            throw new HttpException('User not found', 404);
        }
        this.users.splice(index, 1);
        return resolve(this.users);
    });
    }

    public postUser(user: UserDTO) {
        return this.users.push(user);
    }
}
