<template>
  <v-row>
    <v-col
      v-for="(bar, i) in bars"
      :key="i"
      cols="12"
      sm="12"
      md="12"
      class="my-4"
    >
      <v-toolbar
        :color="bar.class"
        :dark="bar.dark"
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Vue E-shop</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
      bars: [
        { class: '' }
      ],
    }),
  }
</script>






