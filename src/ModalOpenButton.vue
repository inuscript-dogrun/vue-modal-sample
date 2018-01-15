<template>
  <button @click="onClick">
    Open Modal
  </button>
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
