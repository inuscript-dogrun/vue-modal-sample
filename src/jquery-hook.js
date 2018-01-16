import $ from "jquery"
import { ModalEvent } from "./ModalEvent"

$(function(){
  $("#external-button").click(function(){
    ModalEvent.$emit("openModal")
  })
})
