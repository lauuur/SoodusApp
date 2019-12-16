<template>
  <div id="app">

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>
  
          <v-list-item-content>
            <v-list-item-title>Peeter Paan</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
  
        <v-divider></v-divider>
  
        <v-list dense>
  
          <v-list-item
            v-for="item in sidebar"
            :key="item.title"
            :route="item.route"
            link
          >
            <v-list-item-icon class="ma-3">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <router-link :to="item.route">
            <v-list-item-content class="black--text">
              <v-list-item-title >
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

    <v-app-bar dark color="primary">   
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-text-field outlined maxlength="15" background-color="transparent"
          rounded dense class="pt-7 px-4 ma-6" label="Otsing">
        </v-text-field>
        <img src="../assets/logo.png" width="10%" alt="">
    </v-app-bar>

        <v-card flat>
          <v-container 
          flat
          class="mx-auto"
          max-width="500">
            <v-row>
              <v-col
                v-for="card in homepage"
                :key="card.title"
                :cols="card.flex">
                <v-card shaped @click="sendNotification()">
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
                  <span class="ma-1 pa-1 font-weight-light d-flex justify-space-between">
                    <div>{{card.subtitle}}</div>
                    <div class="mr-1">{{card.price}}</div>
                  </span>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <v-bottom-navigation 
            fixed
            :value="activeBtn"
            grow
            color="primary">
            <v-btn to="/">
                <span>Avaleht</span>
                <v-icon>mdi-home-outline</v-icon>
            </v-btn>
        
            <v-btn to="stores">
                <span>Poed</span>
                <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
        
            <v-btn to="categories">
                <span>Kategooriad</span>
                <v-icon>mdi-format-list-bulleted</v-icon>
            </v-btn>
        </v-bottom-navigation>

  </div>
</template>

<script>
export default {
  mounted(){
  },
  data: () => ({
    drawer: null,
    activeBtn: 0,
    sendNotification(){
      return this.$notify({
        group: 'foo',
        title: 'Rakendus on arendamisel',
        text: 'See funktsioon veel puudub',
      });
    },
    homepage: [
      { title: 'Zara', 
        src: 'https://lp2.hm.com/hmgoepprod?set=source[/92/2b/922b06301f34dee4f347ee62803ed84b3c5599f5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]', 
        subtitle: "Kampsun",
        price: "10.99€",
        flex: 6 
      },
      { title: 'New Yorker', 
        src: 'https://lp2.hm.com/hmgoepprod?set=source[/a9/03/a903d0663b63377ee13ea9b54f257fa91bc9e388.jpg],origin[dam],category[men_trousers_joggers],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]', 
        subtitle: "Püksid",
        price: "19.99€",
        flex: 6 
      },
      { title: 'H&M', 
        src: 'https://lp2.hm.com/hmgoepprod?set=source[/7f/1d/7f1d7bf8899dc06b99027bd45daf7c79c953fa71.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]', 
        subtitle: "T-särk",
        price: "9.99€",
        flex: 6 
      },
      { title: 'Rademar', 
        src: 'https://lp2.hm.com/hmgoepprod?set=source[/d5/9a/d59a711c9b2efcd8410c17a41a603303dc6db9bd.jpg],origin[dam],category[men_shoes_sneakers],type[DESCRIPTIVESTILLLIFE],res[w],hmver[2]&call=url[file:/product/main]', 
        subtitle: "Tennised",
        price: "15.99€",
        flex: 6 
      },
    ],
    sidebar: [
      { title: 'Lemmikud',
        icon: 'mdi-star-outline',
        route: '/favorites'
      },
      { title: 'Sorteerimine',
        icon: 'mdi-sort',
        route: '/sort'
      },
      { title: 'Seaded',
        icon: 'mdi-settings-outline',
        route: '/settings'
      },
      { title: 'Kontakt',
        icon: 'mdi-comment-text-outline',
        route: '/contact'
      },
    ],
  }),
}
</script>

<style>
a{  
  text-decoration: none;
  color: black;
}
.card-wrapper{
  padding: 20px
}
#app{
  min-width: 333px;
  max-width: 550px;
  background-color: white;
}
/* .v-bottom-navigation{
  position: absolute;
  bottom: 0
} */
.v-application{
  color: black;
}
.router-link a{
    text-decoration: none !important;
}
</style>