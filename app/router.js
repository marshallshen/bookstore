import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('books');
  this.route('authors');
  this.route('publishing-house');
});

export default Router;
