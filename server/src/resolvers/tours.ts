import { Tours } from '../entities/Tours';
import { Query, Resolver } from 'type-graphql';

@Resolver((_of) => Tours)
export class ToursResolver {
  @Query((_return) => [Tours], { nullable: true })
  async tours(): Promise<Tours[]> {
    return Tours.find();
  }
}
