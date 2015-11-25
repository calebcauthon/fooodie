import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goToBlog() {
      this.transitionToRoute('blog');
    },
    updatePost() {
      var self = this;

      this.store.findRecord('post', this.model.id).then(function(post) {
        post.save().then(function(post) {
          self.store.createRecord('activity', { name: 'Edit blog post('+post.get('title')+')', item_type: 'post.view', item: post.id }).save();
          self.transitionTo('blog');
        });
      });

      return false;
    }
  }
});
