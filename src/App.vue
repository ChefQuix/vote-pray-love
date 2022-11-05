<template>
  <div>

  </div>
</template>

<script>
import axios from 'axios';

//const API_URL = `https://data.winnipeg.ca/resource/f9mn-vti8.json`;

export default {
  data() {
    committees: [],
  },
  name: 'App',
  async created() {
    let url = `${this.$API_URL}?$select=committee_name,committee&$group=committee_name`
    let data = await axios.get(url);
    this.committees = data;
  }
}
</script>

<style>
</style>
