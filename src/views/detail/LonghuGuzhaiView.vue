<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>古寨简介</h2>
          <div class="text-content">
            <p>龙湖古寨，地处广东省潮州市潮安区龙湖镇护堤路，旁有韩江流经。始建南宋绍兴二年，初名塘湖【因村西、南、北皆有池塘（古彩塘溪遗迹）而得名】。明永乐年间，倭寇肆虐，因抵御外寇之需筑寨自卫，形成了"三街六巷"的聚落规划格局。</p>
            <p>古寨呈带状分布，南北走向，方圆面积1.5平方公里。寨中央直街形似"龙脊"，加上四周韩江水、池塘湖水环绕，因而得名"龙湖"。直街东面有三条街，西面有六条巷。因此得三街六巷的规划格局。寨内留存古迹百来余，涵盖宋至清的多种潮汕建筑营造技艺，如木雕、石雕、嵌瓷、彩绘、贝灰塑等。阿婆祠、方伯第、进士第、龙湖书院和寨门是其中代表建筑。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>潮汕文化</h2>
          <div class="text-content">
            <p>寨内舞龙、舞狮、英歌舞、潮乐、游鲤鱼、赛灯笼等民俗活动异彩纷呈，展现了潮汕地区丰富的民俗文化，可以供游客了解潮汕风土人情。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>开放时间</h2>
          <div class="text-content">
            <p><strong>开放时间：</strong>8:30~17:30</p>
            <p><strong>票价信息：</strong>免费</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`龙湖古寨图片${index + 1}`">
            </div>
            <div class="gallery-row">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`龙湖古寨图片${index + 4}`">
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
  name: 'LonghuGuzhaiView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '龙湖古寨',
        category: 'chaoshan',
        location: '广东省潮州市潮安区龙湖镇护堤路',
        description: '始建于南宋的龙湖古寨，拥有独特的"三街六巷"格局和丰富的潮汕建筑文化。',
        image: '/images/chaoshandiqu/longhuguzhai/longhuguzhai1.png'
      },
      images: [
        '/images/chaoshandiqu/longhuguzhai/longhuguzhai1.png',
        '/images/chaoshandiqu/longhuguzhai/longhuguzhai2.png',
        '/images/chaoshandiqu/longhuguzhai/longhuguzhai3.png',
        '/images/chaoshandiqu/longhuguzhai/longhuguzhai4.png',
        '/images/chaoshandiqu/longhuguzhai/longhuguzhai5.png'
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
}

@media (max-width: 480px) {
  .gallery-row {
    grid-template-columns: 1fr;
  }
}
</style>
