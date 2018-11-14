import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private form: any = {};
  constructor() {
    super();
  }

  public onSubmit() {
    this.$router.push({ name: 'menu' });
  }
}
