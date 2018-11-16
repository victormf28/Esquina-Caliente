import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';

import { MenuService } from '@/services/MenuService';
import LMain from '@/presentation/5_layouts/l-main/l-main.vue';

@Component({
  components: {
    LMain,
  },
})
export default class PCustomer extends Vue {
  @State('order') public orderState: any;
  public activeName: string = 'breakfast';
  public menu: Array<{}> = [];

  private menuService = new MenuService();

  constructor() {
    super();
  }

  public onSubmit() {
    // this.orderAction('aaaupdateCustomerName', 'victor')
    // this.$router.push({ name: 'menu' });
  }

  public mounted() {
    this.menuService.getMenu().then((data) => {
      this.menu = data;
    });
  }
}
