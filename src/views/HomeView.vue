<template>
  <div>
    <h2>Committees</h2>
    <ul>
      <li v-for="(committee,index) in committees" :key="index">
        <router-link :to="{ name:'committee', params: { committee: committee.committee, committee_name: committee.committee_name }}">
          {{ committee.committee_name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL;

export default {
  name: "HomeView",

  data() {
    return {
      committees: [],
    }
  },

  async created() {
    let url = `${API_URL}?$select=committee_name,committee&$group=committee_name,committee`
    let data = await axios.get(url);
    this.committees = data.data;
  }
}
</script>

<style>

</style>
