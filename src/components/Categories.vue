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
        <img src="../assets/logo.png" width="10%" alt="" class="ma-1">
    </v-app-bar>


        <v-card flat >
          <v-container>
          <v-row>
    
            <v-col
            class="mb-2"
               v-for="(item, i) in categories"
              :key="i"
              :cols="item.flex">
              <v-card shaped @click="sendNotification()">
                <div class="d-flex flex-no-wrap">
                  <v-avatar
                  class="ma-2"
                    size="40"
                    tile>
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title
                      class="ma-n1 font-weight-light"
                      v-text="item.title">
                    </v-card-title>
    
                  </div>
    
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
    activeBtn: 2,
    drawer: null,
    sendNotification(){
      return this.$notify({
        group: 'foo',
        title: 'Rakendus on arendamisel',
        text: 'See funktsioon veel puudub',
      });
    },
    categories: [
      { title: 'Püksid', 
        src: 'https://icon-library.net/images/pants-icon-png/pants-icon-png-2.jpg', 
        flex: 6 
      },
      { title: 'Särgid', 
        src: 'https://icon-library.net/images/icon-shirt/icon-shirt-5.jpg', 
        flex: 6 
      },
      { title: 'Kleidid', 
        src: 'https://icon-library.net/images/105283.svg.svg', 
        flex: 6 
      },
      { title: 'Seelikud', 
        src: 'https://icon-library.net/images/skirt-icon/skirt-icon-21.jpg', 
        flex: 6 
      },
      { title: 'Mütsid', 
        src: 'https://icon-library.net/images/baseball-hat-icon/baseball-hat-icon-20.jpg', 
        flex: 6 
      },
      { title: 'Joped', 
        src: 'https://icon-library.net/images/207687.svg.svg', 
        flex: 6 
      },
      { title: 'Jalatsid', 
        src: 'https://icon-library.net/images/converse-icon/converse-icon-18.jpg', 
        flex: 6 
      },
      { title: 'Sokid', 
        src: 'https://icon-library.net/images/sock-icon/sock-icon-21.jpg', 
        flex: 6 
      },
      { title: 'Aluspesu', 
        src: 'https://icon-library.net/images/panty-icon/panty-icon-17.jpg', 
        flex: 6 
      },
      { title: 'Sport', 
        src: 'https://icon-library.net/images/v-20-512_3864.png', 
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
}
.card-wrapper{
  padding: 20px
}
#app{
  min-width: 333px;
  max-width: 550px;
  background-color: white;
}
.v-bottom-navigation{
  min-width: 333px;
  max-width: 550px;
}
</style>