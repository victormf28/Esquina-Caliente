import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

import LMain from '@/presentation/5_layouts/l-main/l-main.vue';

@Component({
  components: {
    LMain,
  },
})
export default class PCustomer extends Vue {
  @Mutation('order/UPDATE_CUSTOMER_NAME') public updateCustomerNameMutation: any;

  private form: any = {};

  constructor() {
    super();
  }

  public onSubmit() {
    this.updateCustomerNameMutation(this.form.customerName);
    this.$router.push({ name: 'OrderMenu' });
  }
}
