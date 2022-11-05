<template>
<div>
  <h2>Meetings for {{ $route.params.committee_name }}</h2>
  <ul>
    <li v-for="(meeting,index) in meetings" :key="index">
      <router-link :to="{ name: 'meeting',
                          params: { meeting_id: meeting.meeting_id,
                                    meeting_date: pretty_date(meeting.meeting_date),
                                    committee_name: $route.params.committee_name }}">
        {{ pretty_date(meeting.meeting_date) }}
      </router-link>
    </li>
  </ul>
</div>
</template>

<script>
const API_URL = process.env.VUE_APP_API_URL;
import axios from 'axios';

export default {

  data() {
    return {
      meetings: [],
    }
  },

  async created() {
    let url = `${API_URL}?$where=committee="${this.$route.params.committee}"&$select=DISTINCT meeting_id, meeting_date&$order=meeting_date DESC`;
    const data = await axios.get(url);
    this.meetings = data.data;
  },

  methods: {
    pretty_date(d) {
      d = new Date(d);
      return d.toDateString();
    }
  }

}
</script>

<style>

</style>
