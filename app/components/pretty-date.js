import Ember from 'ember';

export default Ember.Component.extend({
  positionalParams: ['uglyDate'],
  prettyDate: function() {
    return moment(this.get('uglyDate')).format('ll')
  }.property('uglyDate')
});
