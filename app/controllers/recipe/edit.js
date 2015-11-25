import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateRecipe() {
      var self = this;

      this.store.findRecord('recipe', this.model.id).then(function(recipe) {
        recipe.save().then(function(recipe) {
          self.store.createRecord('activity', { name: 'Edit recipe ('+recipe.get('title')+')', item_type: 'recipe.view', item: recipe.id }).save();
          self.transitionTo('recipes');
        });
      });

      return false;
    }
  }
});
