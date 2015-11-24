import Devise from 'ember-simple-auth/authenticators/devise';

export default Devise.extend({
  serverTokenEndpoint:  'http://fooodie-api.herokuapp.com/users/sign_in'
});