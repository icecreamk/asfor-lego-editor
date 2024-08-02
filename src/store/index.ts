import { createStore, ActionContext } from "vuex";
import editor, { EditorProps } from "./editor";
import templates, { TemplatesProps } from "./templates";
import global, { GlobalStatus } from "./global";

export interface GlobalDataProps {
  templates: TemplatesProps;
  editor: EditorProps;
  global: GlobalStatus;
}
const store = createStore({
  modules: {
    // user,
    templates,
    editor,
    global,
  },
});
export default store;
