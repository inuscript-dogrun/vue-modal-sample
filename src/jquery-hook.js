import $ from "jquery"
import { ModalEvent } from "./ModalEvent"

$(function(){
  $("#jquery-external-button").click(function(){
    ModalEvent.$emit("openModal")
  })
})
