import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['created_at:desc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties')
});