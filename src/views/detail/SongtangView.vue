<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>松塘村简介</h2>
          <div class="text-content">
            <p>松塘村位于佛山市南海区西樵镇，始建于南宋末年，距今已有800多年历史，是岭南地区著名的"翰林村"，2010年被评为"中国历史文化名村"。村落依岗临水，布局呈"七星伴月"格局，祠堂、书舍、古巷与池塘交相辉映，充满诗书文韵。</p>
            <p>松塘村自古崇文重教，明清两代共走出20多位进士、举人，其中4人入翰林院，故有"翰林村"之美誉。村内现存众多历史建筑，如区氏宗祠、孔圣庙、司马第等，镬耳山墙、青砖黛瓦间尽显岭南建筑特色。村中月池畔的"松塘翰林文化节"每年吸引众多游客，展现传统开笔礼、祭孔等习俗。</p>
            <p>松塘村不仅保留着完整的古村落风貌，更延续了耕读传家的文化传统，是体验岭南科举文化、宗族文化的绝佳之地。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>文化特色</h2>
          <div class="text-content">
            <p>松塘村以崇文重教闻名，村中"奉直"、"培元"、"致和"、"忠心"等古老坊巷，记录着昔日的辉煌。每年农历八月初二至初八举办的"翰林文化节"，包含开笔礼、祭孔仪式、曲艺表演等传统活动，展现了岭南地区独特的耕读文化。</p>
            <p>村内建筑融合了广府文化和儒家文化特色，镬耳封火山墙、灰塑壁画、木雕屏风等传统工艺随处可见。区氏宗祠、六世祖祠等祠堂建筑，不仅是祭祀祖先的场所，也是传承家族文化的重要空间。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`松塘村图片${index + 1}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`松塘村图片${index + 4}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in thirdRowImages" :key="index" :src="img" :alt="`松塘村图片${index + 7}`">
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
  name: 'SongtangVillageView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '松塘村',
        category: 'lingnan',
        location: '广东省佛山市南海区西樵镇',
        description: '800年历史的翰林古村，岭南文化瑰宝，中国历史文化名村。',
        image: '/images/guangfudiqu/songtangcun/songtangcun7.png'
      },
      images: [
        '/images/guangfudiqu/songtangcun/songtangcun1.png',
        '/images/guangfudiqu/songtangcun/songtangcun2.png',
        '/images/guangfudiqu/songtangcun/songtangcun3.png',
        '/images/guangfudiqu/songtangcun/songtangcun4.png',
        '/images/guangfudiqu/songtangcun/songtangcun5.png',
        '/images/guangfudiqu/songtangcun/songtangcun6.png',
        '/images/guangfudiqu/songtangcun/songtangcun7.png'
      ]
    }
  },
  computed: {
    firstRowImages() {
      return this.images.slice(0, 3); // 第一行显示前3张图片
    },
    secondRowImages() {
      return this.images.slice(3, 6); // 第二行显示中间3张图片
    },
    thirdRowImages() {
      return this.images.slice(6, 7); // 第三行显示最后1张图片
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
  gap: 20px;
}

.gallery-row:first-child {
  grid-template-columns: repeat(3, 1fr);
}

.gallery-row:nth-child(2) {
  grid-template-columns: repeat(3, 1fr);
}

.gallery-row:last-child {
  grid-template-columns: 1fr;
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

  .gallery-row:first-child,
  .gallery-row:nth-child(2) {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }
}
</style>
