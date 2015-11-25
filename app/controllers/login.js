import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Controller.extend({
  session: service('session'),

  actions: {
    authenticate: function() {
      var self = this;
      let { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', identification, password).then(() => {
        self.store.createRecord('activity', { name: 'Logged in' }).save();
      }).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});