import DS from 'ember-data';

export default DS.Model.extend({
  posts: DS.hasMany('post'),
  recipes: DS.hasMany('recipe'),
  email: DS.attr()
});
