import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Menu extends BaseEntity {
  @Field((_type) => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  category!: string;

  @Field()
  @Column({ type: 'float' })
  price!: number;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column()
  desc!: string;
}
