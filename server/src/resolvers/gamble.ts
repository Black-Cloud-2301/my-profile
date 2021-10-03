import { Gamble } from '../entities/Gamble';
import { Query, Resolver } from 'type-graphql';

@Resolver((_of) => Gamble)
export class GambleResolver {
  @Query((_return) => [Gamble], { nullable: true })
  async gamble(): Promise<Gamble[]> {
    return Gamble.find();
  }
}
