import Ember from 'ember';

export default Ember.Component.extend({
    favoriteQuestions: Ember.inject.service(),
  sortDefinition: ['date:desc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortDefinition'),
  isContentShowing: false,
  actions: {
    contentShow: function() {
      this.set('isContentShowing', true);
    },
    contentHide: function() {
      this.set('isContentShowing', false);
    },
    addToFavorites(question) {
     this.get('favoriteQuestions').add(question);

   }
  }
});
