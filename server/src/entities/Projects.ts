import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Projects extends BaseEntity {
  @Field((_type) => ID)
  @PrimaryColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column()
  link!: string;

  @Field()
  @Column()
  github!: string;

  @Field()
  @Column()
  category!: string;
}
