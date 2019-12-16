<template>
  <v-app>
    <Tabs/>
    <notifications group="foo" position="bottom right" max="3"/>
  </v-app>
</template>

<script>
import Tabs from './components/Tabs';

export default {
  name: 'App',

  components: {
    Tabs,
  },

  data: () => ({
    //
  }),
};

</script>
