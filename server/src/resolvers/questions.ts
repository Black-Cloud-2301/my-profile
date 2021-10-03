import { Questions } from '../entities/Questions';
import { Query, Resolver } from 'type-graphql';

@Resolver((_of) => Questions)
export class QuestionsResolver {
  @Query((_return) => [Questions], { nullable: true })
  async questions(): Promise<Questions[]> {
    return Questions.find();
  }
}
