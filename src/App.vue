<template>
  <v-app>
    <vue-page-transition name="">
      <router-view/>
    </vue-page-transition>
    <notifications group="foo" position="bottom left" max="2" width="200px"/>
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
