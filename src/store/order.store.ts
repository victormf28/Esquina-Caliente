export default {
  namespaced: true,

  state: {
    curtomerName: '',
  },
  mutations: {
    UPDATE_CUSTOMER_NAME(state: any, curtomerName: string) {
      state.curtomerName = curtomerName;
    },
  },
};
