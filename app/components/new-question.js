import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    questionShow() {
        this.set('newQuestion', true);
    },
    saveQuestion() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        notes: this.get('notes'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.set('newQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
