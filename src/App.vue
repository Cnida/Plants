<template>
  <v-app>
    <v-app-bar app color="header">
      <div class="d-flex align-center">
        <v-img
            :src="require('@/assets/flower_pink.svg')"
            width="50"
        />
      </div>
    </v-app-bar>

    <v-main>
      <Main/>
    </v-main>
  </v-app>
</template>

<script>
import Main from './components/Main';

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
#app {
  background-color: #F1F8E9;
}
</style>