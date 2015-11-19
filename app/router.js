import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', { path: '/blog' });
  this.route('favorites', { path: '/favs' });
  this.resource('post', function() {
    this.route('add');
  });
});

export default Router;
