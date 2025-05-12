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
      <!-- 基塘农业系统 -->
      <section class="environment-section">
        <h2 class="section-title">广府基塘农业系统</h2>
        <p class="section-description">
          广府地区利用珠三角冲积平原特点，发展出独特的基塘农业系统：
          挖塘养鱼，塘基植桑养蚕，形成"桑-蚕-鱼"循环农业；
          或塘基种甘蔗制糖，塘泥肥田，构建了高效的生态农业模式。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in jitangImages"
            :key="'jitang-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption">{{ jitangCaptions[index] }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 梯田耕作遗迹 -->
      <section class="environment-section">
        <h2 class="section-title">客家梯田耕作遗迹</h2>
        <p class="section-description">
          客家地区以梯田农业作为生产主业，
          特别是在清远等地，形成了壮观的梯田景观。
          这些梯田不仅是农业生产的重要场所，
          也是客家人与自然和谐共生的智慧结晶。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in tiantianImages"
            :key="'tiantian-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption">{{ tiantianCaptions[index] }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- 古盐场遗址 -->
      <section class="environment-section">
        <h2 class="section-title">潮汕古盐场遗址</h2>
        <p class="section-description">
          潮汕地区自古便是制盐重地，利用得天独厚的日照与海风条件发展晒盐业。
          如汕头濠江区达濠古城的盐田遗迹，历史上为粤东盐运枢纽。
          沿海滩涂还围垦种植甘蔗、莲藕，形成了独特的滩涂生产方式。
        </p>
        <div class="image-grid">
          <div
            v-for="(image, index) in yanchangImages"
            :key="'yanchang-' + index"
            class="image-card"
            :style="{ backgroundImage: 'url(' + image + ')' }"
          >
            <div class="image-overlay">
              <p class="image-caption">{{ yanchangCaptions[index] }}</p>
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
      headerImage: "/yuecunwenmai1/images/生产环境/基塘农业系统/佛山桑基鱼塘.jpeg",
      jitangImages: [
        "/yuecunwenmai1/images/生产环境/基塘农业系统/佛山桑基鱼塘.jpeg",
        "/yuecunwenmai1/images/生产环境/基塘农业系统/佛山西樵山.jpg",
        "/yuecunwenmai1/images/生产环境/基塘农业系统/鹤山桑基鱼塘.jpg"
      ],
      jitangCaptions: [
        "佛山桑基鱼塘 - 桑树与鱼塘的完美结合",
        "佛山西樵山基塘农业景观",
        "鹤山桑基鱼塘 - 传统生态农业模式"
      ],
      tiantianImages: [
        "/yuecunwenmai1/images/生产环境/梯田耕作遗迹/乐昌石下.jpg",
        "/yuecunwenmai1/images/生产环境/梯田耕作遗迹/茂名梯田.jpeg",
        "/yuecunwenmai1/images/生产环境/梯田耕作遗迹/清远连山.jpg",
        "/yuecunwenmai1/images/生产环境/梯田耕作遗迹/清远梯田.jpg"
      ],
      tiantianCaptions: [
        "乐昌石下梯田 - 层叠的田园诗画",
        "茂名梯田 - 山区的农业奇观",
        "清远连山梯田 - 壮瑶民族的智慧结晶",
        "清远梯田 - 四季变换的农业景观"
      ],
      yanchangImages: [
        "/yuecunwenmai1/images/生产环境/古盐场遗址/惠州.png",
        "/yuecunwenmai1/images/生产环境/古盐场遗址/汕头.png",
        "/yuecunwenmai1/images/生产环境/古盐场遗址/湛江.png"
      ],
      yanchangCaptions: [
        "惠州古盐田遗址 - 千年晒盐技艺的见证",
        "汕头达濠古城盐田 - 粤东盐运枢纽",
        "湛江古盐场 - 华南重要的海盐生产基地"
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
