import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SongsController extends Controller {
  @service favoritesSong;

  @action
  deleteSong(song) {
    if (this.favoritesSong.items.includes(song)) {
      this.favoritesSong.remove(song);
    }
    song.destroyRecord();
  }

  @action
  toggleFavorite(song) {
    if (this.favoritesSong.items.includes(song)) {
      this.favoritesSong.remove(song);
    } else {
      this.favoritesSong.add(song);
    }
  }
}
