import ClosureFeed from './components/ClosureFeed.vue';

Vue.extend(require('vue-resource'));
var vm = new Vue({
  el: '#app',
  components: { ClosureFeed },
  template: '<closure-feed></closure-feed>'
});
