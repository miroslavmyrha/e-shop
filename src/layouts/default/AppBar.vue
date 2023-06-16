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
        data-test="toolbar"
      >
        <v-app-bar-nav-icon data-test="hamburger-menu"></v-app-bar-nav-icon>
        <v-toolbar-title data-test="page-title">Vue E-shop</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon data-test="search-button">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon data-test="shopping-cart">
          <v-icon>mdi-cart-outline</v-icon>
        </v-btn>
        <v-btn icon data-test="options-extension">
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






