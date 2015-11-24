import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  positionalParams: ['uglyDate'],
  prettyDate: function() {
    return moment(this.get('uglyDate')).format('ll')
  }.property('uglyDate')
});
