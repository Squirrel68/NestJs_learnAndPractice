import { UserDTO } from 'src/user.dto';
import { UserRepository } from './user.repository';

export class userService {
  constructor(userRepository: UserRepository) {}
  createUser(user: any): any {
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.id = '1';
    return UserDTO.plainToClass(user);
  }
}
