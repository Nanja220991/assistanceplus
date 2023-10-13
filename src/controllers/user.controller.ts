import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CreateUsersDto } from '../configurations/dto/users/create-users.dto';
import { UpdateUsersDto } from '../configurations/dto/users/update-users.dto';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UsersService, private readonly authService: AuthService) {}

  @Post('add')
  create(@Body() user: CreateUsersDto) {
    return this.authService.create(user);
  }

  @Get('all')  
  findAll() {
    return this.userService.findAll();
  }

 @Post('login')
  findOne(@Body('email') email: string, @Body('password') password: string) { 
    return this.authService.login({
      'email': email,
      'password': password
    });
  } 

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: UpdateUsersDto) {
    return this.userService.updateOne(user, id);
  }

  @Patch('email/:email')
  updateByEmail(@Param('email') email: string, @Body() user: UpdateUsersDto) {
    return this.userService.updateByEmail(user, email);
  }
}