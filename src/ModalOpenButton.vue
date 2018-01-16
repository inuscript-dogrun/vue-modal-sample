<template>
  <div>
    <button @click="onClick">Open from Vue</button>
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
