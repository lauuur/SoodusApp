<template>
  <div>
    <v-tabs centered icons-and-text grow>
      
          <v-tab>
            Avaleht
            <v-icon>mdi-home-outline</v-icon>
          </v-tab>

          <v-tab>
            Poed
            <v-icon>mdi-cart-outline</v-icon>
          </v-tab>

          <v-tab>
            Kategooriad
            <v-icon>mdi-format-list-bulleted</v-icon>
          </v-tab>


    <v-tab-item>
      <div class="card-wrapper">
        <v-card 
        hover
        max-width="30%"
        >
          <router-link to="./shirt" replace>
            <v-img src="https://lp2.hm.com/hmgoepprod?set=source[/e1/60/e16086992ac9fe825228ceed5df6d950c4d9d8ef.jpg],origin[dam],category[men_sport_tops],type[DESCRIPTIVESTILLLIFE],res[w],hmver[1]&call=url[file:/product/main]">
              <v-card-title class="black--text">H&M</v-card-title>
            </v-img>
      
          <v-card-title class="black--text pb-3">T-särk 10.99€</v-card-title>
          
        </router-link>
      </v-card>
    </div>

    </v-tab-item>
    </v-tabs>
  <router-view></router-view>
  </div>
</template>


<script>

export default {
  // name: 'Tabs',
  // props: {
  // }
}

</script>


<style>

a{  
  text-decoration: none;
}
.card-wrapper{
  padding: 20px
}

</style>
