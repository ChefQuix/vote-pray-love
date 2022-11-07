<template>
 <div>
  <h2>{{ $route.params.committee_name }} meeting on {{ $route.params.meeting_date }}</h2>
    <ul>
      <li v-for="(heading,index) in headings" :key="index">
    <router-link :to="{ name: 'heading', params: {
      meeting_id: $route.params.meeting_id,
      committee_name: $route.params.committee_name,
      meeting_date: $route.params.meeting_date,
      heading: heading.heading
    }}">{{ heading.heading }}</router-link>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios';
const API_URL = process.env.VUE_APP_API_URL;

export default {
  name: "MeetingView",
  data() {
    return {
      headings: [],
    }
  },

  async created() {
    let url = `${API_URL}?$where=meeting_id=${this.$route.params.meeting_id} and nays >= 0&$select=heading&$group=heading`
    const data = await axios.get(url);
    this.headings = data.data;
  }
}
</script>

<style>

</style>
