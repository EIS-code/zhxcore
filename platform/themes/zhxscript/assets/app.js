import Echo from "laravel-echo";

import Vue from 'vue'
import Laraform from '@laraform/laraform'

Vue.use(Laraform)

window.Pusher = require('pusher-js');

//window.Echo = new Echo({
  //  broadcaster:       'pusher',
  //key:               window.PUSHER_APP_KEY,
  //  wsHost:            window.HOST_NAME,
  //  wsPort:            window.WS_PORT,
  //  wssPort:           window.WSS_PORT,
  //  disableStats:      true,
  //  encrypted:         !window.APP_DEBUG,
  //  enabledTransports: ['ws', 'wss'],
//});

const app = new Vue({
    el: '#app'
})