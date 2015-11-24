import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  email: function() {
    return this.get('session').get('data').authenticated.email;
  }.property('session'),
  needs: 'post',
  actions: {
    addPost() {
      var self = this;

      var post = this.store.createRecord('post', { 
        title: this.get('title'),
        body: this.get('body')
      });

      post.save().then(function() {
        self.transitionToRoute('blog')
      });

      return false;
    }
  }
});
