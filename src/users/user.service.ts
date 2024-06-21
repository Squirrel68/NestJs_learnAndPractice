import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(userDto: UserDto): Promise<UserDto> {
    const savedUser = await this.userRepository.save(userDto);
    return plainToInstance(UserDto, savedUser, {
      excludeExtraneousValues: true,
    });
  }
  async update(id: string, userDto: UserDto): Promise<object> {
    const updateResult = await this.userRepository.update(id, userDto);
    return updateResult;
  }
  async findOne(id: string): Promise<UserDto> {
    const foundUser = await this.userRepository.findOne({
      where: { id: id },
    });
    return plainToInstance(UserDto, foundUser, {
      excludeExtraneousValues: true,
    });
  }

  async deleteById(id: string): Promise<object> {
    const deleteResult = await this.userRepository.softDelete(id);
    return deleteResult;
  }
}
