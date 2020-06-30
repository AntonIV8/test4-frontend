import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-test4-a4-l');
  this.route('i-i-s-test4-a4-e',
  { path: 'i-i-s-test4-a4-e/:id' });
  this.route('i-i-s-test4-a4-e.new',
  { path: 'i-i-s-test4-a4-e/new' });
});

export default Router;
