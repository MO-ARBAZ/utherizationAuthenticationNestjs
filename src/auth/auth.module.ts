import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './locale.stratigy';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';



//issues the id card jwt tocken
@Module({
  imports: [PassportModule, UserModule ,JwtModule.register({
    secret:"key",
    signOptions:{
        expiresIn:"60s"
    }
  })

],
  controllers: [],
  providers: [LocalStrategy , AuthService],
exports :[AuthService]
})
export class AuthModule {}
