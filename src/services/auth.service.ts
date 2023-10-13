import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './user.service';

@Injectable()
export class AuthService {

    isUserValid: boolean = false;
    dataUser = new Array();
    constructor(
        //private mailService: MailService,
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async validateUser(email: string, pass: string) {
        // find if user exist with this email
        const user = await this.userService.findLogin(email);
 
        if (!user) {
            return null;
        }
        // find if user password match
        const match = await this.comparePassword(pass, user.password);
        if (!match) {
            return null;
        }
        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = user['dataValues'];
 
        this.dataUser = result;

        if (result.email.length > 0) { this.isUserValid = true }

        //return result;
    }


    async login(user: any) {
        await this.validateUser(user.email, user.password);
        if (this.isUserValid) {
            const payload = { email: user.email };
            const token = this.jwtService.sign(payload);
            
            return {
                data: this.dataUser,
                access_token: token 
            }
        }
    }

    public async create(user) {
        // hash the password
        const pass = await this.hashPassword(user.password);

        // create the user
        const newUser = await this.userService.create({ ...user, password: pass });

        // tslint:disable-next-line: no-string-literal
        const { password, ...result } = newUser['dataValues'];

        // generate token
        const token = await this.generateToken(result);

        //this.mailService.sendUserConfirmation(user, token);

        // return the user and the token
        return { user: result, token };
    }

    private async generateToken(user) {
        const token = await this.jwtService.signAsync(user);
        return token;
    }

    private async hashPassword(password) {
        const hash = await bcrypt.hash(password, 10);
        return hash;
    }

    private async comparePassword(enteredPassword, dbPassword) {
        const match = await bcrypt.compare(enteredPassword, dbPassword);
        return match;
    }

    public async logOut() {
        return null;
    }
}