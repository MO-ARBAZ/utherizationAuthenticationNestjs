import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller('app')
export class AppController {
  constructor(private readonly authService :AuthService) {}

   
  @Post( '/login')
  @UseGuards(AuthGuard('local'))
    login(@Request()req): string{
      return  this.authService.genratetoken(req.user)
        
    }
  
}
