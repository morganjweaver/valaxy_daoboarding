import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './user.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}
    
    @Get()
    public async getUsers() {
        return this.userService.getUsers();
    }

    @Get(':id')
    public async getUser(@Param('id') id: number): Promise<any> {
        return this.userService.getUser(id);
    }
    
    @Put(':id')
    public putQuizComplete(@Param('id') id: number, @Query() query) {
        const quizId = Number(query.property_name);
        return this.userService.putQuizComplete(id, quizId);
    }

    @Delete(':id')
    public deleteUser(@Param('id') id: number) {
        return this.userService.deleteUser(id);
        
    }

    @Post()
    public postUser(@Body() user: UserDTO) {
        return this.userService.postUser(user);
        
    }
}
