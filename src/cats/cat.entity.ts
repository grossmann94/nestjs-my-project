import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateCatDto } from './dto/create-cat.dto';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 0 })
  age: number;

  @Column()
  breed: string;

  fromDto(dto: CreateCatDto) {
    return { name: dto.name, age: dto.age, breed: dto.breed } as Cat;
  }
}
