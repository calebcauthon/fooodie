import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    removeRecipe() {
      var self = this;

      this.store.find('recipe', this.model.id).then(function(recipe) {
        recipe.destroyRecord().then(function() {
          self.transitionTo('recipes');
        });
      });

      return false;
    }
  }
});