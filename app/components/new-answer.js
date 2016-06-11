import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  saveAnswer() {
    var params = {
      user: this.get('user'),
      comment: this.get('comment'),
      date: moment().format('MMMM Do YYYY, h:mm:ss a'),
      question: this.get('question')
    };
    this.sendAction('saveAnswer', params);
  }
});
