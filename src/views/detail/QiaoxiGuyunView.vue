<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>桥溪古镇简介</h2>
          <div class="text-content">
            <p>桥溪古镇位于广东省梅州市梅县区雁洋镇，毗邻阴那山5A级景区，是一座隐于群山之中的客家明清古村落，素有"客家桃源"之称。古镇始建于明代万历年间，至今保存着20多座依山而建的客家传统民居，其中继善楼、世德楼等百年围龙屋群被列为广东省文物保护单位。</p>
            <p>村落以"小桥、溪水、古树、老屋"为特色，鹅卵石铺就的蜿蜒古道串联起朱、陈两姓宗祠与百年商宅，建筑融合了客家围屋与南洋风格。这里不仅是客家迁徙文化的活化石，更是近代粤东华侨文化的见证地，村中侨批馆陈列着珍贵的华侨家书文物。</p>
            <p>作为梅州"客家文化生态旅游示范区"的核心景点，桥溪古镇完整保留了客家人"耕山营宅"的生存智慧，其清晨云烟缭绕、暮色炊烟袅袅的景致，被《中国国家地理》评为"广东最美客家古村落"。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>文化特色</h2>
          <div class="text-content">
            <p>桥溪古镇是客家文化的典型代表，其建筑风格融合了客家围屋的严谨与南洋建筑的精致。继善楼作为古镇标志性建筑，采用"中轴对称"布局，七层结构将客家民俗与西洋装饰完美结合。村中现存明清时期"侨批局"旧址，见证了近代粤东华侨的创业史。</p>
            <p>古镇保留着完整的客家民俗传承，每年正月十五的"烧火龙"、中秋节的"拜月娘"等传统习俗延续至今。当地特色美食如盐焗鸡、梅菜扣肉、客家娘酒等，都是体验客家饮食文化的绝佳选择。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`桥溪古镇图片${index + 1}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`桥溪古镇图片${index + 5}`">
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
  name: 'QiaoxiAncientTownView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '桥溪古镇',
        category: 'meizhou',
        location: '广东省梅州市梅县区雁洋镇',
        description: '隐于群山的客家明清古村落，被誉为"广东最美客家古村落"。继善楼、世德楼等百年围龙屋群保存完好。',
        image: '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun3.png'
      },
      images: [
        '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun1.png',
        '/yuecunwenmai1/images/guangfudiqu/dalingcun/dalingcun6.png',
        '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun3.png',
        '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun4.png',
        '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun5.png',
        '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun6.png',
        '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun7.png',
        '/yuecunwenmai1/images/kejiadiqu/qiaoxiguyun/qiaoxiguyun8.png'
      ]
    }
  },
  computed: {
    firstRowImages() {
      return this.images.slice(0, 4); // 第一行显示前4张图片
    },
    secondRowImages() {
      return this.images.slice(4, 8); // 第二行显示后4张图片
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
  background-color: #f8f8f8;
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
  text-align: justify;
}

.image-gallery {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.gallery-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.image-gallery img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.image-gallery img:hover {
  transform: translateY(-5px);
}

@media (max-width: 1024px) {
  .gallery-row {
    grid-template-columns: repeat(3, 1fr);
  }
  .image-gallery img {
    height: 180px;
  }
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
  .image-gallery img {
    height: 160px;
  }
}

@media (max-width: 480px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }
  .image-gallery img {
    height: auto;
    max-height: 250px;
  }
}
</style>
