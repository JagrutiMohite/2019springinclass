<template>
    <div class="container">
      <Nav/>
  <div id="main" />
    <div class="alert alert-primary" role="alert" v-for="(e, i) in Globals.errors" :key="i">
      <button type="button" class="close" aria-label="Close" @click="Globals.deleteError(i)">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
      </button>
      <strong>{{e.msg}}!!</strong> You should check in on some of those fields below.
    </div>
    <router-view />
     </div>
</template>

<script>
import Nav from "@/components/Nav";
import { Globals } from "@/models/api";
export default {
  data: ()=> ({
    Globals: Globals
  }),
  components: {
    Nav
  }
}
</script>

<style lang="scss">

</style>
