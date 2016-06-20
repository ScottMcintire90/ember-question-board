import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveUser() {
      var params = {
        name: this.get('name')
      };
    
      this.sendAction('saveUser', params);
    }
  }
});
