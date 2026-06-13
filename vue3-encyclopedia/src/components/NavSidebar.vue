<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { navItems } from '../data/nav.js'

const activeId = ref('')
const observer = ref(null)

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
      }
    })
  }, { threshold: 0.25 })

  document.querySelectorAll('.section').forEach((el) => {
    observer.value.observe(el)
  })
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
})
</script>

<template>
  <nav class="nav-sidebar" id="nav-sidebar">
    <div
      v-for="item in navItems"
      :key="item.id"
      class="nav-dot"
      :class="{ active: activeId === item.id }"
      :data-target="item.id"
      @click="scrollTo(item.id)"
    >
      <span class="tooltip">{{ item.name }}</span>
    </div>
  </nav>
</template>
</｜DSML｜parameter<｜DSML｜parameter name="file_path">D:\Desktop\git\heiHTML\vue3-encyclopedia\src\components\NavSidebar.vue