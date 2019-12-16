<template>
  <v-app>
    <router-view/>
    <notifications group="foo" position="bottom right" max="3" width="65%"/>
  </v-app>
</template>

<script>
// import Tabs from './components/Tabs';

export default {
  name: 'App',

  components: {
    // Tabs,
  },

  data: () => ({
    //
  }),
};

</script>
