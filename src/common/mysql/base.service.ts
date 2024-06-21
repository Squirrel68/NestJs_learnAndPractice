import { Repository } from 'typeorm';
import { BaseEntity } from './base.entity';

export class MysqlBaseService<Entity extends BaseEntity> {
  constructor(protected repo: Repository<Entity>) {}
}
