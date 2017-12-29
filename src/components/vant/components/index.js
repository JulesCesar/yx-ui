import Actionsheet from './actionsheet';
import AddressEdit from './address-edit';
import AddressList from './address-list';
import Area from './area';
import Badge from './badge';
import BadgeGroup from './badge-group';
import Button from './button';
import Card from './card';
import Cell from './cell';
import CellGroup from './cell-group';
import CellSwipe from './cell-swipe';
import Checkbox from './checkbox';
import CheckboxGroup from './checkbox-group';
import Col from './col';
import ContactCard from './contact-card';
import ContactEdit from './contact-edit';
import ContactList from './contact-list';
import CouponCell from './coupon-cell';
import CouponList from './coupon-list';
// import DatetimePicker from './datetime-picker';
import Dialog from './dialog';
import Field from './field';
import GoodsAction from './goods-action';
import GoodsActionBigBtn from './goods-action-big-btn';
import GoodsActionMiniBtn from './goods-action-mini-btn';
import Icon from './icon';
import ImagePreview from './image-preview';
import Lazyload from './lazyload';
import Loading from './loading';
import NavBar from './nav-bar';
import NoticeBar from './notice-bar';
import NumberKeyboard from './number-keyboard';
import Panel from './panel';
import PasswordInput from './password-input';
// import Picker from './picker';
import Popup from './popup';
import Progress from './progress';
import PullRefresh from './pull-refresh';
import Radio from './radio';
import RadioGroup from './radio-group';
import Row from './row';
import Search from './search';
import Sku from './sku';
import Step from './step';
import Stepper from './stepper';
import Steps from './steps';
import SubmitBar from './submit-bar';
import Swipe from './swipe';
import SwipeItem from './swipe-item';
import Switch from './switch';
import SwitchCell from './switch-cell';
import Tab from './tab';
import Tabbar from './tabbar';
import TabbarItem from './tabbar-item';
import Tabs from './tabs';
import Tag from './tag';
import Toast from './toast';
import TreeSelect from './tree-select';
import Uploader from './uploader';
import Waterfall from './waterfall';
import Num from './number';
// import YxCard from './yx-card';
// import YxFlex from './yx-flex';
// import YxLista from './yx-lista';
// import YxTestbutton from './yx-testbutton';
// import YxTagmini from './yx-tagmini';
// import YxIcon from './yx-icon';
// import YxDetalles from './yx-detalles';
// import YxPequena from './yx-pequena';
// import YxPagination from './yx-pagination';
// import Yxloading from './yx-loading';

const version = '0.10.8';
const components = [
  Actionsheet,
  AddressEdit,
  AddressList,
  Area,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  CellSwipe,
  Checkbox,
  CheckboxGroup,
  Col,
  ContactCard,
  ContactEdit,
  ContactList,
  CouponCell,
  CouponList,
  // DatetimePicker,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  Loading,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  Panel,
  YxPagination,
  PasswordInput,
  // Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Search,
  Sku,
  Step,
  Stepper,
  Steps,
  SubmitBar,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  TreeSelect,
  Uploader,
  Num,
  // YxCard,
  // YxFlex,
  // YxLista,
  // YxTestbutton,
  // YxTagmini,
  // YxIcon,
  // YxDetalles,
  // YxPequena,
  // Yxloading
];

const install = function(Vue) {
  if (install.installed) return;

  components.forEach(component => {
    Vue.component(component.name, component);
  });
  // Vue.$dialog = Vue.prototype.$dialog = Dialog;
  // Vue.$toast = Vue.prototype.$toast = Toast;
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  version,
  Actionsheet,
  AddressEdit,
  AddressList,
  Area,
  Badge,
  BadgeGroup,
  Button,
  Card,
  Cell,
  CellGroup,
  CellSwipe,
  Checkbox,
  CheckboxGroup,
  Col,
  ContactCard,
  ContactEdit,
  ContactList,
  CouponCell,
  CouponList,
  // DatetimePicker,
  Dialog,
  Field,
  GoodsAction,
  GoodsActionBigBtn,
  GoodsActionMiniBtn,
  Icon,
  ImagePreview,
  Lazyload,
  Loading,
  NavBar,
  NoticeBar,
  NumberKeyboard,
  Panel,
  YxPagination,
  PasswordInput,
  // Picker,
  Popup,
  Progress,
  PullRefresh,
  Radio,
  RadioGroup,
  Row,
  Search,
  Sku,
  Step,
  Stepper,
  Steps,
  SubmitBar,
  Swipe,
  SwipeItem,
  Switch,
  SwitchCell,
  Tab,
  Tabbar,
  TabbarItem,
  Tabs,
  Tag,
  Toast,
  TreeSelect,
  Uploader,
  Waterfall,
  Num,
  // YxCard,
  // YxFlex,
  // YxLista,
  // YxTestbutton,
  // YxTagmini,
  // YxIcon,
  // YxDetalles,
  // YxPequena,
  // Yxloading
};
export default {
  install,
  version
};
