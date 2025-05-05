<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/images/dialect-bg.jpg')">
      <button class="back-button" @click="goBack">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回
      </button>
      <h1>广东美食文化</h1>
      <p>品味岭南风味，感受广东饮食魅力</p>
    </div>
    <div class="topic-content">
      <div class="tab-container">
        <div class="tab-header">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="{ active: activeTab === index }"
            @click="activeTab = index"
          >
            {{ tab }}
          </button>
        </div>

        <div class="tab-content">
          <!-- 潮汕美食 -->
          <div v-if="activeTab === 0" class="culture-section">
            <h2>潮汕美食</h2>
            <p class="section-desc">潮汕地区位于广东省东部，独特的地理环境孕育了丰富的美食文化。潮汕菜以清淡鲜美、注重原汁原味著称，讲究刀工和烹饪技艺。</p>

            <div class="culture-items">
              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="潮汕牛肉火锅">
                <div class="item-info">
                  <h3>潮汕牛肉火锅</h3>
                  <p>潮汕牛肉火锅以新鲜牛肉为主料，讲究"秒食"体验。不同部位的牛肉涮煮时间不同，搭配特制沙茶酱，鲜美无比。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="潮汕工夫茶">
                <div class="item-info">
                  <h3>潮汕工夫茶</h3>
                  <p>工夫茶是潮汕人日常生活中不可或缺的一部分，讲究茶具精美、冲泡技艺和品饮礼仪，体现了潮汕人的精致生活态度。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="潮汕粿品">
                <div class="item-info">
                  <h3>潮汕粿品</h3>
                  <p>潮汕粿品种类繁多，如红桃粿、鼠壳粿、甜粿等，是潮汕节日和祭祀的重要食品，也是日常茶点佳品。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 广府美食 -->
          <div v-if="activeTab === 1" class="culture-section">
            <h2>广府美食</h2>
            <p class="section-desc">广府地区以广州为中心，是粤菜的主要发源地。广府美食讲究食材新鲜、烹饪技艺精湛，口味清淡而富有层次。</p>

            <div class="culture-items">
              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="广州早茶">
                <div class="item-info">
                  <h3>广州早茶</h3>
                  <p>广州早茶是一种独特的饮食文化，虾饺、烧卖、肠粉、叉烧包等点心精美可口，搭配一壶香茗，是广州人悠闲生活的体现。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="白切鸡">
                <div class="item-info">
                  <h3>白切鸡</h3>
                  <p>白切鸡是广东最传统的名菜之一，讲究"鸡有鸡味"，皮爽肉滑，清淡鲜美，搭配姜葱油碟食用，最能体现鸡肉原味。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="煲仔饭">
                <div class="item-info">
                  <h3>煲仔饭</h3>
                  <p>煲仔饭是广州特色美食，将米饭与各种食材在砂锅中煮熟，底部形成香脆的锅巴，香气四溢，滋味浓郁。</p>
                </div>
              </div>
            </div>
          </div>

          <!-- 客家美食 -->
          <div v-if="activeTab === 2" class="culture-section">
            <h2>客家美食</h2>
            <p class="section-desc">客家美食源于中原饮食文化，结合岭南食材特点，形成了独特的风味。客家菜讲究咸香浓郁，注重滋补养生。</p>

            <div class="culture-items">
              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="客家盐焗鸡">
                <div class="item-info">
                  <h3>客家盐焗鸡</h3>
                  <p>盐焗鸡是客家传统名菜，用粗盐将整鸡焗熟，皮滑肉嫩，骨香浓郁，体现了客家人节俭持家的美德。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="梅菜扣肉">
                <div class="item-info">
                  <h3>梅菜扣肉</h3>
                  <p>梅菜扣肉是客家经典菜肴，肥瘦相间的五花肉与梅干菜完美结合，肉质软烂，梅菜咸香，肥而不腻。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/hong.jpeg" alt="客家酿豆腐">
                <div class="item-info">
                  <h3>客家酿豆腐</h3>
                  <p>酿豆腐是客家三大名菜之一，在豆腐中填入肉馅煎制而成，外酥里嫩，汤汁醇厚，体现了客家人的烹饪智慧。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'DialectView',
  components: {
    NavBar
  },
  data() {
    return {
      activeTab: 0,
      tabs: ['潮汕美食', '广府美食', '客家美食']
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.topic-detail {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f8f9fa;
}

.topic-header {
  height: 350px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.topic-header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}

.topic-header h1 {
  font-size: 48px;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.topic-header p {
  font-size: 24px;
  position: relative;
  z-index: 2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.back-button {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  z-index: 3;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.topic-content {
  padding: 60px 50px;
  max-width: 1200px;
  margin: 0 auto;
}

/* 标签页样式 */
.tab-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid #eee;
}

.tab-header button {
  padding: 16px 24px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
}

.tab-header button:hover {
  color: #333;
}

.tab-header button.active {
  color: #c00;
}

.tab-header button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #c00;
}

.tab-content {
  padding: 24px;
}

.culture-section h2 {
  font-size: 32px;
  margin-bottom: 16px;
  color: #333;
}

.section-desc {
  font-size: 18px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 32px;
  max-width: 800px;
}

.culture-items {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.culture-item {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.culture-item:hover {
  transform: translateY(-5px);
}

.culture-item img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.item-info {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-info h3 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #333;
}

.item-info p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  flex: 1;
}

@media (max-width: 768px) {
  .topic-content {
    padding: 40px 20px;
  }

  .topic-header {
    height: 250px;
  }

  .topic-header h1 {
    font-size: 36px;
  }

  .topic-header p {
    font-size: 18px;
  }

  .culture-items {
    grid-template-columns: 1fr;
  }

  .tab-header button {
    padding: 12px 16px;
    font-size: 16px;
  }
}
</style>
