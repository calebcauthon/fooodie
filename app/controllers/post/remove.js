import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removePost() {
      var self = this;

      this.store.findRecord('post', this.model.id).then(function(post) {
        post.destroyRecord();
        self.transitionTo('blog');
      });

      return false;
    }
  }
});