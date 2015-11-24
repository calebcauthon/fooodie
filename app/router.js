import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('blog', { path: '/blog' });
  this.route('favorites', { path: '/favs' });
  this.resource('post', function() {
    this.route('view', { path: '/view/:post_id' });
    this.route('add');
    this.route('remove', { path: '/remove/:post_id' });
    this.route('edit', { path: '/edit/:post_id' });
  });
  this.route('login');
  this.route('protected');
});

export default Router;
