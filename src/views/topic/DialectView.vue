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
      <h1>广东方言音律</h1>
      <p>聆听岭南各地的方言歌谣，感受独特的语音魅力</p>
    </div>
    <div class="topic-content">
      <!-- 地区导航标签 -->
      <div class="region-tabs">
        <button
          v-for="region in regions"
          :key="region.id"
          :class="{ active: activeRegion === region.id }"
          @click="activeRegion = region.id"
        >
          {{ region.name }}
        </button>
      </div>

      <!-- 地区内容区域 -->
      <div class="region-content">
        <!-- 潮汕方言 -->
        <div v-if="activeRegion === 'chaoshan'" class="region-section">
          <h2>潮汕方言</h2>
          <div class="dialect-card">
            <div class="dialect-text">
              <h3>潮汕方言特点</h3>
              <p>潮汕话属于闽南语系，保留了古汉语的许多特征，如完整的八声调系统。潮汕方言中保留了大量的古汉语词汇和语法结构，是研究汉语发展史的重要资料。</p>
              <p>潮汕地区有着丰富的民歌资源，如潮州歌册、潮剧等，这些艺术形式中蕴含着独特的潮汕方言音律美感。</p>
            </div>
          </div>
        </div>

        <!-- 广府方言 -->
        <div v-if="activeRegion === 'guangfu'" class="region-section">
          <h2>广府方言</h2>
          <div class="dialect-card">
            <div class="dialect-text">
              <h3>广府话特点</h3>
              <p>粤语是广东最主要的方言，俗称"白话"，使用人口占广东省的大部分。粤语有完整的九声六调，保留了较多古汉语的特征。</p>
              <p>广东音乐和粤剧是广府方言音律的重要载体，如《雨打芭蕉》、《平湖秋月》等经典曲目，展现了粤语独特的韵律美感。</p>
              <p>粤语歌曲更是华语流行音乐的重要组成部分，影响了整个华语乐坛的发展。</p>
            </div>
          </div>
        </div>

        <!-- 客家方言 -->
        <div v-if="activeRegion === 'hakka'" class="region-section">
          <h2>客家方言</h2>
          <div class="dialect-card">
            <div class="dialect-text">
              <h3>客家话特点</h3>
              <p>客家话保留了较多古汉语的语音特点，如完整的入声系统。客家方言分布广泛，主要分布在粤东、粤北地区。</p>
              <p>客家山歌是客家方言音律的代表，其歌词通俗易懂，旋律优美，反映了客家人的生活情感和历史记忆。</p>
              <p>客家方言中保留了许多古汉语词汇，如"食"(吃)、"行"(走)等，是研究汉语演变的重要资料。</p>
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
      activeRegion: 'chaoshan', // 默认显示潮汕
      regions: [
        { id: 'chaoshan', name: '潮汕方言' },
        { id: 'guangfu', name: '广府方言' },
        { id: 'hakka', name: '客家方言' }
      ]
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

/* 地区标签样式 */
.region-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  border-bottom: 1px solid #e9ecef;
}

.region-tabs button {
  padding: 12px 24px;
  margin: 0 10px;
  background: none;
  border: none;
  border-bottom: 2px solid transparent;
  font-size: 18px;
  color: #495057;
  cursor: pointer;
  transition: all 0.3s ease;
}

.region-tabs button:hover {
  color: #007bff;
}

.region-tabs button.active {
  border-bottom-color: #007bff;
  color: #007bff;
  font-weight: 500;
}

/* 地区内容样式 */
.region-section {
  margin-bottom: 60px;
}

.region-section h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #343a40;
  text-align: center;
}

.dialect-card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin-bottom: 30px;
}

.dialect-text {
  padding: 30px;
}

.dialect-text h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #495057;
}

.dialect-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #6c757d;
  margin-bottom: 15px;
}

/* 响应式调整 */
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

  .region-tabs button {
    padding: 8px 16px;
    margin: 0 5px;
    font-size: 16px;
  }

  .region-section h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .dialect-text {
    padding: 20px;
  }
}
</style>
