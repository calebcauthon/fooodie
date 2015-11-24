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
  isAdmin: function() {
    return this.get('session').isAuthenticated && this.get('session').get('data').authenticated.admin
  }.observes('session')
});