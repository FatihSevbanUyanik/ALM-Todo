<template>
   <v-card outlined class="py-2 elevation-1 border-primary">
      <v-toolbar class="elevation-0">
         <v-text-field
            v-model="search"
            label="Search"
            class="mr-3 mt-4"
            @click="changeSearchColor('primary')"
            @blur="changeSearchColor('grey')"
         >
            <v-icon slot="append" :color="searchColor">mdi-magnify</v-icon>
         </v-text-field>
      </v-toolbar>
   </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   data() {
      return {
         searchColor: 'grey',
      };
   },
   computed: {
      ...mapGetters(['todoSearch']),
      search: {
         get() {
            return this.todoSearch;
         },
         set(value) {
            this.$store.commit('updateSearch', value);
         },
      },
   },
   methods: {
      changeSearchColor(color) {
         this.searchColor = color;
      },
   },
};
</script>

<style scoped>
.border-primary {
   border-left: 5px solid rgb(0, 102, 255);
}
</style>
