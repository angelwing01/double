// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate,{ Validator } from 'vee-validate';
// import VueI18n from 'vue-i18n';
import validationMessages from 'vee-validate/dist/locale/zh_CN';
Vue.use(VeeValidate);

// Localize takes the locale object as the second argument (optional) and merges it.
Validator.localize('ar', validationMessages );
// Vue.use(VueI18n);

// const i18n = new VueI18n({locale: 'zh_CN',});
Vue.use(VeeValidate, {
  // i18nRootKey: 'validations', // customize the root path for validation messages.
  // i18n,
  // dictionary: {
  //   en: validationMessages
  // }
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
