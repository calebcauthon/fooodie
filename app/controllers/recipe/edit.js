import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateRecipe() {
      var self = this;

      this.store.findRecord('recipe', this.model.id).then(function(recipe) {
        recipe.save().then(function() {
          self.transitionTo('recipes');
        });
      });

      return false;
    }
  }
});
