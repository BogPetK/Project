import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router/index';
import store from './store';
import fb from 'firebase';

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
  router:router,
  store,
  created(){
    var firebaseConfig = {
		apiKey: "AIzaSyApbPy9NDG0Id9l0De52lgyuTEljkyIXJ4",
		authDomain: "add-pro-d0700.firebaseapp.com",
		projectId: "add-pro-d0700",
		storageBucket: "add-pro-d0700.appspot.com",
		messagingSenderId: "1040705855613",
		appId: "1:1040705855613:web:b08e03cddbb2906ca15114",
		measurementId: "G-NE90367VBY"
	};
	
	// Initialize Firebase
	fb.initializeApp(firebaseConfig);
	fb.getAnalytics();
	fb.auth().onAuthStateChanged(user => {
		if (user) {
			this.$store.dispatch('autoLoginUser', user)
		}
   })
   this.$store.dispatch('fetchAds')

}
}).$mount('#app');
