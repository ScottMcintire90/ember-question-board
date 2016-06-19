import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    upvoteAnswer(answer) {
      var rating = answer.get('rating');
      var newRating = rating += 1;
      answer.set('rating', newRating);
      answer.save();
      this.transitionTo('question', this.question);
    },
    downvoteAnswer(answer) {
      var rating = answer.get('rating');
      var newRating = rating -= 1;
      answer.set('rating', newRating);
      answer.save();
      this.transitionTo('question', this.question);
    },

    destroyQuestion(question) {
      var answer_deletions = question.get('answers').map(function(answer){
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function(){
        return question.destroyRecord();
      });
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    },

    destroyAnswer(answer) {
      answer.destroyRecord();
      this.transitionTo('question');
    },
  }
});
