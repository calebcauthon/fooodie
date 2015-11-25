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

  this.route('recipes', { path: '/recipes' });
  this.route('recipe', function() {
    this.route('view', { path: '/view/:recipe_id' });
    this.route('add');
    this.route('remove', { path: '/remove/:recipe_id' });
    this.route('edit', { path: '/edit/:recipe_id' });
  });

  this.route('users', { path: '/users' })
  this.route('user', function() {
    this.route('remove', { path: '/remove/:user_id' });
    this.route('add');
  });

  this.route('activity-feed', { path: '/activity-feed' });
  this.route('login');
});

export default Router;
