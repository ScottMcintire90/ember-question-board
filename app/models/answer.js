import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  comment: DS.attr(),
  date: DS.attr(),
  rating: DS.attr('Number'),
  question: DS.belongsTo('question', { async: true })
});
