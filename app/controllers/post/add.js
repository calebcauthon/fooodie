import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addPost() {
      var post = this.store.createRecord('post', { 
        title: this.get('title'),
        body: this.get('body')
      });
      
      post.save();

      return false;
    }
  }
});
