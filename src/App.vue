<script setup>
import HelloWorld from './components/HelloWorld.vue'

console.log('作者:')
console.log('https://github.com/y467770447')

</script>
<template>
  <HelloWorld msg="Vite + Vue"/>
  <div class="fixed">
    <a href="https://github.com/y467770447">
      康康作者的github
    </a>
  </div>
</template>

<style>
* {
  margin: 0 !important;
  padding: 0 !important;
}
.fixed {
  position: fixed;
  top: 50px;
  left: 20px;
  a {
    padding: 10px 20px;
    border-radius: 5px;
    background: rgba(255, 255, 255, .3);
  }
  a:link {
    color: white;
  }
  a:visited {
    color: white;
  }
  a:hover {
    color: white;
  }
  a:active {
    color: white;
  }
}
</style>
