<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="hero" :style="{ backgroundImage: `url(${village.image})` }">
      <div class="hero-content">
        <h1>{{ village.name }}</h1>
        <p class="location">{{ village.location }}</p>
      </div>
    </div>

    <div class="container">
      <div class="detail-content">
        <!-- 历史文化部分 -->
        <div id="history" class="detail-section">
          <h2>历史文化</h2>
          <p>这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...这里是潮州古城的历史文化介绍...</p>
        </div>

        <!-- 环境格局部分 -->
        <div id="environment" class="detail-section">
          <h2>环境格局</h2>
          <p>这里是潮州古城的环境格局介绍...</p>
        </div>

        <!-- 传统建筑部分 -->
        <div id="architecture" class="detail-section">
          <h2>传统建筑</h2>
          <p>这里是潮州古城的传统建筑介绍...</p>
        </div>

        <!-- 民俗文化部分 -->
        <div id="culture" class="detail-section">
          <h2>民俗文化</h2>
          <p>这里是潮州古城的民俗文化介绍...</p>
        </div>

        <!-- 美食物产部分 -->
        <div id="food" class="detail-section">
          <h2>美食物产</h2>
          <p>这里是潮州古城的美食物产介绍...</p>
        </div>

        <!-- 文创产品部分 -->
        <div id="products" class="detail-section">
          <h2>文创产品</h2>
          <p>这里是潮州古城的文创产品介绍...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNavBar from '@/components/DetailNavBar.vue'

export default {
  name: 'ChaozhouGuchenView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 1,
        name: '潮州古城',
        category: 'chaoshan',
        location: '潮州市',
        description: '保存完好的潮州古城，拥有众多明清建筑。古城墙、牌坊街、开元寺等都是著名景点。',
        image: '/images/hong.jpeg'
      }
    }
  }
}
</script>

<style scoped>
.village-detail {
  font-family: "Microsoft YaHei", sans-serif;
}

.hero {
  height: 100vh; /* 改为视口高度 */
  min-height: 600px; /* 设置最小高度 */
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
  url('/images/lan.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: 40px;
  position: relative;
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-content h1 {
  font-size: 42px;
  margin-bottom: 15px;
}

.hero-content .location {
  font-size: 20px;
  margin: 0;
}

.container {
  width: 100%; /* 设置宽度为100% */
  margin: 0 auto;
  padding: 0; /* 移除内边距 */
}

.detail-content {
  background: white;
  padding: 30px;
  border-radius: 0; /* 移除圆角 */
  box-shadow: none; /* 移除阴影 */
  width: 100%; /* 设置宽度为100% */
  margin: 0 auto; /* 居中内容 */
}

.detail-section {
  margin-bottom: 30px;
  padding: 0 20px; /* 添加左右内边距，避免内容贴边 */
}

.detail-section h2 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.detail-section p {
  line-height: 1.8;
  color: #666;
}

@media (max-width: 768px) {
  .hero {
    height: 70vh;
    min-height: 400px;
  }

  .hero-content h1 {
    font-size: 32px;
  }

  .detail-content {
    padding: 20px;
  }

  .detail-section {
    padding: 0 10px; /* 在移动设备上减少内边距 */
  }
}
</style>
