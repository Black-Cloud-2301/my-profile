import { People } from '../entities/People';
import { Query, Resolver } from 'type-graphql';

@Resolver((_of) => People)
export class PeopleResolver {
  @Query((_return) => [People], { nullable: true })
  async people(): Promise<People[]> {
    return People.find();
  }
}
