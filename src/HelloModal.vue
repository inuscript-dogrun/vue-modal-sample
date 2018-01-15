<template>
  <modal name="hello-modal">
    <div class="container">
      <slot></slot>
    </div>
  </modal>
</template>

<script>
import Vue from "vue"
import VModal from "vue-js-modal"
import { ModalEvent } from "./ModalEvent"

Vue.use(VModal)

export default {
  mounted(){
    ModalEvent.$on("openModal", () => {
      this.$modal.show("hello-modal")
    })
  }
}
</script>
<style scoped>
.container{
  padding: 1em;
}
</style>
