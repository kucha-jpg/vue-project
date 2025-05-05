<template>
  <div class="exhibition-wrapper">
    <div class="exhibition-header">
      <h1>丝绸之路文物展</h1>
      <p class="tagline">连接东西方的文明纽带</p>
    </div>

    <div class="exhibition-grid">
      <div class="main-content">
        <section class="exhibition-about">
          <h2>关于展览</h2>
          <p>丝绸之路是古代东西方文明交流的重要通道，本次展览汇集了沿线各国博物馆的珍贵文物200余件，包括丝绸、陶瓷、金银器、佛教艺术等珍贵展品。</p>
          <p>展览通过"商贸往来"、"文化交流"、"宗教传播"、"科技交流"四个单元，全面展示丝绸之路在人类文明史上的重要地位。</p>
        </section>

        <section class="highlights">
          <h2>重点展品</h2>
          <div class="highlight-grid">
            <div class="highlight-item" v-for="item in highlights" :key="item.id">
              <div class="highlight-image">
                <img :src="item.image" :alt="item.name">
              </div>
              <h3>{{ item.name }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </section>
      </div>

      <aside class="exhibition-sidebar">
        <div class="sidebar-widget">
          <h3>展览信息</h3>
          <p><strong>日期：</strong>2023年11月1日 - 2024年2月28日</p>
          <p><strong>时间：</strong>9:00 - 18:00</p>
          <p><strong>地点：</strong>博物馆西区一楼展厅</p>
          <p><strong>票价：</strong>￥120（含特展门票）</p>
        </div>

        <div class="sidebar-widget">
          <h3>相关活动</h3>
          <ul>
            <li>11/5 专家讲座：丝绸之路的历史意义</li>
            <li>11/15 亲子活动：模拟丝绸之路贸易</li>
            <li>12/1 音乐会：丝绸之路沿线民族音乐</li>
          </ul>
        </div>
      </aside>
    </div>

    <button @click="goBack" class="back-button">←</button>
  </div>
</template>

<script>
export default {
  name: 'Exhibition5',
  data() {
    return {
      highlights: [
        {
          id: 1,
          name: "唐代丝绸残片",
          image: require("@/assets/exhibitions/silk-road-1.jpg"),
          description: "出土于敦煌莫高窟，展示了唐代高超的织造技艺。"
        },
        {
          id: 2,
          name: "罗马金币",
          image: require("@/assets/exhibitions/silk-road-2.jpg"),
          description: "公元2世纪罗马帝国金币，在丝绸之路沿线多有发现。"
        },
        {
          id: 3,
          name: "胡人俑",
          image: require("@/assets/exhibitions/silk-road-3.jpg"),
          description: "唐代陶俑，生动展现了丝绸之路上的商旅形象。"
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1); // 返回上一页
    }
  }
}
</script>

<style scoped>
.exhibition-wrapper {
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

.tagline {
  font-size: 1.2rem;
  color: #666;
  margin-top: 10px;
}

.exhibition-grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
}

.main-content {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.exhibition-sidebar {
  position: sticky;
  top: 20px;
  align-self: start;
}

.sidebar-widget {
  background: #f5f5f5;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
}

.sidebar-widget h3 {
  margin-top: 0;
  color: #333;
}

.highlight-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.highlight-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.highlight-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.highlight-item h3 {
  margin: 15px;
  font-size: 1.1rem;
}

.highlight-item p {
  margin: 0 15px 15px;
  color: #666;
  font-size: 0.9rem;
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

@media (max-width: 768px) {
  .exhibition-grid {
    grid-template-columns: 1fr;
  }

  .exhibition-sidebar {
    position: static;
  }
}
</style>
