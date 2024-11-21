import { Module } from '@nestjs/common';
import { userAgent } from 'next/server';
import { UserService } from './user.service';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
