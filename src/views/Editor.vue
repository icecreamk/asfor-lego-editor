<template>
    <div class="container">
      <ComponentsList :list="defaultTextTemplates" @onItemClick="addItem" />
      <div class="component-item">
        <edit-wrapper
          v-for="item in components"
          :key="item.id"
          :id="item.id"
          @setActive="setActive"
          :isActive="item.id === currentElement?.id"
        >
          <component :is="item.name" v-bind="item.props"></component>
        </edit-wrapper>
      </div>
      <div>
        <PropsTable v-if="currentElement && currentElement.props" :props="currentElement.props" @change="handleChange"></PropsTable>
        <pre>
          {{ currentElement && currentElement.props }}
        </pre>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, onMounted, nextTick } from "vue";
import ComponentsList from "../components/ComponentsList.vue";
import EditWrapper from "../components/EditWrapper.vue";
import { useStore } from "vuex";
import defaultTextTemplates from "../defaultTemplates.ts";
import { GlobalDataProps } from "../store/index.ts";
import { ComponentData } from "../store/editor.ts";
import LText from "../components/LText.vue";
import PropsTable from "../components/PropsTable.vue";


export default defineComponent({
  components: {
    ComponentsList,
    EditWrapper,
    LText,
    PropsTable
  },
  setup() {
    const store = useStore<GlobalDataProps>();
    const components = computed(() => {
      return store.state.editor.components;
    });
    const currentElement = computed<ComponentData | null>(() => {
      return store.getters.getCurrentElement;
    });
    const addItem = (item: ComponentData) => {
      store.commit("addComponent", item);
    };
    const setActive = (id: string) => {
      store.commit("setActive", id);
    };
    const handleChange = (e: any) => {
      console.log(e)
      store.commit('updateComponent', e)
    }
    return {
      components,
      addItem,
      setActive,
      handleChange,
      currentElement,
      defaultTextTemplates,
    };
  },
});
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: row;
}
.component-item {
  display: flex;
  flex-direction: column;
}
</style>