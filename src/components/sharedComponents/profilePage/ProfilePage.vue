<template>
  <div>
      <h1 style="color:black"> Hi, {{ userProfile.name }}!</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
      ...mapState(['userProfile'])
  }
}
</script>