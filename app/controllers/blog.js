import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Controller.extend(AuthenticatedRouteMixin, {
  sortProperties: ['created_at:desc'],
  sortedModel: Ember.computed.sort('model', 'sortProperties')
});