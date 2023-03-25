<template>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div class="mt-10 font-bold">count: {{ count }}</div>
    <button
      v-on:click="addOne"
      class="mt-10 font-bold bg-indigo-400 rounded text-white p-3"
    >
      +1
    </button>
    <div class="mt-10">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

const Header = defineAsyncComponent(() => import('remote/Header'));

export default {
  components: {
    Header,
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    addOne() {
      this.$store.commit('addOne');
    },
  },
};
</script>
