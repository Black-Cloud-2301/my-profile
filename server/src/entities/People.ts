import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class People extends BaseEntity {
  @Field((_type) => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  birthday!: Date;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  quote!: string;
}
