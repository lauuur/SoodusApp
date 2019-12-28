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
  
          <v-list-item :to="item.route"
            v-for="item in sidebar"
            :key="item.title"
            :route="item.route"
            link>
            <v-list-item-icon class="ma-3">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content class="black--text">
              <v-list-item-title >
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>

    <v-app-bar class="mb-2">   
      <v-app-bar-nav-icon color="secondary" @click.stop="drawer = !drawer"/>
      <v-btn @click="$router.go(-1)" class="ma-2" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <h2 class="mx-10">H&M</h2> <v-spacer/>
      <img src="../../assets/logo.png" width="10%" alt="" class="ma-1">
    </v-app-bar>

        <v-card flat>
          <v-container 
          flat
          class="mx-auto"
          max-width="500">
            <v-row>
              <v-col
                v-for="card in storeItems"
                :key="card.title"
                :cols="card.flex">
                <v-card shaped @click="sendNotification()">
                  <v-img
                    :src="card.src"
                    class="white--text"
                    gradient="to top, rgba(0,0,0,0), rgba(0,0,0,0.2)"
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
    // activeBtn: 0,
    sendNotification(){
      return this.$notify({
        group: 'foo',
        title: 'Rakendus on arendamisel',
        text: 'See funktsioon veel puudub',
      });
    },
    storeItems: [
      { src: 'https://lp2.hm.com/hmgoepprod?set=source[/92/2b/922b06301f34dee4f347ee62803ed84b3c5599f5.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]', 
        subtitle: "Kampsun",
        price: "10.99€",
        flex: 6 
      },
      { src: 'https://lp2.hm.com/hmgoepprod?set=source[/7f/1d/7f1d7bf8899dc06b99027bd45daf7c79c953fa71.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[s],hmver[1]&call=url[file:/product/main]', 
        subtitle: "T-särk",
        price: "9.99€",
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
.v-application{
  color: black;
}
.router-link a{
    text-decoration: none !important;
}
.v-bottom-navigation{
  min-width: 333px;
  max-width: 550px;
}
</style>