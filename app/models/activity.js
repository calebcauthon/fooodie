import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  created_at: DS.attr(),
  user: DS.belongsTo('user'),
  item: DS.attr(),
  item_type: DS.attr()
});
