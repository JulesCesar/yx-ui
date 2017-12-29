import Popup from './components/popup';
import Tab from './components/tab';
import Tabbar from './components/tabbar';
import TabbarItem from './components/tabbar-item';
import Tabs from './components/tabs';

const version = '0.10.8';
const components = [
  Popup,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
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
