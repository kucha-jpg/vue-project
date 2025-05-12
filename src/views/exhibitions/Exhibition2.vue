<template>
  <div class="architectural-heritage">
    <NavBar />
    <!-- 头部图片作为背景，包含标题和描述 -->
    <div class="header">
      <div class="header-image" :style="{ backgroundImage: 'url(' + headerImage + ')' }"></div>
      <div class="header-overlay">
        <div class="header-content">
          <h1 class="title">广东建筑营造技艺</h1>
          <p class="description">三大地域特色交融，演绎岭南建筑艺术瑰宝</p>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- 广府建筑 -->
      <section class="region-section">
        <h2 class="section-title">广府地区建筑技艺</h2>
        <p class="section-description">
          广府建筑务实、兼容、精巧，善用自然材料，形成了独特的营造体系：
          以天井为中心的"三间两廊"基本单元；曲线优美的镬耳山墙兼具防火抗风功能；
          蚝壳墙厚达60厘米，隔热防潮防盗；青红砖混岩墙"金包银"结构；
          "抬梁式"与"穿斗式"混合结构，梁柱以榫卯连接。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in guangfuImages"
            :key="'guangfu-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption">{{ guangfuCaptions[index] }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 客家建筑 -->
      <section class="region-section">
        <h2 class="section-title">客家地区建筑技艺</h2>
        <p class="section-description">
          客家建筑注重防御与实用，融合山地特色：
          围龙屋式三堂两横一围布局；版筑夯土墙厚达1.5米，冬暖夏凉；
          "冷巷效应"促进空气对流；暗渠排水系统利用地势导雨；
          防火山墙与马头墙防止火势蔓延；彩绘艺术记载家族历史。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in kejiaImages"
            :key="'kejia-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption">{{ kejiaCaptions[index] }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 潮汕建筑 -->
      <section class="region-section">
        <h2 class="section-title">潮汕地区建筑技艺</h2>
        <p class="section-description">
          潮汕建筑融汇闽粤特色，以精细装饰著称：
          红砖与贝灰砂浆构建耐久结构；花岗岩雕刻繁复精美；
          嵌瓷工艺色彩艳丽，耐候性强；金漆木雕多层镂空，贴金饰彩；
          灰塑与彩绘门神兼具艺术与祈福功能，展现海洋文化特色。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in chaoshanImages"
            :key="'chaoshan-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption">{{ chaoshanCaptions[index] }}</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- 返回按钮 -->
    <button class="back-button" @click="$router.go(-1)">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M19 12H6M12 5l-7 7 7 7"></path>
      </svg>
    </button>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'ArchitecturalHeritageView',
  components: {
    NavBar
  },
  data() {
    return {
      headerImage: "/yuecunwenmai1/images/jianzhu/潮汕地区/嵌瓷图2.jpg",
      guangfuImages: [
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/彩绘瓷片画.jpg",
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/灰塑.jpg",
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/镬耳屋山墙.jpg",
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/建筑传统形制——三间两廊.png",
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/麻村寅中祖楼（防御土匪的细长窗）.jpg",
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/满周窗.png",
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/三叠莲花托.jpg",
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/趟栊门.png",
        "/yuecunwenmai1/images/jianzhu/广府（珠三角）地区/驼峰木雕斗拱.jpg"
      ],
      guangfuCaptions: [
        "彩绘瓷片画",
        "灰塑",
        "镬耳屋山墙",
        "建筑传统形制——三间两廊",
        "麻村寅中祖楼（防御土匪的细长窗）",
        "满周窗",
        "三叠莲花托",
        "趟栊门",
        "驼峰木雕斗拱"
      ],
      kejiaImages: [
        "/yuecunwenmai1/images/jianzhu/客家地区/夯土1.jpg",
        "/yuecunwenmai1/images/jianzhu/客家地区/夯土2.jpg",
        "/yuecunwenmai1/images/jianzhu/客家地区/客家围楼.png",
        "/yuecunwenmai1/images/jianzhu/客家地区/客家围楼2.png"
      ],
      kejiaCaptions: [
        "夯土建筑1",
        "夯土建筑2",
        "客家围楼1",
        "客家围楼2"
      ],
      chaoshanImages: [
        "/yuecunwenmai1/images/jianzhu/潮汕地区/贝灰壁画1.jpg",
        "/yuecunwenmai1/images/jianzhu/潮汕地区/贝灰壁画2.jpg",
        "/yuecunwenmai1/images/jianzhu/潮汕地区/潮汕石雕.jpeg",
        "/yuecunwenmai1/images/jianzhu/潮汕地区/潮汕石雕.jpg",
        "/yuecunwenmai1/images/jianzhu/潮汕地区/嵌瓷图1.jpg",
        "/yuecunwenmai1/images/jianzhu/潮汕地区/嵌瓷图2.jpg"
      ],
      chaoshanCaptions: [
        "贝灰壁画1",
        "贝灰壁画2",
        "潮汕石雕1",
        "潮汕石雕2",
        "嵌瓷图1",
        "嵌瓷图2"
      ]
    }
  }
}
</script>

<style scoped>
.architectural-heritage {
  font-family: "Microsoft YaHei", sans-serif;
  background-color: #f5f5f5;
  min-height: 100vh;
  position: relative;
}

/* 头部样式 */
.header {
  position: relative;
  height: 400px;
  width: 100%;
  overflow: hidden;
}

.header-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.header-content {
  text-align: center;
  padding: 20px;
  max-width: 800px;
}

.title {
  font-size: 3rem;
  margin-bottom: 20px;
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.description {
  font-size: 1.5rem;
  line-height: 1.6;
  color: #e0e0e0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* 内容区域 */
.content {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.region-section {
  margin-bottom: 60px;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #2c3e50;
  margin-bottom: 15px;
  font-size: 2rem;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
}

.section-description {
  color: #555;
  line-height: 1.8;
  margin-bottom: 30px;
  font-size: 1.1rem;
}

/* 图片网格 */
.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.image-card {
  position: relative;
  height: 250px;
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.image-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 15px;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.image-card:hover .image-overlay {
  transform: translateY(0);
}

.image-caption {
  margin: 0;
  font-size: 0.9rem;
  text-align: center;
}

/* 返回按钮样式 */
.back-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #8b4513;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;
}

.back-button:hover {
  background-color: #a0522d;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.back-button svg {
  width: 24px;
  height: 24px;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .header {
    height: 300px;
  }

  .title {
    font-size: 2rem;
  }

  .description {
    font-size: 1.2rem;
  }

  .region-section {
    padding: 20px;
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 1.5rem;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }

  .image-card {
    height: 200px;
  }

  .back-button {
    bottom: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
  }

  .back-button svg {
    width: 20px;
    height: 20px;
  }
}
</style>
