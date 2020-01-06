<template>
  <div class="home">
    <h1>Home</h1>
    <Slotreel />
    <SlotreelButton />
  </div>
</template>

<script>
// @ is an alias to /src
import { Component, Watch, Vue } from "vue-property-decorator";
import Slotreel from "../components/Slotreel";
import SlotreelButton from "../components/SlotreelButton";

export default {
  name: "home",
  components: {
    Slotreel,
    SlotreelButton
  }
};
</script>
