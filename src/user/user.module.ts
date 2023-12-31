import { Module } from '@nestjs/common';
import { UserController } from './api/controllers/user.controller';
import { UserService } from './domain/service/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
