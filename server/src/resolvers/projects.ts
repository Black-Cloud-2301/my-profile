import { Projects } from '../entities/Projects';
import { Query, Resolver } from 'type-graphql';

@Resolver((_of) => Projects)
export class ProjectsResolver {
  @Query((_return) => [Projects], { nullable: true })
  async projects(): Promise<Projects[]> {
    return Projects.find();
  }
}
