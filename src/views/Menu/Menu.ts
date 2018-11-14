import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Menu extends Vue {
  private form: any = {};
  constructor() {
    super();
  }

  public onSubmit() {
    // console.log('submittt');
  }
}
