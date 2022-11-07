<template>
<div>
  <h2>{{ $route.params.title }}</h2>
  <ul>
    <li v-for="(motion, index) in grouped_motions" :key="index">
      <p>{{ motion.vote_description }}: {{ motion.result }}</p>
      <h3>Yeas</h3>
      <ul>
        <li v-for="(yeas) in motion.Yea" :key="yeas">{{ yeas }}</li>
      </ul>
      <h3>Nays</h3>
      <ul>
        <li v-for="(nays) in motion.Nay" :key="nays">{{ nays }}</li>
      </ul>
      <h3>Absent</h3>
      <ul>
        <li v-for="(absent) in motion['Absent']" :key="absent">{{ absent }}</li>
      </ul>
      <h3>Conflict of Interest</h3>
      <ul>
        <li v-for="(coi) in motion['Conflict of Interest']" :key="coi">{{ coi }}</li>
      </ul>
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
      motions: [],
    }
  },

  async created() {
    let url = `${API_URL}?$where=meeting_id=${this.$route.params.meeting_id} and nays >= 0 and vote is not null and title="${this.$route.params.title}"`
    const data = await axios.get(url);
    this.motions = data.data;
  },

  computed: {
    grouped_motions() {
      let grouped = {};
      this.motions.forEach(motion => {
        if (motion.motion_id in grouped === false) {
          motion['Yea'] = [];
          motion['Nay'] = [];
          motion['Absent'] = [];
          motion['Conflict of Interest'] = [];
          grouped[motion.motion_id] = motion;
        }
        grouped[motion.motion_id][motion['vote']].push(motion.member);
      })
      return Object.values(grouped);

    }
  }
}
</script>

<style>

</style>
