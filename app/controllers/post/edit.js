import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToBlog() {
      this.transitionToRoute('blog');
    },
    updatePost() {
      var self = this;

      this.store.findRecord('post', this.model.id).then(function(post) {
        post.save().then(function() {
          self.transitionTo('blog');
        });
      });

      return false;
    }
  }
});
