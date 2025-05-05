<template>
  <div class="exhibition-page">
    <header class="exhibition-header">
      <h1>古代青铜器展</h1>
      <p class="subtitle">穿越三千年的文明印记</p>
    </header>

    <section class="exhibition-intro">
      <div class="intro-text">
        <h2>青铜文明的光辉</h2>
        <p>本次展览精选商周时期青铜器珍品100余件，包括国家一级文物30余件，全面展示中国古代青铜文化的辉煌成就。</p>
        <p>展览分为"礼器"、"兵器"、"乐器"、"生活用具"四个部分，系统呈现青铜器的功能与艺术价值。</p>
      </div>
      <div class="intro-image">
        <img src="/images/1.jpg" alt="青铜器展">
      </div>
    </section>

    <section class="exhibition-info">
      <div class="info-card">
        <h3>展览信息</h3>
        <p><strong>日期：</strong>2023年9月15日 - 2024年1月15日</p>
        <p><strong>地点：</strong>博物馆东区二楼展厅</p>
        <p><strong>开放时间：</strong>9:30 - 17:30（16:30停止入场）</p>
        <p><strong>票价：</strong>￥60（周三免费开放）</p>
      </div>
    </section>

    <button @click="goBack" class="back-button">←</button>
  </div>
</template>

<script>
export default {
  name: 'Exhibition3',
  methods: {
    goBack() {
      this.$router.go(-1); // 返回上一页
    }
  }
}
</script>

<style scoped>
.exhibition-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  min-height: 100vh;
  padding-bottom: 80px; /* 为按钮留出空间 */
}

.exhibition-header {
  text-align: center;
  margin-bottom: 40px;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;
}

.exhibition-intro {
  display: flex;
  gap: 30px;
  margin-bottom: 50px;
}

.intro-text {
  flex: 1;
}

.intro-image {
  flex: 1;
}

.intro-image img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.exhibition-info {
  margin-top: 50px;
}

.info-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.back-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 100;
}

.back-button:hover {
  background-color: #555;
  transform: scale(1.1);
}
</style>
