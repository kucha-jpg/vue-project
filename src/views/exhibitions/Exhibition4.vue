<template>
  <div class="production-environments">
    <NavBar />
    <!-- 头部图片作为背景，包含标题和描述 -->
    <div class="header">
      <div class="header-image" :style="{ backgroundImage: 'url(' + headerImage + ')' }"></div>
      <div class="header-overlay">
        <div class="header-content">
          <h1 class="title">广东传统手工艺展</h1>
          <p class="description">探索广东三大地域独特的传统手工艺与文化传承</p>
        </div>
      </div>
    </div>

    <div class="content">
      <!-- 编织扎作类 -->
      <section class="environment-section">
        <h2 class="section-title">编织扎作类</h2>
        <p class="section-description">
          广东编织扎作工艺历史悠久，技艺精湛。广府地区的佛山彩灯色彩艳丽、造型精美；
          客家竹编以毛竹劈篾编织，轻巧耐用，纹样多样；潮汕地区则有独特的藤编工艺。
          这些编织工艺不仅实用，更蕴含着深厚的文化内涵。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in weavingImages"
            :key="'weaving-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption"> {{ weavingCaptions[index] }} </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 雕刻塑造类 -->
      <section class="environment-section">
        <h2 class="section-title">雕刻塑造类</h2>
        <p class="section-description">
          广东雕刻工艺闻名遐迩，潮汕木雕以多层镂空、金漆贴面著称；
          广府石湾陶塑以"胎毛技法"塑造动物毛发，釉色斑斓；
          端砚雕刻利用天然石眼纹理，研墨"润而不滑"；
          客家木雕则以樟木浮雕"百鸟朝凤"见长。
          这些雕刻工艺展现了广东工匠的精湛技艺和审美追求。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in carvingImages"
            :key="'carving-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption"> {{ carvingCaptions[index] }} </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 金属工艺类 -->
      <section class="environment-section">
        <h2 class="section-title">金属工艺类</h2>
        <p class="section-description">
          广东金属工艺历史悠久，西关铜器以手工捶打"一铜成器"，纹饰精细；
          潮州铁技以锻打技艺制作精美器皿；
          广府牙雕"鬼工球"技艺精湛，清代曾为贡品；
          客家锡器则以刻花鎏金工艺著称。
          这些金属工艺品既是实用器物，也是珍贵的艺术品。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in metalImages"
            :key="'metal-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption"> {{ metalCaptions[index] }} </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 织染绣类 -->
      <section class="environment-section">
        <h2 class="section-title">织染绣类</h2>
        <p class="section-description">
          广东织染绣工艺丰富多彩，广绣以金线绣、绒绣结合，题材多荔枝、孔雀；
          潮绣棉絮填充、金线盘绕，日光下流光溢彩；
          香云纱以薯莨汁浸染，三蒸九煮十八晒，成品"软如罗，亮如漆"；
          客家蓝染以马蓝制靛，纹样独特。
          这些织染绣工艺展现了广东纺织文化的独特魅力。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in textileImages"
            :key="'textile-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption"> {{ textileCaptions[index] }} </p>
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
  name: 'ProductionEnvironmentsView',
  components: {
    NavBar
  },
  data() {
    return {
      headerImage: "/images/特色手工艺/织染绣类/广绣.jpg",
      weavingImages: [
        "/images/特色手工艺/编织扎作类/佛山彩灯1.jpeg",
        "/images/特色手工艺/编织扎作类/佛山彩灯2.jpeg",
        "/images/特色手工艺/编织扎作类/客家竹编1.jpg",
        "/images/特色手工艺/编织扎作类/客家竹编2.jpg",
        "/images/特色手工艺/编织扎作类/客家竹编3.jpg",
        "/images/自然环境/潮汕“五行山墙”防风防火构造/图1.jpg"
      ],
      weavingCaptions: [
        "佛山彩灯 - 色彩艳丽，造型精美",
        "佛山彩灯 - 传统工艺与现代创意结合",
        "客家竹编 - 轻巧耐用的传统工艺",
        "客家竹编 - 精细的胡椒眼纹样",
        "客家竹编 - 实用与美观兼具",
        "潮汕藤编 - 独特的地域特色"
      ],
      carvingImages: [
        "/images/特色手工艺/雕刻塑造类/潮汕木雕.jpg",
        "/images/特色手工艺/雕刻塑造类/端砚1.jpg",
        "/images/特色手工艺/雕刻塑造类/端砚2.jpg",
        "/images/特色手工艺/雕刻塑造类/广府牙雕.jpg",
        "/images/特色手工艺/雕刻塑造类/灰塑.jpg"
      ],
      carvingCaptions: [
        "潮汕木雕 - 多层镂空，金漆贴面",
        "端砚 - 天然石眼纹理，研墨润而不滑",
        "端砚 - 精湛的雕刻工艺",
        "广府牙雕 - 鬼工球技艺精湛",
        "灰塑 - 岭南建筑装饰艺术"
      ],
      metalImages: [
        "/images/特色手工艺/金属工艺类/潮州铁技1.jpg",
        "/images/特色手工艺/金属工艺类/潮州铁技2.jpg",
        "/images/特色手工艺/金属工艺类/西关.png",
        "/images/特色手工艺/金属工艺类/西关铜艺.jpeg"
      ],
      metalCaptions: [
        "潮州铁技 - 传统工艺",
        "潮州铁技 - 传统工艺",
        "西关铜器 - 一铜成器，纹饰精细",
        "西关铜器 - 清代外销精品"
      ],
      textileImages: [
        "/images/特色手工艺/织染绣类/潮绣.jpg",
        "/images/特色手工艺/织染绣类/广绣.jpg",
        "/images/特色手工艺/织染绣类/客家青衫.jpg",
        "/images/特色手工艺/织染绣类/香云纱1.jpg",
        "/images/特色手工艺/织染绣类/香云纱2.jpg"
      ],
      textileCaptions: [
        "潮绣 - 金线盘绕，流光溢彩",
        "广绣 - 绒绣结合，题材丰富",
        "客家蓝染 - 独特的扎染工艺",
        "香云纱 - 三蒸九煮十八晒",
        "香云纱 - 软如罗，亮如漆"
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
