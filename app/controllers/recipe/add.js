import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  email: function() {
    return this.get('session').get('data').authenticated.email;
  }.property('session'),
  actions: {
    addRecipe() {
      var self = this;

      var recipe = this.store.createRecord('recipe', { 
        title: this.get('title'),
        body: this.get('body')
      });

      recipe.save().then(function() {
        self.transitionToRoute('recipes')
      });

      return false;
    }
  }
});
