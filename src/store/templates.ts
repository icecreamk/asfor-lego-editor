import { Module } from "vuex";
import { GlobalDataProps } from "./index";
// import { RespListData, RespData } from './respTypes'
import { PageData } from "./editor";

export type TemplateProps = Required<Omit<PageData, "props" | "setting">>;

export interface TemplatesProps {
  data: TemplateProps[];
  totalTemplates: number;
  works: TemplateProps[];
  totalWorks: number;
}

const templates: Module<TemplatesProps, GlobalDataProps> = {
  state: {
    data: [
      {
        id: 1,
        title: "",
        desc: "",
        coverImg: "",
        uuid: "",
        isTemplate: false,
        isHot: false,
        isNew: false,
        author: "",
        copiedCount: 0,
        status: 0,
        user: {
          gender: "",
          nickName: "",
          picture: "",
          userName: "",
        },
      },
    ],
    totalTemplates: 0,
    works: [],
    totalWorks: 0,
  },
  mutations: {
    // fetchTemplates(state, rawData: RespListData<TemplateProps>) {
    //   const { count, list } = rawData.data
    //   state.data = [ ...state.data, ...list ]
    //   state.totalTemplates = count
    // },
    // fetchWorks(state, rawData: RespListData<TemplateProps>) {
    //   const { count, list } = rawData.data
    //   state.works = list
    //   state.totalWorks = count
    // },
    // fetchTemplate(state, rawData: RespData<TemplateProps>) {
    //   state.data = [rawData.data]
    // }
  },
  actions: {
    // fetchTemplates: actionWrapper('/templates', 'fetchTemplates'),
    // fetchWorks: actionWrapper('/works', 'fetchWorks'),
    // fetchTemplate: actionWrapper('/templates/:id', 'fetchTemplate')
  },
  getters: {
    getTemplateById: (state, getters, rootState) => (id: number) => {
      return state.data.find((t) => t.id === id);
    },
  },
};

export default templates;
