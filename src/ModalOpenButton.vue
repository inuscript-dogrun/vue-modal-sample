<template>
  <div>
    <slot @click="onClick"></slot>
  </div>
</template>

<script>
import { ModalEvent } from "./ModalEvent"

export default {
  methods:{
    onClick(){
      ModalEvent.$emit("openModal")
    }
  }
}
</script>
