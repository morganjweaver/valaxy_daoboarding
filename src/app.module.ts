import { Module } from '@nestjs/common';
import { DaoModule } from './dao/dao.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DaoModule, UserModule],
})
export class AppModule {}
