import Ember from 'ember';

export default Ember.Component.extend({
  sort: ['date:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sort'),
  actions: {
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },

    deleteAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    }
  }
});
