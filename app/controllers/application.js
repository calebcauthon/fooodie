import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout() {
      if(this.get('session').invalidate)
        this.get('session').invalidate();

      this.transitionTo('blog');
    }
  },
  onSessionIsAuthenticated: function () {
    var isAdmin = this.get('session').isAuthenticated && this.get('session').get('data').authenticated.admin;
    this.set('isAdmin', isAdmin);

  }.observes('session.data.authenticated.email'),

  init: function() { 
    this.set('isAdmin', this.get('session').isAuthenticated && this.get('session').get('data').authenticated.admin);
  }
});