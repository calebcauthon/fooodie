import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  actions: {
    showBlog() {
      this.transitionTo('blog');
    },
    logout() {
      if(this.get('session').invalidate)
        this.get('session').invalidate();

      this.transitionTo('blog');
    }
  }
});