<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { sections } from './data/sections.js'
import ProgressBar from './components/ProgressBar.vue'
import NavSidebar from './components/NavSidebar.vue'
import HeroBanner from './components/HeroBanner.vue'
import FadeObserver from './components/FadeObserver.vue'

const ready = ref(false)

onMounted(() => {
  ready.value = true
})
</script>

<template>
  <ProgressBar />
  <NavSidebar />
  <FadeObserver />

  <div class="wrapper">
    <HeroBanner />

    <section
      v-for="sec in sections"
      :key="sec.id"
      class="section fade-in"
      :id="sec.id"
    >
      <p class="section-label">{{ sec.label }}</p>
      <h2 class="section-title">
        <span class="num">{{ sec.num }}</span>{{ sec.title }}
      </h2>
      <p v-if="sec.desc" class="section-desc" v-html="sec.desc"></p>
      <div v-html="sec.content"></div>
    </section>

    <div class="banner" style="margin-top: 120px;">
      <p>黑暗不是结束，黑暗是一套正在消化生命的生态系统。<br>而你们，是它从未预料过的变量。</p>
    </div>
  </div>
</template>