<template>
  <div
    class="edit-wrapper"
    @click="onItemClick(id)"
    :class="{ active: isActive }"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "edit-wrapper",
  props: {
    id: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["set-active"],
  setup(props, context) {
    const onItemClick = (id: string) => {
      context.emit("set-active", id);
    };
    return {
      onItemClick,
    };
  },
});
</script>

<style scoped>
.edit-wrapper {
  border: 1px solid transparent;
  user-select: none;
}

.edit-wrapper:hover {
  border: 1px solid #409eff;
}
.edit-wrapper.active {
  border: 1px solid #ffc940;
}
</style>
