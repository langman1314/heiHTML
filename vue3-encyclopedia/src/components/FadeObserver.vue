<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const observer = ref(null)

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.value.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })

  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.value.observe(el)
  })
})

onBeforeUnmount(() => {
  observer.value?.disconnect()
})
</script>

<template>
  <div></div>
</template>