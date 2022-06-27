import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SongsRoute extends Route {
  @service store;

  queryParams = {
    name: {
      refreshModel: true,
    },
    rating: {
      refreshModel: true,
    },
  };

  async model(params) {
    const songs = await this.store.findAll('song', { include: 'band' });
    return {
      songs,
      queryName: params.name,
      queryRating: params.rating,
    };
  }
}
