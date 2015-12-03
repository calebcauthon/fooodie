import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',
  prettyDate: function() {
    return moment(this.get('uglyDate')).format('ll')
  }.property('uglyDate')
}).reopenClass({
  positionalParams: ['uglyDate']
});
