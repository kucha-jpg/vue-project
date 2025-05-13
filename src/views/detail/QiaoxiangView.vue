<template>
  <div class="village-detail">
    <DetailNavBar />

    <div class="container">
      <div class="detail-content">
        <div class="detail-section">
          <h2>村落简介</h2>
          <div class="text-content">
            <p>侨乡村（南虎村）位于广东省梅州市梅县区南口镇，是一个拥有500多年历史的古村落，自明嘉靖年间（1507—1566）开村至今，已有500多年历史。</p>
            <p>清末民初，客家人掀起"下南洋"谋生的潮流，侨乡村的许多人也前往东南亚及欧美各国谋生。在外事业有成的华侨继承了客家人"落叶归根"的传统，纷纷回乡买田建屋，光宗耀祖，形成了蔚为壮观的客家建筑群。</p>
            <p>三面环山，满眼苍翠，一条呈"S"形的小河从村庄流过，绕村而建的客家围屋鳞次栉比。村子的自然风光宁静、安详、朴实，充满了田园气息。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>华侨文化</h2>
          <div class="text-content">
            <p>侨乡村是著名的华侨之乡，几乎家家户户都有人出洋谋生，因此村名也由此而来。这里走出了潘立斋、潘祥初、潘君勉等一批近代知名华侨企业家，培育了著名量子化学家潘毓刚、著名经济学家潘汝瑶等名人。</p>
            <p>侨乡村的民俗文化丰富多彩，包括传统的客家婚礼、客家山歌、舞龙舞狮等，体现了客家人的传统文化和生活方式。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>开放时间与票价</h2>
          <div class="text-content">
            <p><strong>开放时间：</strong>侨乡村全天开放，部分围屋建筑可能有特定的参观时间，建议提前查询</p>
            <p><strong>票价信息：</strong>侨乡村目前免费开放，部分围屋建筑可能需要支付少量门票费用。</p>
          </div>
        </div>

        <div class="detail-section">
          <h2>图片展示</h2>
          <div class="image-gallery">
            <div class="gallery-row">
              <img v-for="(img, index) in firstRowImages" :key="index" :src="img" :alt="`侨乡村图片${index + 1}`">
            </div>
            <div class="gallery-row" v-if="secondRowImages.length > 0">
              <img v-for="(img, index) in secondRowImages" :key="index" :src="img" :alt="`侨乡村图片${index + 4}`">
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
  name: 'QiaoxiangVillageView',
  components: {
    DetailNavBar
  },
  data() {
    return {
      village: {
        id: 2,
        name: '侨乡村（南虎村）',
        category: 'meizhou',
        location: '广东省梅州市梅县区南口镇',
        description: '拥有500多年历史的客家古村落，以华侨文化和客家建筑闻名。',
        image: '/images/kejiadiqu/qiaoxiangcun/qiaoxiangcun2.png'
      },
      images: [
        '/images/kejiadiqu/qiaoxiangcun/qiaoxiangcun1.png',
        '/images/kejiadiqu/qiaoxiangcun/qiaoxiangcun2.png',
        '/images/kejiadiqu/qiaoxiangcun/qiaoxiangcun3.png',
        '/images/kejiadiqu/qiaoxiangcun/qiaoxiangcun4.png',
        '/images/kejiadiqu/qiaoxiangcun/qiaoxiangcun5.png'
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
