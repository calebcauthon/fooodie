import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removePost() {
      var self = this;

      this.store.find('post', this.model.id).then(function(post) {
        post.destroyRecord().then(function() {
          self.transitionTo('blog');
        });
      });

      return false;
    }
  }
});