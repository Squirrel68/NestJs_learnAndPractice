import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([Post, User]),
    ConfigModule
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
