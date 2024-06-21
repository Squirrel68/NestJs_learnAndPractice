import { BaseEntity } from 'src/common/mysql/base.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends BaseEntity {
  @Column({
    length: 50,
  })
  firstName: string;
  @Column()
  lastName: string;
  @Column({ default: false })
  isActive: boolean;

  @Column({
    type: 'enum',
    enum: ['admin', 'user', 'pm'],
    default: 'user',
  })
  role: string;
}
