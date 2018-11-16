import { Component, Vue } from 'vue-property-decorator';

import SMenu from '@/presentation/4_sections/s-menu/s-menu.vue';

@Component({
  components: { SMenu },
})
export default class LMain extends Vue {
  public showMenu: boolean = false;

  constructor() {
    super();
  }

  public toggleMenu(value: boolean) {
    this.showMenu = value;
  }
}
