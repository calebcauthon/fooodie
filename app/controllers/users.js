import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),
  actions: {
    confirmRemoval(user) {
      user.set('confirmRemoval', true);
    },
    declineRemoval(user) {
      user.set('confirmRemoval', false);
    },
    remove(user) {
      var self = this;

      this.store.find('user', user.id).then(function(user) {
        user.destroyRecord();
      });

      return false;
    }
  }
});