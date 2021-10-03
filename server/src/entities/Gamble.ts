import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Gamble extends BaseEntity {
  @Field((_type) => ID)
  @PrimaryColumn()
  id!: string;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column()
  value!: number;

  @Field()
  @Column()
  suit!: number;

  @Field()
  @Column()
  suitValue!: number;
}
