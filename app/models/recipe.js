import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  created_at: DS.attr(),
  body: DS.attr(),
  user: DS.belongsTo('user')
});
