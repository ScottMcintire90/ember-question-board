import Ember from 'ember';

export default Ember.Route.extend({
  favoriteQuestions: Ember.inject.service(),
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question')
    });
  },
});
