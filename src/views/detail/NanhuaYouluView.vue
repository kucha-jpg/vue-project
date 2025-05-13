<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>南华又庐简介</h2>
          <div class="text-content">
            <p>南华又庐是位于广东省梅州市梅县区南口镇侨乡村的一座著名客家围屋，被誉为梅州地区规模最大、保存最完好的客家民居之一。始建于清光绪十二年（1886年），历时18年，于清光绪三十年（1904年）完工。</p>
            <p>南华又庐占地10816平方米，建筑面积11220平方米，是典型的客家围屋结构，采用"三堂两横一枕屋"布局，平面呈方形，中轴对称。南华又庐坐西北朝东南，为上下两层结构，正立面为硬山式，土木石结构，灰瓦覆顶。</p>
            <p>全屋共有118间房，大小厅堂几十个，分为上、中、下三堂，左右横屋各四堂，共八堂。其后部本应为半月形围屋，却变为二层长条形的枕杠，横置如枕，因此得名"枕式围龙屋"。各堂屋均可独立，又可通过走廊连为一体，形成"屋中屋"的独特格局。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>建筑特色</h2>
          <div class="text-content">
            <p>屋内雕梁画栋，装饰精美，厅堂、屏风、过道等处多有题词绘画，内容以表志抒怀和花鸟山水为主。墙脚绘有淡雅壁画，增添了艺术氛围。屋内建有"自来水"设施，从后山引水，通过地下暗渠流经各用水区域，寓意"财富如水，长流不断"。此外，还有"鱼乐"戏台，供娱乐之用。</p>
            <p>南华又庐是客家文化的重要载体，体现了客家人的传统建筑风格和家族观念。其独特的设计和精美的装饰展现了客家人的智慧和艺术才能。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`南华又庐图片${index + 1}`">
            </div>
            <div class="gallery-row second-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`南华又庐图片${index + 4}`">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DetailNavBar from '@/components/DetailNavBar.vue'

export default {
  name: 'NanHuaYouLuView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '南华又庐',
        category: 'meizhou',
        location: '广东省梅州市梅县区南口镇侨乡村',
        description: '梅州地区规模最大、保存最完好的客家民居之一，始建于清光绪十二年。',
        image: '/images/kejiadiqu/nanhuayoulu/nanhuayoulu1.png'
      },
      images: [
        '/images/kejiadiqu/nanhuayoulu/nanhuayoulu1.png',
        '/images/kejiadiqu/nanhuayoulu/nanhuayoulu5.png',
        '/images/kejiadiqu/nanhuayoulu/nanhuayoulu4.png',
        '/images/kejiadiqu/nanhuayoulu/nanhuayoulu2.png',
        '/images/kejiadiqu/nanhuayoulu/nanhuayoulu3.png'
      ]
    }
  },
  computed: {
    firstRowImages() {
      return this.images.slice(0, 3); // 第一行显示前3张图片
    },
    secondRowImages() {
      return this.images.slice(3, 5); // 第二行显示后2张图片
    }
  }
}
</script>

<style scoped>
/* 重置默认边距 */
body {
  margin: 0;
  padding: 0;
}

.village-detail {
  font-family: "Microsoft YaHei", sans-serif;
  max-width: 100vw;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.detail-content {
  background: white;
  padding: 30px;
  width: 100%;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.detail-section {
  margin-bottom: 40px;
  padding: 0 20px;
}

.detail-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.text-content {
  margin-bottom: 20px;
}

.text-content p {
  line-height: 1.8;
  color: #666;
  margin-bottom: 15px;
}

.image-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.gallery-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.gallery-row.second-row {
  grid-template-columns: repeat(2, 1fr);
}

.image-gallery img {
  width: 100%;
  height: auto;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  object-fit: cover;
  aspect-ratio: 16/9;
}

.image-gallery img:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .container {
    padding: 20px 15px;
  }

  .detail-content {
    padding: 20px;
  }

  .detail-section {
    padding: 0 10px;
  }

  .gallery-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .gallery-row.second-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }
}
</style>
