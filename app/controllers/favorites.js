import Controller from '@ember/controller';
import { service } from '@ember/service';
import { action } from '@ember/object';

export default class Favoritesontroller extends Controller {
  @service favoritesSong;

  @action deleteFavorite(song) {
    this.favoritesSong.remove(song);
  }
}
