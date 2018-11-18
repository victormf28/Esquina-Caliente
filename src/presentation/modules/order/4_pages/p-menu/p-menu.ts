import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { Message } from 'element-ui';

import { MenuService } from '@/services/MenuService';
import LMain from '@/presentation/5_layouts/l-main/l-main.vue';

@Component({
  components: {
    LMain,
  },
})
export default class PMenu extends Vue {
  @State('order') public orderState: any;
  @Mutation('order/UPDATE_CUSTOMER_NAME') public updateCustomerNameMutation: any;

  public activeName: string = 'breakfast';
  public menu: Array<{}> = [];
  public menuSelected: Array<{}> = [];
  private menuService = new MenuService();

  constructor() {
    super();
  }

  public mounted() {
    if (this.orderState.curtomerName !== '') {
      this.menuService.getMenu().then((data) => {
        this.menu = data;
      });
    } else {
      this.$router.push({ name: 'OrderCustomer' });
    }
  }

  public onCard(newItem: any) {
    let isThereItem: boolean = false;

    let item: any;
    for (item of this.menuSelected) {
      if (item.id === newItem.id) {
        isThereItem = true;
      }
    }

    if (!isThereItem) {
      newItem.number = 1;
      this.menuSelected.push(newItem);
    }

    const menuRefs: any = this.$refs.menu;
    menuRefs.setCurrentRow(newItem);
  }

  public onNumberItem(id: number, numberChanged: number) {
    this.menuSelected = this.menuSelected.map((item: any) => {
      if (item.id === id) {
        item.number = numberChanged;
      }
      return item;
    });
  }

  public get totalPrice(): number {
    return Math.round(this.menuSelected
      .map((item: any) => item.number * item.price)
      .reduce((a: number, b: number) => a + b, 0) * 100) / 100;
  }

  public onConfirm() {
    this.menuService.postOrder({
      curtomerName: this.orderState.curtomerName,
      order: this.menuSelected.filter((item: any) => {
        if (parseFloat(item.number) > 0) {
          item.number = parseFloat(item.number);
          return item;
        }
      }),
    }).then(() => {
      Message({
        message: 'Orden registrada exitosamente.',
        type: 'success',
      });
      this.updateCustomerNameMutation('');
      this.$router.push({ name: 'OrderCustomer' });
    });
  }
}
