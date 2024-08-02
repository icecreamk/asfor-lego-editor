<template>
  <div class="create-component-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="component-item"
      @click="onItemClick(item)"
    >
      {{ item.text }}
      <l-text v-bind="item"></l-text>
    </div>
  </div>
  <!-- <StyledUploader @success="onImageUploaded"></StyledUploader> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { v4 as uuidv4 } from "uuid";
// import StyledUploader from "../components/StyledUploader.vue";
import { ComponentData } from "../store/editor.ts";
import { TextComponentProps } from "lego-bricks";
// import { RespUploadData } from '../store/respTypes'
// import { getImageDimensions } from '../helper'
export default defineComponent({
  props: {
    list: {
      type: Array<TextComponentProps>,
      required: true,
    },
  },
  emits: ["on-item-click"],
  name: "components-list",
  components: {
    // StyledUploader,
  },
  setup(props, context) {
    const onItemClick = (props: TextComponentProps) => {
      const componentData: ComponentData = {
        name: "l-text",
        id: uuidv4(),
        props,
      };
      context.emit("on-item-click", componentData);
    };
    // const onImageUploaded = (data: { resp: RespUploadData; file: File }) => {
    //   const { resp, file } = data
    //   const componentData: ComponentData = {
    //     name: 'l-image',
    //     id: uuidv4(),
    //     props: {
    //       ...imageDefaultProps
    //     }
    //   }
    //   componentData.props.src = resp.data.urls[0]
    // }
    return {
      onItemClick,
      // onImageUploaded
    };
  },
});
</script>

<style>
.component-item {
  width: 100px;
  margin: 0 auto;
  margin-bottom: 15px;
}
.component-item > * {
  position: static !important;
}
</style>