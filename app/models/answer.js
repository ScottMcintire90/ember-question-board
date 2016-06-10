import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  content: DS.attr(),
  user: DS.attr(),
  date: DS.attr()
  question: DS.belongsTo('question', { async: true })
});
