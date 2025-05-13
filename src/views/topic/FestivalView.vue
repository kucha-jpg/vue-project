<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/images/guangfudiqu/shawanguzhen/shawanguzhen3.png')">
      <button class="back-button" @click="goBack">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回
      </button>
      <h1>广东节日文化</h1>
      <p>广东风情，岁时节庆</p>
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
          <!-- 潮汕节日文化 -->
          <div v-if="activeTab === 0" class="culture-section">
            <h2>潮汕节日文化</h2>
            <div class="culture-item">
              <img src="/images/节日文化/潮汕地区/英歌舞.jpg" alt="英歌舞">
              <div class="culture-text">
                <h3>英歌舞</h3>
                <p>英歌舞是广东潮汕地区的传统民间舞蹈，起源于古代傩舞和水浒英雄传说，已有300多年历史。表演者装扮成梁山好汉，面绘脸谱，手持短棍，以刚劲有力的武术动作和复杂队形展现战斗场景，配合激昂的锣鼓节奏。其文化内涵丰富，既有驱邪纳吉的民俗功能，又体现了宗族凝聚力，2006年被列为国家级非物质文化遗产。如今，英歌舞在保留传统的基础上不断创新，融入现代元素，成为潮汕文化的标志性符号和节庆活动的重要表演形式，并逐渐走向国际舞台，展现中华传统文化的独特魅力。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/节日文化/潮汕地区/英歌舞脸谱细节.webp" alt="英歌舞脸谱">
              <div class="culture-text">
                <h3>英歌舞脸谱</h3>
                <p>英歌舞脸谱是英歌舞表演的重要组成部分，其设计灵感来源于京剧脸谱和水浒传人物形象。每种脸谱都有其特定的含义，红色代表忠勇，黑色代表刚直，白色代表奸诈，蓝色代表骁勇等。脸谱的绘制工艺精湛，色彩鲜艳，线条流畅，不仅是表演的需要，更是一件精美的艺术品，展现了潮汕地区独特的审美情趣和文化内涵。</p>
              </div>
            </div>
          </div>

          <!-- 客家节日文化 -->
          <div v-if="activeTab === 1" class="culture-section">
            <h2>客家节日文化</h2>
            <div class="culture-item">
              <img src="/images/节日文化/客家地区/客家天穿节.webp" alt="客家天穿节">
              <div class="culture-text">
                <h3>客家天穿节</h3>
                <p>天穿节是客家地区特有的传统节日，主要流行于粤东、闽西等客家聚居地，时间在农历正月二十日。节日源于女娲补天的神话传说，客家人以此纪念女娲补天救民的功德。节日当天，家家户户会用红丝线串起煎饼挂在屋顶或墙上，象征"补天穿"，祈求新的一年风调雨顺、五谷丰登。同时还会举行祭祖、舞龙舞狮等民俗活动，是客家文化中重要的非物质文化遗产。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/节日文化/客家地区/客家五鬼弄金狮.webp" alt="五鬼弄金狮">
              <div class="culture-text">
                <h3>五鬼弄金狮</h3>
                <p>"五鬼弄金狮"是客家地区独特的民间舞蹈，主要流传于广东梅州等地。表演由五位装扮成"鬼"的舞者和一只"金狮"组成，通过诙谐幽默的表演形式，展现人与狮的互动。舞蹈动作夸张有趣，既有武术功底，又融入了客家山歌元素，寓意驱邪避害、吉祥如意。该舞蹈通常在春节、元宵等重大节日表演，深受客家民众喜爱，是客家文化中珍贵的民间艺术瑰宝。</p>
              </div>
            </div>
          </div>

          <!-- 珠三角节日文化 -->
          <div v-if="activeTab === 2" class="culture-section">
            <h2>珠三角节日文化</h2>
            <div class="culture-item">
              <img src="/images/节日文化/珠三角地区/鳌鱼舞.jpg" alt="鳌鱼舞">
              <div class="culture-text">
                <h3>鳌鱼舞</h3>
                <p>鳌鱼舞是珠三角地区特有的民间舞蹈，主要流行于广州、番禺等地，已有300多年历史。舞蹈源于"鲤鱼跃龙门"的传说，表演者手持制作精美的鳌鱼道具，通过跳跃、翻腾等动作，展现鱼儿奋力跃龙门的场景。鳌鱼舞动作矫健有力，队形变化多端，常在春节、元宵等节日表演，寓意吉祥如意、步步高升。2007年被列入广东省非物质文化遗产名录，是岭南水乡文化的重要代表。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/节日文化/珠三角地区/波罗诞.png" alt="波罗诞">
              <div class="culture-text">
                <h3>波罗诞</h3>
                <p>波罗诞是广州黄埔区南海神庙的传统庙会，每年农历二月十一至十三举行，是广州地区最大的民间庙会之一。庙会源于对南海神祝融的祭祀，已有1400多年历史。节日期间，举行盛大的祭海仪式、五子朝王、花朝节等活动，还有波罗鸡、波罗粽等特色民俗产品。波罗诞展现了广州作为千年商都的海洋文化特色，2011年被列入国家级非物质文化遗产名录，是广州重要的文化名片。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/节日文化/珠三角地区/东莞麒麟舞.jpg" alt="东莞麒麟舞">
              <div class="culture-text">
                <h3>东莞麒麟舞</h3>
                <p>东莞麒麟舞是珠三角地区独特的民间舞蹈，主要流传于东莞樟木头、清溪等客家聚居地。麒麟舞集武术、舞蹈、音乐于一体，表演者手持麒麟头，通过模仿麒麟的行走、跳跃、嬉戏等动作，展现麒麟的威武与灵动。舞蹈常在春节、新居入伙等喜庆场合表演，寓意吉祥如意、驱邪避害。东莞麒麟舞既有客家文化的刚健，又有岭南水乡的柔美，2008年被列入国家级非物质文化遗产名录。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/节日文化/珠三角地区/广州庙会.png" alt="广州庙会">
              <div class="culture-text">
                <h3>广州庙会</h3>
                <p>广州庙会是广州地区传统民俗活动的总称，其中以广府庙会最为著名。庙会通常在春节期间举行，持续7-15天，内容包括花车巡游、民俗表演、美食展销、工艺品展览等。广府庙会以城隍庙为中心，辐射北京路文化核心区，展现了广府文化的独特魅力。庙会期间，舞龙舞狮、粤剧表演、乞巧工艺等非遗项目集中展示，吸引了数百万市民游客参与，成为广州重要的文化旅游品牌。</p>
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
      tabs: ['潮汕文化', '客家文化', '珠三角文化']
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
  padding: 16px 32px;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: 500;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
}

.tab-header button.active {
  color: #e74c3c;
}

.tab-header button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #e74c3c;
  animation: underline 0.3s forwards;
}

@keyframes underline {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.tab-content {
  padding: 30px;
}

.culture-section h2 {
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.culture-item {
  display: flex;
  margin-bottom: 40px;
  gap: 30px;
  align-items: flex-start;
}

.culture-item:last-child {
  margin-bottom: 0;
}

.culture-item img {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 6px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.culture-text {
  flex: 1;
}

.culture-text h3 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #e74c3c;
}

.culture-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
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

  .culture-item {
    flex-direction: column;
    gap: 20px;
  }

  .culture-item img {
    width: 100%;
    height: 200px;
  }

  .tab-header button {
    padding: 12px 20px;
    font-size: 16px;
  }
}
</style>
