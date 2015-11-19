export default DS.JSONSerializer.extend({
  normalizeQueryResponse(store, clazz, payload) {
    return this._super(store, clazz, payload);
  },

  serializeIntoHash(data, type, record, options) {
    var root = Ember.String.decamelize(type.modelName);
    data[root] = this.serialize(record, options);
  }
});