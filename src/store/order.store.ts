export default {
  namespaced: true,

  state: {
    curtomerName: '',
    breakfast: [],
    luch: [],
    dinner: [],
  },

  actions: {
    updateCustomerName({ }, newName: string) {
      // console.log("newName", newName)
      // commit('UPDATE_MODELS', models)
    },
  },

  mutations: {
    UPDATE_CUSTOMER_NAME(state: any, curtomerName: string) {
      state.curtomerName = curtomerName;
    },
  },
};
