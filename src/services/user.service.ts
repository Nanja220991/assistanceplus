import { Injectable, Inject } from '@nestjs/common';
import { UpdateUsersDto } from 'src/configurations/dto/users/update-users.dto';
import { UserEntity } from 'src/configurations/entities/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository: typeof UserEntity
  ) { }

  async create(user: any): Promise<UserEntity> {
    console.log(user);
    return this.usersRepository.create<UserEntity>(user)
  }

  async findAll(): Promise<UserEntity[]> {
    return this.usersRepository.findAll<UserEntity>();
  }

  async findLogin(email: string): Promise<UserEntity> {
    return await this.usersRepository.findOne<UserEntity>({ where: { email } });
  }

  async updateOne(user: UpdateUsersDto, id: string) {
    return this.usersRepository.update(
      user,
      {
        where: {
          id: id
        }
      })
  }

  async updateByEmail(user: UpdateUsersDto, email: string) {
    return this.usersRepository.update(
      user,
      {
        where: {
          email: email
        }
      })
  }
}