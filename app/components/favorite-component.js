import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
    });
  },
});
