<template>
  <div id="app">
    <v-app-bar dark color="primary">   
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-text-field class="pt-6 pr-12 ma-6" width="20%" label="Otsing">
          </v-text-field>
      <v-btn icon>
        <v-icon class="ml-n12">mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

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
      <v-container flat fluid
      class="mx-auto"
      max-width="500">
        <v-row >
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card>
              <v-img
                :src="card.src"
                class="white--text"
                gradient="to top, rgba(0,0,0,0), rgba(0,0,0,0.4)"
                height="200px">
                <v-card-title 
                class="font-italic font-weight-thin mt-n3" 
                v-text="card.title">
                </v-card-title>
              </v-img>
              <span class="ma-1 pa-1 font-weight-bold d-flex justify-space-between">
                <div>{{card.subtitle}}</div>
                <div>{{card.price}}</div>
              </span>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: 'ZARA', 
        src: 'https://lp2.hm.com/hmgoepprod?set=source[/92/2b/922b06301f34dee4f347ee62803ed84b3c5599f5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]', 
        subtitle: "Kampsun",
        price: "10.99€",
        flex: 6 },
      { title: 'New Yorker', 
        src: 'https://lp2.hm.com/hmgoepprod?set=source[/a9/03/a903d0663b63377ee13ea9b54f257fa91bc9e388.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]', 
        subtitle: "Püksid",
        price: "19.99€",
        flex: 6 },
      { title: 'H&M', 
        src: 'https://lp2.hm.com/hmgoepprod?set=source[/7f/1d/7f1d7bf8899dc06b99027bd45daf7c79c953fa71.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]', 
        subtitle: "T-särk",
        price: "9.99€",
        flex: 6 },
      { title: 'Rademar', 
        src: 'https://lp2.hm.com/hmgoepprod?set=source[/d5/9a/d59a711c9b2efcd8410c17a41a603303dc6db9bd.jpg],origin[dam],category[men_shoes_sneakers],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]', 
        subtitle: "Tennised",
        price: "15.99€",
        flex: 6 },
    ],
  }),
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