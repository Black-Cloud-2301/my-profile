import { Query, Resolver } from 'type-graphql';
import { Menu } from '../entities/Menu';

@Resolver((_of) => Menu)
export class MenuResolver {
  @Query((_return) => [Menu], { nullable: true })
  async menu(): Promise<Menu[]> {
    return Menu.find();
  }
}
