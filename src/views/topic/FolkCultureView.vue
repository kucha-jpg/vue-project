<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/images/guangfudiqu/dalingcun/dalingcun6.png')">
      <button class="back-button" @click="goBack">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回
      </button>
      <h1>广东民俗文化</h1>
      <p>探索文化瑰宝，领略多彩民俗风情</p>
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
          <!-- 潮汕文化 -->
          <div v-if="activeTab === 0" class="culture-section">
            <h2>潮汕文化</h2>
            <div class="culture-item">
              <img src="/images/民俗文化/潮汕文化/潮剧.jpg" alt="潮剧" class="culture-image">
              <div class="culture-text">
                <h3>潮剧</h3>
                <p>潮剧是发源于广东潮汕地区的古老戏曲剧种，具有500余年历史，2006年入选首批国家级非物质文化遗产。作为中国戏曲艺术的活化石，潮剧以潮州方言为演唱载体，完整保留了明代南戏的表演体系和音乐特征，其独特的"帮声"伴唱形式被誉为"中国戏曲音乐的活化石"。</p>
                <p>潮剧艺术体系包含三大核心要素：一是声腔系统，以潮州弦诗乐为基础，保留曲牌体音乐结构；二是表演程式，生旦净丑行当齐全，尤以丑角表演最具乡土特色；三是舞美工艺，融合潮绣、木雕等非遗技艺。代表剧目《荔镜记》《苏六娘》等生动展现了潮汕民俗风情。</p>
                <p>当代潮剧在坚持传统的基础上积极创新，通过数字化传播、海外巡演等方式扩大影响力，成为联结全球潮汕人的文化纽带。目前专业剧团达20余个，年演出超5000场，在东南亚地区尤其盛行，充分展现了传统戏曲的现代生命力与文化价值。</p>
              </div>
            </div>
          </div>

          <!-- 广府文化 -->
          <div v-if="activeTab === 1" class="culture-section">
            <h2>广府文化</h2>
            <div class="culture-item">
              <img src="/images/民俗文化/广府文化/醒狮.png" alt="广府醒狮" class="culture-image">
              <div class="culture-text">
                <h3>广府醒狮</h3>
                <p>广府醒狮是融武术、舞蹈、音乐等为一体的传统民俗文化，每逢节庆或有重大活动，必有醒狮助兴，寓意吉祥如意。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/民俗文化/广府文化/粤剧.jpg" alt="粤剧" class="culture-image">
              <div class="culture-text">
                <h3>粤剧</h3>
                <p>粤剧是发源于广东地区的重要传统戏曲剧种，迄今已有三百余年历史，2009年被联合国教科文组织列入人类非物质文化遗产代表作名录。作为岭南文化的艺术瑰宝，粤剧以粤语演唱为特色，融合了弋阳腔、昆腔和本地民间曲艺，形成了独特的表演体系。</p>
                <p>粤剧艺术具有三大特征：一是唱腔丰富，包含梆子、二黄等主要声腔，配以粤乐伴奏；二是表演程式化，行当分为文武生、花旦、丑生等，武打场面尤为精彩；三是服饰华丽，大量运用广绣工艺。代表剧目如《帝女花》《紫钗记》等，多取材于历史故事和民间传说。</p>
                <p>当代粤剧在传承中创新发展，既保留传统排场戏精髓，又融入现代舞台技术。目前粤港澳地区专业剧团超过30个，年演出量近万场，并通过电影、电视等新媒体广泛传播。粤剧不仅是广府文化的重要载体，更是联结海外华人的情感纽带，在东南亚及欧美地区拥有广泛影响力。</p>
              </div>
            </div>
          </div>

          <!-- 客家文化 -->
          <div v-if="activeTab === 2" class="culture-section">
            <h2>客家文化</h2>
            <div class="culture-item">
              <img src="/images/民俗文化/客家文化/客家采茶戏.webp" alt="客家采茶戏" class="culture-image">
              <div class="culture-text">
                <h3>客家采茶戏</h3>
                <p>客家采茶戏是客家地区具有代表性的传统戏曲剧种，以采茶劳动为题材，具有浓郁的生活气息和地方特色。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/民俗文化/客家文化/客家广东汉乐.webp" alt="客家广东汉乐" class="culture-image">
              <div class="culture-text">
                <h3>客家广东汉乐</h3>
                <p>客家广东汉乐历史悠久，是客家地区重要的传统音乐形式，旋律优美，富有韵味。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/民俗文化/客家文化/客家花朝戏.webp" alt="客家花朝戏" class="culture-image">
              <div class="culture-text">
                <h3>客家花朝戏</h3>
                <p>客家花朝戏是客家地区独特的民间小戏，以其独特的表演风格和唱腔深受群众喜爱。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/民俗文化/客家文化/客家鲤鱼灯.png" alt="客家鲤鱼灯" class="culture-image">
              <div class="culture-text">
                <h3>客家鲤鱼灯</h3>
                <p>客家鲤鱼灯是客家地区传统的民间舞蹈道具，常在节日期间表演，寓意吉祥如意。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/民俗文化/客家文化/客家青溪黑蛟龙灯舞.webp" alt="客家青溪黑蛟龙灯舞" class="culture-image">
              <div class="culture-text">
                <h3>客家青溪黑蛟龙灯舞</h3>
                <p>客家青溪黑蛟龙灯舞是客家地区独特的民间舞蹈，表演气势恢宏，具有浓郁的地方特色。</p>
              </div>
            </div>
            <div class="culture-item">
              <img src="/images/民俗文化/客家文化/客家舞麒麟.png" alt="客家舞麒麟" class="culture-image">
              <div class="culture-text">
                <h3>客家舞麒麟</h3>
                <p>客家舞麒麟是客家地区重要的传统民俗活动，寓意驱邪避灾、吉祥平安。</p>
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
      tabs: ['潮汕文化', '广府文化', '客家文化']
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
  width: 100%;
}

.tab-header {
  display: flex;
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: 30px;
}

.tab-header button {
  padding: 12px 24px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #666;
  position: relative;
  transition: all 0.3s;
}

.tab-header button:hover {
  color: #333;
}

.tab-header button.active {
  color: #c00;
  font-weight: bold;
}

.tab-header button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #c00;
}

/* 文化内容样式 */
.culture-section h2 {
  font-size: 32px;
  color: #333;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.culture-item {
  display: flex;
  margin-bottom: 40px;
  align-items: flex-start;
}

.culture-item:last-child {
  margin-bottom: 0;
}

.culture-image {
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.culture-text {
  flex: 1;
}

.culture-text h3 {
  font-size: 24px;
  color: #c00;
  margin-bottom: 15px;
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

  /* 移动端标签页样式 */
  .tab-header {
    overflow-x: auto;
    white-space: nowrap;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .tab-header button {
    padding: 10px 15px;
    font-size: 16px;
  }

  /* 移动端文化内容样式 */
  .culture-item {
    flex-direction: column;
  }

  .culture-image {
    width: 100%;
    height: 200px;
    margin-right: 0;
    margin-bottom: 20px;
  }
}
</style>
