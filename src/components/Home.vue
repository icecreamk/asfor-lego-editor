<template>
  <div>Home{{ a }}</div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import store from "../store";

export default defineComponent({
  name: "Home",
  setup() {
    const a = computed(() => {
      return store.getters.getTemplateById(1);
    });
    return {
      a,
    };
    // store.dispatch('templates/fetchTemplates')
    // store.dispatch('templates/fetchWorks')
  },
});
</script>