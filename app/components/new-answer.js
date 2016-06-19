import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  newAnswer: false,
  actions: {
    answerShow() {
      this.set('newAnswer', true);
    },
    saveAnswer() {
      var params = {
        user: this.get('user'),
        comment: this.get('comment'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a'),
        rating: 0,
        question: this.get('question')
      };
      this.set('newAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
