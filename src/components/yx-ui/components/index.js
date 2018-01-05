import Card from './card';
import CardDetails from './card/card-details.vue';
import CardSetting from './card/setting.vue';
import List from './list';
import Info from './info';
import Tags from './group/tags.vue';
import Accounts from './group/accounts.vue';
import Contacts from './group/contacts.vue';
import DateButton from './group/date-button.vue';
import SortButton from './group/sort-button.vue';
import Moneyflow from './group/moneyflow';
import Modifier from './edit/modifier.vue'; 
import CheckboxList from './list/checkbox-list.vue';
import Accounts3 from './group/accounts3.vue'; 
import City from './group/city.vue';
import Ciudad from './group/ciudad.vue';
import SelecGrupo from './group/yx-seleccionar-grupo.vue';
import Dorm from './group/dorm.vue';
import CardChart from './card/card-chart.vue';
import TitleTime from './title-time/index.vue';
import CarDetails from './title-cardetails/index.vue';
const version = '0.1.2';
const components = [
  Card,
  List,
  Tags,
  Info,
  Accounts,
  Contacts,
  CardSetting,
  CardDetails,
  Modifier,
  Accounts3,  
  Moneyflow,
  City,
  DateButton,
  SortButton,
  Moneyflow, 
  CheckboxList,
  Ciudad,
  SelecGrupo,
  Dorm,
  CardChart,
  TitleTime,
  CarDetails
];

const install = function(Vue) {
  if (install.installed) return;
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  version
};
