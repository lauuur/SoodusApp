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
     
        <v-card flat>
          <v-container>
          <v-row dense>
    
            <v-col
              v-for="(item, i) in stores"
              :key="i"
              cols="12">
              <v-card shaped 
                :to="item.route"
                :route="item.route"
                :color="item.color"
                dark>
                <div class="d-flex flex-no-wrap mb-1">
                  <v-avatar
                    class="ma-2"
                    size="70">
                    <v-img :src="item.src"></v-img>
                  </v-avatar>
                  <div>
                    <v-card-title
                      class="headline black--text"
                      v-text="item.title">
                    </v-card-title>
    
                    <v-card-subtitle 
                    class="black--text" 
                    v-text="item.location"></v-card-subtitle>
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
    activeBtn: 1,
    drawer: null,
    sendNotification(){
      return this.$notify({
        group: 'foo',
        title: 'Rakendus on arendamisel',
        text: 'See funktsioon veel puudub',
      });
    },
    stores: [
       {
        color: 'transparent',
        src: 'https://static-s.aa-cdn.net/img/ios/391120743/b634f35384f1fbecb578a17ece194909',
        title: 'New Yorker',
        location: 'Tallinn Tartu Pärnu',
        route: "/newyorker"
      },
      {
        color: 'transparent',
        src: 'https://i.pinimg.com/originals/0b/6a/4e/0b6a4e902c6f351555b37c6cb8dca4fc.jpg',
        title: 'H&M',
        location: 'Tallinn Rakvere Narva',
        route: "/hm"
      },
      {
        color: 'transparent',
        src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAhFBMVEX19fUAAAD09PQEBATt7e3d3d3q6uoKCgrx8fE2NjZHR0fOzs4yMjJAQEDT09NSUlJ5eXkRERGqqqpcXFxMTEwnJyfj4+M6OjqPj4+VlZVXV1fGxsZwcHDf39/X19d7e3ufn58kJCRgYGC7u7uDg4NoaGiysrIaGhqZmZkdHR0sLCyHh4dOdsUrAAAGIklEQVR4nO1Z2baquhKFQpFOUUF0gcuOZf///3fSVIUEaTxj3DvGecjcDxtCJZlWqmYqWY5jYWFhYWFhYWFhYWFhYWFhYWFh8S8B7N//pw8gPjqrL/wT3PbQ2GvfAHoGYDaHy1c0b1lZpmme55EO9p6naVpml5MYOl8F4n+oSm6LX8syyy6X6/7v51Y4bQ7w5y6+cAEsXUSyPNVVHC8Y4riqPWyu+A/+9dy1JBBM2fcav63rqqpvp/fWc73keGi5fOPuvyGwl2NFlenXP5yjFEY7182pA8MUP/rk/njO3rzLVPMCVK57D8YZSAKzk8kefmdyCu8g2hP2VDQWSMDzlT0Os2sYiJbblwRWVdvwgr9ROBFi/rj7JDDRepSiKVW/ObiT/8YJeG2i3H0CK18QEHESNk7qIADFSi4Z+gBuwiW+MwZOYN9ugzkS+BHzw1O8LIYIOHDUujjkkcfoGjACd7/tgBPO/xIOBQz64zCBg+E0XwbR/BsPvNvzT55IoJaphwFxVhHWRYCnnatiBR5GEA8S8H5NGyBnuqlsmKwMPr0EUtm6FS+0iH+jBJZhu2WKKTiT7GF9QQbXQQJwxW4BHyNEf7xG5mcEPuSqRPJLfM8XOPQqGCSAkuZOuQyf3vj2keEfBH5aK0A6i7EJxdyhrFyDScA3R2oIOKFfoJaPyTEc1y0CIY5zwoTeMYboT5LjQQLML1BlQCFxD5xBwE9svmP4uiHxmhcO7Qwkx2ovMHpeVRDCvgZYo9GIHLdT0L+baweLtMlxkuNOAk5GNhAkzC7A0C3/VSmjFjJTDWKJtugWSbibgLR5TrB8UVnR1rnB+Q+UglOqgBKuhvCDU8a9BCCYkceh5GZqQzl9T0BFjtIPqGXyU0wvDQKF3leu+Y4Jmb+Vg52l1bgcN4NQCj4nxPqC8pfLD+c+AmzduePWvBR9SHEnRfWm37oAIMGRKTVhgsmgYlrw+SDA4o6veHQQ20U0lY0LNGtvNv0EaKWV02BNW+BEl+MPAv4pcb28FiEKhwg7U+iOyjHN5uMkXiOf+YI+4pYo5JgIbOcC4ZlFSLLAupjJMPlvh3ZjckwgMVf1PJdhelSVMDRKyIpojqp+XBn35LgQLgh91f1LOUbzBZqvVPkpZBgfARUqhdZmJAvjyY67L2VVE5dh5UBpOCbHcgay1mNm3pTCtNlxOT7oBJAfHF686Q3XRnu/lWNpfEPjsypsIU6176QrP10EuMFUhFDY9Ge5iVGVOeMINtoiY/+lsVOiAVOZTgKURBqBRo4noy5QETt3mmUP9ZONOiwdoJuAM5FirFVhKnRH5ZjKeteLGwfUV8OGdOWPFKZNAPN+NtWaztI0Gplf+crV5oTL6rx5JUnIkSQvqpXPTg8BwGLuGUp92IbJho54v8MugPgjBZlHI98E+bOOewigWNFBA4JgQgPvBgk0RyHNDtbtToD+vPYRQDcapVok25LB6xKVrxs96tJCkmuCAre3VdVDgKT0oLXRKSseIAAB/jRdMKBIkVxDIKZA6SFA5ZRWZgLtYsshAlTD55qfYIczb7WeVDGPEKi1NjrpPzuukchG3UYYdzoRisdZJzVMgM50N71RhW4fATBvI6h1gQexYqYR+PW+IrA2WjF9L04PoMJR70aNecSj8XpmuGWQwF8nAVyYVVu26Dtg3WJcJrDExLdIJ6BiupsAufJkNJOC9sixGjPRowRqGbVsBQ0CeO/QTWBCh5qH2Y6h2yPHrdsImukq8haKp0FAqW0XATi9Uc9MBaPQ7ZZjFTilLlUQCLpQsDLZJHDrJ8CUC715NAlQZdZVHbdvI6iZyzCrrs5ui4C8feskAL8lFRWX1kxYayUdDmhuI8w+JXPX4SKYmwTUtvlJ4L0GkDe88oYU6Lp8QI61C0GjvQjr9xwd1xAQD3WbgPq85a8PXAOG4L1ACj5Vx9o4iGWYvDYc23lEl+AM0YshkWik2L/wm/WX7LDZnM/sXBCJha2yNNpu5nl+grVYo31d7eZCDq5ZlqWhxDzj0EPhu3p92Lp1wQL+I7973irayQvD0R7/c3A5CQLn4+8HFhYWFhYWFhYWFhYWFhYWFhYWFv8t/AM6ulN2b0MsDAAAAABJRU5ErkJggg==',
        title: 'Zara',
        location: 'Tallinn Tartu',
        route: "/zara"
      },
      {
        color: 'transparent',
        src: 'data:image/png;base64,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',
        title: 'Seppälä',
        location: 'Tallinn Tartu Viljandi',
        route: "/seppala"
      },
      {
        color: 'transparent',
        src: 'https://d2d3l62ibcj1br.cloudfront.net/hyperin-portal/imageserver/tenants/52826/rademar.jpg',
        title: 'Rademar',
        location: 'Tallinn Narva',
        route: "/rademar"
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