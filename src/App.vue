<template>
  <v-app>
    <vue-page-transition name="">
      <router-view/>
    </vue-page-transition>
    <notifications group="foo" position="top center" max="3" width="65%"/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    //
  },

  data: () => ({
    //
  }),
};

</script>
