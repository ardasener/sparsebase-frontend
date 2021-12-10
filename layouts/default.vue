<template>
  <v-app>
    <v-app-bar app>
      <v-icon class="mx-1">mdi-blur-linear</v-icon>
      <v-toolbar-title class="mx-1"> SparseBase </v-toolbar-title>
      <div class="mx-10 w-1/5">
        <v-text-field
          height=""
          class="pt-6"
          label="Search"
          solo
          dense
          prepend-inner-icon="mdi-magnify"
          single-line
        ></v-text-field>
      </div>
      <v-spacer></v-spacer>
      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon left>mdi-code-tags</v-icon>
            Library
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in library_items" :key="item.name">
            <nuxt-link to="/metrics">{{ item.name }}</nuxt-link>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon left>mdi-ruler-square-compass</v-icon>
            Metrics
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in metrics_items" :key="item.name">
            <nuxt-link to="/metrics">{{ item.name }}</nuxt-link>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon left>mdi-database</v-icon>
            Data
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in data_items" :key="item.name">
            <nuxt-link to="/metrics">{{ item.name }}</nuxt-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <nuxt></nuxt>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      library_items: [
        {
          name: 'Design Philosphy',
          to: '/',
        },
        {
          name: 'Installation',
          to: '/',
        },
        {
          name: 'Guide',
          to: '/',
        },
      ],
      metrics_items: [
        {
          name: 'Tensor Metrics',
          to: '/metrics',
        },
        {
          name: 'Matrix Metrics',
          to: '/metrics',
        },
        {
          name: 'Graph Metrics',
          to: '/metrics',
        },
      ],
      data_items: [

      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
}
</script>
