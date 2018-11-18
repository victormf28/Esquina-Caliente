import { Component, Vue } from 'vue-property-decorator';

import { MenuService } from '@/services/MenuService';
import LMain from '@/presentation/5_layouts/l-main/l-main.vue';

@Component({
  components: {
    LMain,
  },
})
export default class PListOrder extends Vue {
  public orders: Array<{}> = [];
  public name: string = '';

  private menuService = new MenuService();
  constructor() {
    super();
  }

  public mounted() {
    this.menuService.getOrders().then((data) => {
      this.orders = data;
    });
  }

  public getTotalPrice(order: Array<{}>): number {
    return Math.round(order
      .map((item: any) => item.number * item.price)
      .reduce((a: number, b: number) => a + b, 0) * 100) / 100;
  }
}
