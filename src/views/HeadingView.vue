<template>
  <div>
    <h2>{{ $route.params.heading }}</h2>
    <ul>
      <li v-for="(title,index) in titles" :key="index">
    <router-link :to="{ name: 'motions', params: {
      meeting_id: $route.params.meeting_id,
      committee_name: $route.params.committee_name,
      meeting_date: $route.params.meeting_date,
      heading: $route.params.heading,
      title: title.title
    }}">{{ title.title }}</router-link>
    </li>
  </ul>

  </div>
</template>

<script>
import axios from 'axios';
const API_URL = process.env.VUE_APP_API_URL;

export default {
  data() {
    return {
      titles: [],
    }
  },

  async created() {
    let url = `${API_URL}?$where=meeting_id=${this.$route.params.meeting_id} AND heading="${this.$route.params.heading}" and nays > 0&$select=distinct title`;
    const data = await axios.get(url);
    this.titles = data.data;
  }

}
</script>

<style>

</style>
