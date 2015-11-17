import DS from 'ember-data';

export default DS.Model.extend({
  publishedDate: DS.attr(),
  text: DS.attr(),
  title: DS.attr()
});
