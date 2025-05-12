<template>
  <div class="production-environments">
    <NavBar />
    <!-- 头部图片作为背景，包含标题和描述 -->
    <div class="header">
      <div class="header-image" :style="{ backgroundImage: 'url(' + headerImage + ')' }"></div>
      <div class="header-overlay">
        <div class="header-content">
          <h1 class="title">广东传统生产环境展</h1>
          <p class="description">探索广东三大地区独特的生产方式与自然环境的和谐共生</p>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- 潮汕五行山墙 -->
      <section class="environment-section">
        <h2 class="section-title">潮汕"五行山墙"防风防火构造</h2>
        <p class="section-description">
          潮汕地区的五行山墙（又称"厝角头"）是传统民居建筑中极具特色的构造元素，其设计不仅承载着风水文化的象征意义，更在防风、防火等实用功能上展现了高超的营造智慧。山墙形态与屋主命理五行相配，调和建筑与自然的关系，如商宅多用"木式"助财，书斋用"金式"旺文运。防风上，山墙高度通常超出屋顶1-2米，将强风分导至两侧，减少对屋顶的直接冲击；"水式""金式"山墙的弧形轮廓可引导气流平滑通过，避免直角处形成风压集中。防火上，山墙作为建筑间的防火墙，厚度可达60厘米以上，高出屋顶形成隔离带，阻断火势横向蔓延。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in wuxingImages"
            :key="'wuxing-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          ></div>
        </div>
      </section>

      <!-- 广府冷巷通风系统 -->
      <section class="environment-section">
        <h2 class="section-title">广府村落"冷巷"通风系统</h2>
        <p class="section-description">
          广府村落的冷巷通风系统是岭南传统建筑应对湿热气候的核心智慧之一，通过窄巷高墙的物理构造与自然风压、热压的协同作用，形成高效的气流循环，显著改善微气候。通常仅0.8-1.5米，狭窄空间加速风速（文丘里效应），如广州西关大屋的青云巷宽仅1.2米。两侧建筑高6-8米，高宽比达5:1以上，形成"狭管效应"引导气流。高墙遮挡直射阳光，地面与墙面采用青砖或麻石铺砌，蓄热低，减少热辐射，巷内偶植芭蕉或爬藤植物，通过蒸腾作用降温。冷巷多与夏季主导风向（东南风）平行，狭窄巷道使自然风速提高2-3倍，形成"穿堂风"直入天井与室内。天井受日照加热，热空气上升后从屋顶排出，冷巷因遮阳温度较低，冷空气从巷道底部补充，部分冷巷连接高耸镬耳山墙，形成竖向拔风通道。冷巷地下设暗沟，雨水沿青砖缝隙渗入排水系统，冷巷作为建筑间的天然防火带，阻断火势蔓延，冷巷成为邻里交流通道。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in lengxiangImages"
            :key="'lengxiang-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          ></div>
        </div>
      </section>

      <!-- 肇庆黎槎村八卦水网 -->
      <section class="environment-section">
        <h2 class="section-title">肇庆黎槎村八卦形水网</h2>
        <p class="section-description">
          肇庆黎槎村的八卦水网是其村落规划的核心特色，巧妙融合了风水理念、水利智慧与宗族文化，形成了一套独特的生态-社会系统。村落中心设圆形水池象征"太极"，为全村水系枢纽，连接八条放射状水渠，对应八卦方位，外围人工开凿环形河道，形似八卦外圈，既为防御屏障，又调节水流。主巷道旁依八卦方位设明渠或暗沟，宽约0.5-1米，青石砌筑，与建筑地基齐平，八卦方位交点处设小型池塘，如"坎位池"用于蓄水，"离位池"兼顾消防。暴雨时，中心水池蓄积初雨，外围环形河道泄洪，防止内涝，巷道暗渠底部铺鹅卵石，加速雨水下渗，减少地表径流。夏季水网蒸发带走热量，实测村中心比周边平原温度低2-3℃，水渠与巷道平行，利用"狭管效应"引导东南风入村。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in baguaImages"
            :key="'bagua-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          ></div>
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
  name: 'ProductionEnvironmentsView',
  components: {
    NavBar
  },
  data() {
    return {
      headerImage: "/yuecunwenmai1/images/guangfudiqu/dalingcun/dalingcun11.png",
      wuxingImages: [
        "/yuecunwenmai1/images/自然环境/潮汕“五行山墙”防风防火构造/图1.jpg",
        "/yuecunwenmai1/images/自然环境/潮汕“五行山墙”防风防火构造/图2.jpg",
        "/yuecunwenmai1/images/自然环境/潮汕“五行山墙”防风防火构造/图3.jpg"
      ],
      lengxiangImages: [
        "/yuecunwenmai1/images/自然环境/广府村落“冷巷”通风系统/大意图.png",
        "/yuecunwenmai1/images/自然环境/广府村落“冷巷”通风系统/冷巷示意图.png",
        "/yuecunwenmai1/images/自然环境/广府村落“冷巷”通风系统/实地图.png",
        "/yuecunwenmai1/images/自然环境/广府村落“冷巷”通风系统/室内冷巷.png"
      ],
      baguaImages: [
        "/yuecunwenmai1/images/自然环境/肇庆黎槎村八卦形水网/俯瞰图.png",
        "/yuecunwenmai1/images/自然环境/肇庆黎槎村八卦形水网/古下水道.png"
      ]
    }
  }
}
</script>

<style scoped>
.production-environments {
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

.environment-section {
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

  .environment-section {
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
