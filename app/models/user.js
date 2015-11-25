import DS from 'ember-data';

export default DS.Model.extend({
  posts: DS.hasMany('post'),
  recipes: DS.hasMany('recipe'),
  email: DS.attr(),
  role: DS.attr(),
  password: DS.attr(),
  password_confirmation: DS.attr()
});
