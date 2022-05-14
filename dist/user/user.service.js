"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const users_mock_1 = require("./users.mock");
let UserService = class UserService {
    constructor() {
        this.users = users_mock_1.USERS;
    }
    async getUsers() {
        return this.users;
    }
    getUser(id) {
        const userId = Number(id);
        return new Promise((resolve) => {
            const user = this.users.findIndex((user) => user.id === userId);
            if (user === -1) {
                throw new common_1.HttpException('User not found', 404);
            }
            return resolve(this.users);
        });
    }
    putQuizComplete(id, quiz_id) {
        const userId = Number(id);
        return new Promise((resolve) => {
            const user = this.users.findIndex((user) => user.id === userId);
            if (user === -1) {
                throw new common_1.HttpException('User not found', 404);
            }
            this.users[user]['completed_quizzes'].push(quiz_id);
            return resolve(this.users[userId]);
        });
    }
    deleteUser(id) {
        const userId = Number(id);
        return new Promise((resolve) => {
            const index = this.users.findIndex((user) => user.id === userId);
            if (index === -1) {
                throw new common_1.HttpException('User not found', 404);
            }
            this.users.splice(index, 1);
            return resolve(this.users);
        });
    }
    postUser(user) {
        return this.users.push(user);
    }
};
UserService = __decorate([
    (0, common_1.Injectable)()
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map