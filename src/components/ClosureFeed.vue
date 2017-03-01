<template>
  <div>
    <button class="btn btn-primary btn-toggle" v-on:click="toggleShowExpired">
      {{showExpiredLabel}}
    </button>
    <closure-card v-for="record in filteredRecords" :record="record"></closure-card>
  </div>
</template>

<script>
  import ClosureCard from '../components/ClosureCard.vue';

  export default {
    name: 'closure-feed',
    components: { ClosureCard },
    data: function () {
      return {
        records: [],
        showExpired: false
      }
    },
    mounted: function () {
      this.fetchFeed();
    },
    methods: {
      toggleShowExpired: function () {
        this.showExpired = !this.showExpired;
      },
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
    },
    computed: {
      filteredRecords: function () {
        var now = Date.now();
        var self = this;
        return this.records.filter(function (record) {

          if (!self.showExpired)
          {
            var end = new Date(record.properties.ENDDATE).getTime()
            return (now < end);
          }

          return true;

        })
      },
      showExpiredLabel: function () {
        return (this.showExpired) ? "Hide Expired Closures" : "Show Expired Closures";
      }
    }
  }
</script>