<script setup>
import { ref, computed } from 'vue'
import { sections } from './data/sections.js'
import { chapterGroups } from './data/groups.js'
import { deepLogic } from './data/deep-logic.js'
import { phase1Expansion } from './data/phase1-expansion.js'
import { consistencyCheck } from './data/consistency-check.js'
import { deepQuestions } from './data/deep-questions.js'
import { phase2System } from './data/phase2-system.js'
import { phase2Skills } from './data/phase2-skills.js'
import { phase3Civilization } from './data/phase3-civilization.js'
import { phase3Legacy } from './data/phase3-legacy.js'
import { phase3Conflict } from './data/phase3-conflict.js'
import { phase3Language } from './data/phase3-language.js'
import { frameworkDimensions } from './data/framework-dimensions.js'
import { phase4Life } from './data/phase4-life.js'
import { phase4Law } from './data/phase4-law.js'
import { phase4Daily } from './data/phase4-daily.js'
import { phase5Antagonists } from './data/phase5-antagonists.js'
import { phase5Protagonist } from './data/phase5-protagonist.js'
import { phase6Fragments } from './data/phase6-fragments.js'
import { phase6Endgame } from './data/phase6-endgame.js'
import { phase6EndgameDebate } from './data/phase6-endgame-debate.js'
import { phase2Beasts } from './data/phase2-beasts.js'
import { combatDeduction } from './data/combat-deduction.js'
import ProgressBar from './components/ProgressBar.vue'
import HeroBanner from './components/HeroBanner.vue'

const activeGroupIndex = ref(0)
const activeSectionId = ref(null)
const showOverview = ref(true)

const sectionMap = {}
sections.forEach(s => { sectionMap[s.id] = s })
deepLogic.forEach(s => { sectionMap[s.id] = s })
phase1Expansion.forEach(s => { sectionMap[s.id] = s })
consistencyCheck.forEach(s => { sectionMap[s.id] = s })
deepQuestions.forEach(s => { sectionMap[s.id] = s })
phase2System.forEach(s => { sectionMap[s.id] = s })
phase2Skills.forEach(s => { sectionMap[s.id] = s })
phase3Civilization.forEach(s => { sectionMap[s.id] = s })
phase3Legacy.forEach(s => { sectionMap[s.id] = s })
phase3Conflict.forEach(s => { sectionMap[s.id] = s })
phase3Language.forEach(s => { sectionMap[s.id] = s })
frameworkDimensions.forEach(s => { sectionMap[s.id] = s })
phase4Life.forEach(s => { sectionMap[s.id] = s })
phase4Law.forEach(s => { sectionMap[s.id] = s })
phase4Daily.forEach(s => { sectionMap[s.id] = s })
phase5Antagonists.forEach(s => { sectionMap[s.id] = s })
phase5Protagonist.forEach(s => { sectionMap[s.id] = s })
phase6Fragments.forEach(s => { sectionMap[s.id] = s })
phase6Endgame.forEach(s => { sectionMap[s.id] = s })
phase6EndgameDebate.forEach(s => { sectionMap[s.id] = s })
phase2Beasts.forEach(s => { sectionMap[s.id] = s })
combatDeduction.forEach(s => { sectionMap[s.id] = s })

const currentGroup = computed(() => chapterGroups[activeGroupIndex.value])
const currentSection = computed(() => activeSectionId.value ? sectionMap[activeSectionId.value] : null)

function selectSection(id) {
  activeSectionId.value = id
  showOverview.value = false
}

function goBackToGroup() {
  showOverview.value = true
  activeSectionId.value = null
}

function switchGroup(index) {
  activeGroupIndex.value = index
  showOverview.value = true
  activeSectionId.value = null
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <ProgressBar />

  <!-- 左侧目录树 -->
  <nav class="tree-nav">
    <div class="tree-header" @click="switchGroup(-1); showOverview=true; activeSectionId=null">
      <span class="tree-logo">◈</span>
      <span>无光域</span>
    </div>
    <div
      v-for="(group, gi) in chapterGroups"
      :key="gi"
      class="tree-group"
      :class="{ active: gi === activeGroupIndex && showOverview }"
      @click="switchGroup(gi)"
    >
      <span class="tree-group-icon">{{ group.icon }}</span>
      <span class="tree-group-name">{{ group.name }}</span>
      <span class="tree-group-count">{{ group.ids.length }}</span>
    </div>
    <!-- 展开当前组的章节列表 -->
    <div v-if="!showOverview && currentGroup" class="tree-sections">
      <div
        v-for="id in currentGroup.ids"
        :key="id"
        class="tree-section"
        :class="{ active: activeSectionId === id }"
        @click="selectSection(id)"
      >
        <span class="tree-num">{{ sectionMap[id]?.num }}</span>
        <span class="tree-sname">{{ sectionMap[id]?.title }}</span>
      </div>
    </div>
  </nav>

  <div class="main-area">
    <!-- 首屏 -->
    <HeroBanner />

    <!-- 概览模式：显示当前组所有章节 -->
    <div v-if="showOverview" class="wrapper">
      <div class="group-header">
        <span class="group-header-icon">{{ currentGroup.icon }}</span>
        <h2 class="group-header-title">{{ currentGroup.name }}</h2>
        <p class="group-header-count">{{ currentGroup.ids.length }} 章节</p>
      </div>
      <div class="chapter-grid">
        <div
          v-for="id in currentGroup.ids"
          :key="id"
          class="chapter-card"
          @click="selectSection(id)"
        >
          <span class="chapter-num">{{ sectionMap[id]?.num }}</span>
          <h3 class="chapter-title">{{ sectionMap[id]?.title }}</h3>
          <p class="chapter-desc">{{ sectionMap[id]?.summary || sectionMap[id]?.desc || '...' }}</p>
        </div>
      </div>
      <!-- 组切换导航 -->
      <div class="group-nav">
        <button
          v-for="(group, gi) in chapterGroups"
          :key="gi"
          class="group-nav-btn"
          :class="{ current: gi === activeGroupIndex }"
          @click="switchGroup(gi)"
        >
          {{ group.icon }} {{ group.name }}
        </button>
      </div>
    </div>

    <!-- 章节详情模式 -->
    <div v-else-if="currentSection" class="wrapper">
      <div class="detail-nav">
        <button class="back-btn" @click="goBackToGroup">← 返回 {{ currentGroup.name }}</button>
        <button class="top-btn" @click="scrollToTop">↑ 顶部</button>
      </div>
      <section class="section-detail">
        <p class="section-label">{{ currentSection.sub || currentSection.label || '' }}</p>
        <h2 class="section-title">
          <span class="num">{{ currentSection.num }}</span>{{ currentSection.title }}
        </h2>
        <p v-if="currentSection.summary" class="section-desc summary-line" v-html="currentSection.summary"></p>
        <p v-if="currentSection.desc" class="section-desc" v-html="currentSection.desc"></p>
        <div v-html="currentSection.content"></div>
      </section>
      <!-- 同组翻页 -->
      <div class="detail-pager">
        <div
          v-if="currentGroup.ids.indexOf(activeSectionId) > 0"
          class="pager-btn prev"
          @click="selectSection(currentGroup.ids[currentGroup.ids.indexOf(activeSectionId) - 1])"
        >← 上一章</div>
        <div
          v-if="currentGroup.ids.indexOf(activeSectionId) < currentGroup.ids.length - 1"
          class="pager-btn next"
          @click="selectSection(currentGroup.ids[currentGroup.ids.indexOf(activeSectionId) + 1])"
        >下一章 →</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tree-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100vh;
  background: #0c0c16;
  border-right: 1px solid #1e1e2a;
  z-index: 100;
  overflow-y: auto;
  padding: 12px 0;
}
.tree-nav::-webkit-scrollbar { width: 3px; }
.tree-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 18px;
  color: #d7b56d;
  font-size: 15px;
  letter-spacing: 4px;
  cursor: pointer;
  border-bottom: 1px solid #1e1e2a;
  margin-bottom: 6px;
}
.tree-logo { font-size: 18px; }
.tree-group {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  cursor: pointer;
  transition: all .2s;
  border-left: 2px solid transparent;
  font-size: 13px;
  color: #9c988e;
}
.tree-group:hover { background: rgba(215,181,109,.06); color: #d4d0c4; }
.tree-group.active {
  background: rgba(215,181,109,.1);
  border-left-color: #d7b56d;
  color: #f0e6c8;
}
.tree-group-icon { font-size: 14px; width: 16px; text-align: center; }
.tree-group-name { flex: 1; }
.tree-group-count { font-size: 11px; color: #4a4555; }
.tree-sections {
  background: rgba(0,0,0,.2);
  padding: 4px 0;
}
.tree-section {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 18px 7px 32px;
  cursor: pointer;
  font-size: 12px;
  color: #8a8478;
  transition: all .2s;
}
.tree-section:hover { color: #d4d0c4; background: rgba(215,181,109,.04); }
.tree-section.active { color: #d7b56d; }
.tree-num { color: #4a4555; font-size: 11px; width: 22px; }
.tree-sname { flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.main-area {
  margin-left: 200px;
  min-height: 100vh;
}

.group-header {
  text-align: center;
  padding: 50px 20px 20px;
  border-bottom: 1px solid #1e1e2a;
  margin-bottom: 40px;
}
.group-header-icon { font-size: 32px; color: #d7b56d; display: block; margin-bottom: 10px; }
.group-header-title { font-size: 28px; font-weight: 300; color: #f0e6c8; letter-spacing: 6px; }
.group-header-count { color: #4a4555; font-size: 13px; margin-top: 6px; letter-spacing: 2px; }

.chapter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.chapter-card {
  background: linear-gradient(145deg,#12121c,#161622);
  border: 1px solid #22202e;
  border-radius: 14px;
  padding: 22px;
  cursor: pointer;
  transition: all .3s;
}
.chapter-card:hover {
  border-color: #3d3850;
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0,0,0,.4);
}
.chapter-num { display: block; color: #4a4555; font-size: 12px; letter-spacing: 2px; margin-bottom: 8px; }
.chapter-title { font-size: 17px; color: #f0e6c8; font-weight: 400; margin-bottom: 8px; letter-spacing: 1px; }
.chapter-desc { font-size: 13px; color: #8a8478; line-height: 1.7; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

.group-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 60px;
  padding: 0 20px 80px;
}
.group-nav-btn {
  background: #14141e;
  border: 1px solid #282536;
  color: #9c988e;
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 13px;
  transition: all .25s;
}
.group-nav-btn:hover, .group-nav-btn.current {
  border-color: #d7b56d;
  color: #f0e6c8;
  background: rgba(215,181,109,.08);
}

.detail-nav {
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: 1px solid #1e1e2a;
  margin-bottom: 30px;
}
.back-btn, .top-btn {
  background: transparent;
  border: 1px solid #2a2736;
  color: #9c988e;
  padding: 8px 18px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 13px;
  transition: all .25s;
}
.back-btn:hover, .top-btn:hover {
  border-color: #d7b56d;
  color: #f0e6c8;
}

.section-detail {
  max-width: 960px;
  margin: 0 auto;
}

.detail-pager {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  padding-bottom: 80px;
}
.pager-btn {
  background: #14141e;
  border: 1px solid #282536;
  color: #9c988e;
  padding: 10px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all .25s;
}
.pager-btn:hover {
  border-color: #d7b56d;
  color: #f0e6c8;
}
.pager-btn.next { margin-left: auto; }

@media (max-width: 768px) {
  .tree-nav { display: none; }
  .main-area { margin-left: 0; }
  .chapter-grid { grid-template-columns: 1fr; }
}
</style>