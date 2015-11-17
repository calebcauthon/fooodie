export default Ember.Route.extend({
  model() {
    return [
      {
        title: 'Welcome to the blog!',
        body: 'This will be a great blog to read.',
        date: '2005-06-07'
      }
    ]
  }
});
