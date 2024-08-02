<template>
  <div>
    <div class="sidebar-container">
      组件列表
      <ComponentsList :list="defaultTextTemplates" @onItemClick="addItem" />
      <img id="test-image" :style="{ width: '300px' }" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted, nextTick } from "vue";
import ComponentsList from "../components/ComponentsList.vue";

import defaultTextTemplates from "../defaultTemplates.ts";

export default defineComponent({
  components: {
    ComponentsList,
  },
  setup() {
    const addItem = (item: any) => {
      console.log(item);
    };
    return {
      addItem,
      defaultTextTemplates,
    };
  },
});
</script>