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

      recipe.save().then(function(recipe) {
        self.store.createRecord('activity', { name: 'Add recipe ('+recipe.get('title')+')', item_type: 'recipe.view', item: recipe.id }).save();
        self.transitionToRoute('recipes')
      });

      return false;
    }
  }
});
