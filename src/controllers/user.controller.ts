import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { User as UserModel } from '@prisma/client';
import { UserService } from 'src/services/user.service';
import * as bcrypt from 'bcrypt';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get('users')
    async getUsers(): Promise<UserModel[]> {
        return this.userService.users({})
    }

    @Post('user')
    async signupUser(
        @Body() userData: { username: string, password: string, userUpdate: 'ADMIN', userCreate: 'ADMIN' },
    ): Promise<UserModel> {
        userData.password = await bcrypt.hash(userData.password, 10);
        return this.userService.createUser(userData);
    }

    @Get('login/:username/:password')
    async loginUser(@Param('username') username: string, @Param('password') password): Promise<UserModel> {
        let data = this.userService.user({
            username: username
        })
        
        let isConnected;
        let isActive;
        let connection;

        try {
            isConnected = await bcrypt.compare(password, (await data).password);
            isActive = (await data).statut;
            console.log(isConnected)
            if(isConnected == true && isActive == true) {
                connection = {
                    user: (await data).username,
                    message: 'Connecté',
                    token: process.env.ACCESS_TOKEN,
                    data
                }
            }else{
                if(isActive == false) {
                    connection = {
                        user: '#',
                        message: 'Compte Désactivé',
                        token: '#'
                    }
                }
                if(isConnected == false) {
                    connection = {
                        user: '#',
                        message: 'Erreur mot de passe',
                        token: '#'
                    }
                }
            }
        } catch (error) {
            data = null
        }

        return connection
    }

    @Put('user/:id')
    async updateUser(@Param('id') id: string, @Body() data: any): Promise<UserModel> {
        return this.userService.updateUser({
            where: { id: id },
            data: data
        })
    }

    @Get('filtered-users/:searchString')
    async getFilteredUsers(@Param('searchString') searchString: string): Promise<UserModel[]> {
        return this.userService.users({
            where: {
                OR: [
                    {
                        username: { contains: searchString }
                    }
                ]
            }
        })
    }

    @Delete('user/:id')
    async deleteUser(@Param('id') id: string): Promise<UserModel> {
        return this.userService.deleteUser({ id: id });
    }


}
