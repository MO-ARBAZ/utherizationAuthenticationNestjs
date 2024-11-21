import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { User } from "../user/user.entity";
import {Strategy} from "passport-local";
import { UserService } from "src/user/user.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){


    constructor(private readonly useService:UserService){
        super();
    }

    validate(username:string ,password :string): User{
        const user : User = this.useService.getUserByUserName(username);
        if(user == undefined) throw new UnauthorizedException()
         if(user != undefined && user.password == password){
            return user;
         }
         else{
            throw new UnauthorizedException();
         }   
    }
}