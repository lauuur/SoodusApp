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

    <v-app-bar dark color="primary">   
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-text-field outlined maxlength="15" background-color="transparent"
          rounded dense class="pt-7 px-4 ma-6" label="Otsing">
        </v-text-field>
        <img src="../assets/logo.png" width="10%" alt="">
    </v-app-bar>


        <v-card flat>
          <v-container>
          <v-row>
              <v-col>

                <v-card shaped cols:12 class="mb-7">
                <div class="flex-no-wrap headline ma-3">
                    <span class="d-flex justify-space-between">
                    <v-card-title>
                    Kontaktinfo(arendamisel)
                    </v-card-title>
                    <div class="ma-1">
                    </div>
                    </span>
                </div>
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
    chosenCity: "Tallinn",
    drawer: null,
    // handleSelectItem(item){
    // this.chosenCity = item.title;
    // },
    sendNotification(){
      return this.$notify({
        group: 'foo',
        title: 'Rakendus on arendamisel',
        text: 'See funktsioon veel puudub',
      });
    },
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
    cities: ['Tallinn', 'Tartu', 'Pärnu', 'Narva'],
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
#app{
  min-width: 333px;
  max-width: 550px;
  background-color: white;
}
/* .v-bottom-navigation{
  position: absolute;
  bottom: 0
} */
</style>