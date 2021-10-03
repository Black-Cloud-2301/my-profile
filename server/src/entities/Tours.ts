import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Tours extends BaseEntity {
  @Field((_type) => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  info!: string;

  @Field()
  @Column()
  image!: string;

  @Field()
  @Column()
  price!: string;
}
