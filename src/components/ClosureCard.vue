<template>
  <div class="jumbotron">
    <div class="row">
      <div class="col-xs-12 col-md-8">
        <h2>
          {{record.properties.BLOCKNM}}
          <small v-if="record.properties.LOCDESC">
            <br/>
            {{record.properties.LOCDESC}}
          </small>
        </h2>
      </div>
    <div class="col-xs-12 col-md-4">
      <h3 v-if="record.properties.STARTDATE">
        From {{ record.properties.STARTDATE | formatDate }} -
        <br/>
        {{record.properties.ENDDATE | formatDate}}
      </h3>
    </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-md-8">
        <h3>
          {{record.properties.BLOCKTYPE}}
          <small v-if="record.properties.COMMENT">
            <br/>
            {{record.properties.comment}}
          </small>
        </h3>
      </div>
      <div v-if="record.properties.Hyperlink" class="col-xs-12 col-md-4">
        <h3>
          More Information <br/>
          <small>
            <a v-bind:href="record.properties.Hyperlink" target="_blank" rel="noreferrer nofollow">
              Click
            </a>
          </small>
        </h3>
      </div>
    </div>

    <div class="row" v-if="record.properties.ALTROUTE">
      <div class="col-xs-12 col-md-8">
        <h3>
          Alternate Route <br/>
          <small>
            {{record.properties.ALTROUTE}}
          </small>
        </h3>
      </div>
    </div>

  </div>
</template>

<script>
  import moment from 'moment';
  export default {
    name: 'closure-card',
    props: ['record'],
    data () {
      return {
      }
    },
    filters: {
      'formatDate': function (value) {
        if (value) {
          return moment(String(value)).format('MM/DD/YYYY h:mm a')
        }
      }
    }
  }
</script>