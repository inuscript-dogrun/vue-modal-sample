// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import App from "./App"
import HelloModal from "./HelloModal"
import ModalOpenButton from "./ModalOpenButton"
import "./jquery-hook"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: {
    App,
    HelloModal,
    ModalOpenButton
  }
})
