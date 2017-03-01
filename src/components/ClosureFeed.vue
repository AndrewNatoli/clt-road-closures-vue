<template>
  <div>
    <closure-card v-for="record in records" :record="record"></closure-card>
  </div>
</template>

<script>
  import ClosureCard from '../components/ClosureCard.vue';

  export default {
    name: 'closure-feed',
    components: { ClosureCard },
    data: function () {
      return {
        biscuit: [],
        records: []
      }
    },
    mounted: function () {
      this.fetchFeed();
    },
    methods: {
      fetchFeed: function () {
        var self = this;
        Vue.http.get('./data/example.json')
          .then(function (resp) {
            self.$set(self, 'records', resp.body.features);
          },
          function (resp) {
            console.log("Error here :(");
          }
        );
      }
    }
  }
</script>