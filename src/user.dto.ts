import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, Length } from 'class-validator';
import { BaseDTO } from './base.dto';

export class UserDTO extends BaseDTO {
  @IsNotEmpty()
  @Expose()
  username: string;

  firstName: string;
  lastName: string;

  @Expose()
  @Transform(({ obj }) => obj.firstName + ' ' + obj.lastName)
  fullName: string;

  @IsNotEmpty()
  @Length(10, 20)
  @Expose()
  password: string;
}
