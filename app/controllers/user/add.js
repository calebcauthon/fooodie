import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  email: function() {
    return this.get('session').get('data').authenticated.email;
  }.property('session'),
  actions: {
    addUser() {
      var self = this;

      var user = this.store.createRecord('user', { 
        email: this.get('newUserEmail'),
        password: this.get('newUserPassword'),
        password_confirmation: this.get('newUserPasswordConfirmation'),
      });

      user.save().then(function() {
        self.transitionToRoute('users');
      });

      return false;
    }
  }
});
