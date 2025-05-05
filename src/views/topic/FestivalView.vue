<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/images/dialect-bg.jpg')">
      <button class="back-button" @click="goBack">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回
      </button>
      <h1>广东节日文化</h1>
      <p>岭南风情，岁时节庆</p>
    </div>
    <div class="topic-content">
      <div class="tab-container">
        <div class="tab-header">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>

        <div class="tab-content">
          <!-- 潮汕节日文化 -->
          <div v-if="activeTab === 0" class="culture-section">
            <h2>潮汕节日文化</h2>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="潮汕节日">
              <div class="culture-text">
                <h3>营老爷</h3>
                <p>潮汕地区最隆重的传统民俗活动，每年农历正月到二月，各村各镇都会举行盛大的游神活动，祈求风调雨顺、国泰民安。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="潮汕节日">
              <div class="culture-text">
                <h3>中秋烧塔</h3>
                <p>潮汕中秋节的独特习俗，人们用砖瓦堆砌成空心塔，夜晚时点燃塔内柴草，火光冲天，象征生活红红火火。</p>
              </div>
            </div>
          </div>

          <!-- 广府节日文化 -->
          <div v-if="activeTab === 1" class="culture-section">
            <h2>广府节日文化</h2>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="广府节日">
              <div class="culture-text">
                <h3>广府庙会</h3>
                <p>广州传统元宵庙会，期间有花车巡游、文艺表演、美食展销等活动，展现广府文化的独特魅力。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="广府节日">
              <div class="culture-text">
                <h3>端午龙舟</h3>
                <p>广州地区端午节最重要的活动，各村龙舟队在珠江上竞渡，吸引数十万市民观看，场面壮观。</p>
              </div>
            </div>
          </div>

          <!-- 客家节日文化 -->
          <div v-if="activeTab === 2" class="culture-section">
            <h2>客家节日文化</h2>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="客家节日">
              <div class="culture-text">
                <h3>客家赏灯</h3>
                <p>客家地区特有的元宵节习俗，各村张灯结彩，举行隆重的上灯仪式，庆祝家族添丁进口。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/hong.jpeg" alt="客家节日">
              <div class="culture-text">
                <h3>冬至祭祖</h3>
                <p>客家人视冬至为重要节日，家家户户制作糯米饭、酿酒，并举行祭祖仪式，缅怀先人。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'DialectView',
  components: {
    NavBar
  },
  data() {
    return {
      activeTab: 0,
      tabs: ['潮汕文化', '广府文化', '客家文化']
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.topic-detail {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f8f9fa;
}

.topic-header {
  height: 350px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.topic-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.topic-header h1 {
  font-size: 48px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.topic-header p {
  font-size: 24px;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  z-index: 3;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.topic-content {
  padding: 60px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 标签页样式 */
.tab-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid #eee;
}

.tab-header button {
  padding: 16px 32px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
}

.tab-header button.active {
  color: #e74c3c;
}

.tab-header button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #e74c3c;
  animation: underline 0.3s forwards;
}

@keyframes underline {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.tab-content {
  padding: 30px;
}

.culture-section h2 {
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.culture-item {
  display: flex;
  margin-bottom: 40px;
  gap: 30px;
  align-items: flex-start;
}

.culture-item:last-child {
  margin-bottom: 0;
}

.culture-item img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.culture-text {
  flex: 1;
}

.culture-text h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #e74c3c;
}

.culture-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
}

@media (max-width: 768px) {
  .topic-content {
    padding: 40px 20px;
  }

  .topic-header {
    height: 250px;
  }

  .topic-header h1 {
    font-size: 36px;
  }

  .topic-header p {
    font-size: 18px;
  }

  .culture-item {
    flex-direction: column;
    gap: 20px;
  }

  .culture-item img {
    width: 100%;
    height: 200px;
  }

  .tab-header button {
    padding: 12px 20px;
    font-size: 16px;
  }
}
</style>
