<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const progress = ref(0)
let listener = null

onMounted(() => {
  listener = () => {
    const s = document.documentElement.scrollTop || document.body.scrollTop
    const h = document.documentElement.scrollHeight - document.documentElement.clientHeight
    progress.value = h > 0 ? (s / h) * 100 : 0
  }
  window.addEventListener('scroll', listener)
})

onBeforeUnmount(() => {
  if (listener) window.removeEventListener('scroll', listener)
})
</script>

<template>
  <div id="progress-bar" :style="{ width: progress + '%' }"></div>
</template>
</｜DSML｜parameter<｜DSML｜parameter name="file_path">D:\Desktop\git\heiHTML\vue3-encyclopedia\src\components\ProgressBar.vue</｜DSML｜parameter<｜DSML｜parameter name="file_path" string="true">D:\Desktop\git\heiHTML\vue3-encyclopedia\src\components\ProgressBar.vue</｜DSML｜parameter<｜DSML｜parameter name="file_path" string="true">D:\Desktop\git\heiHTML\vue3-encyclopedia\src\components\ProgressBar.vue</｜DSML｜parameter<｜DSML｜parameter name="file_path" string="true">D:\Desktop\git\heiHTML\vue3-encyclopedia\src\components\ProgressBar.vue