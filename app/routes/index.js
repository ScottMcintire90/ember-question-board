import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer'),
      users: this.store.findAll('user')
    });
  },

  actions: {
    saveQuestion(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    saveUser(params) {
      var newUser = this.store.createRecord('user', params);
      newUser.save();
      this.transitionTo('index');
    }
  }
});
