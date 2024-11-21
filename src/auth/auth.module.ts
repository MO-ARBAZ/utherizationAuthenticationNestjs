import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './locale.stratigy';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [PassportModule, UserModule],
  controllers: [],
  providers: [LocalStrategy],
})
export class AuthModule {}
