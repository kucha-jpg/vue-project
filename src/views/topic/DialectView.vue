<template>
  <div class="dialect-overview">
    <NavBar />
    <div class="page-header">
      <button class="back-btn" @click="goBack">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回
      </button>
      <h1 class="main-title">广东方言音律</h1>
      <p class="subtitle">探寻语音密码，传承千年文化基因</p>
    </div>

    <div class="content-container">
      <!-- 潮汕方言 -->
      <section class="dialect-section" id="chaoshan">
        <h2 class="section-title">潮汕方言</h2>
        <div class="dialect-content">
          <div class="content-block">
            <h3 class="block-title">方言概况</h3>
            <p>潮汕话（又称潮州话）是汉语闽南语系的重要分支，主要通行于广东潮汕地区及海外潮人社群，使用人口约2500万。</p>
            <p>其语音保留大量古汉语特征，如八声调系统、"文白异读"现象，词汇中融合古越语、马来语等外来元素。潮汕话以复杂的连读变调、丰富的俗谚著称，被誉为"中国最难懂方言"之一。</p>
          </div>
          <div class="content-block">
            <h3 class="block-title">文化价值</h3>
            <p>作为潮汕文化的核心载体，其独特的"唐音遗韵"成为联结全球潮汕人的身份密码。童谣《天顶飞雁鹅》等口头文学更被列入非物质文化遗产，展现了潮汕方言深厚的文化积淀。</p>
          </div>
        </div>
      </section>

      <!-- 广府方言 -->
      <section class="dialect-section" id="guangfu">
        <h2 class="section-title">广府方言</h2>
        <div class="dialect-content">
          <div class="content-block">
            <h3 class="block-title">方言概况</h3>
            <p>粤语是汉藏语系汉语族的重要语言，主要通行于中国广东、广西、香港、澳门及海外华人社区，全球使用人数超过8000万。</p>
            <p>作为岭南文化的核心载体，粤语保留了大量古汉语特征，如完整的九声六调系统、丰富的入声字和古词汇（如"食饭""行街"），被誉为"中国古代语言的活化石"。</p>
          </div>
          <div class="content-block">
            <h3 class="block-title">文化影响</h3>
            <p>粤语不仅是日常交流工具，更是广府文化的艺术媒介。粤剧、粤曲、粤语流行音乐（如Beyond、张国荣的作品）均以粤语演绎，成为全球华人的文化记忆。</p>
            <p>香港电影和TVB剧集通过粤语传播，使"港式粤语"风靡亚洲。粤语歇后语、俗语（如"食碗面反碗底"）生动反映广府人的处世哲学。</p>
          </div>
          <div class="content-block">
            <h3 class="block-title">现代传承</h3>
            <p>随着时代发展，粤语在坚持传统的同时不断吸收外来语（如英语词汇"巴士""士多"），展现出强大的包容性。</p>
            <p>尽管面临普通话推广的挑战，粤语仍通过教育、媒体和网络（如粤语表情包、YouTube频道）焕发新生，成为联结粤港澳及海外华人的重要文化纽带。</p>
            <p>2009年，粤剧被列入联合国非遗名录，进一步肯定了粤语的文化价值。</p>
          </div>
        </div>
      </section>

      <!-- 客家方言 -->
      <section class="dialect-section" id="hakka">
        <h2 class="section-title">客家方言</h2>
        <div class="dialect-content">
          <div class="content-block">
            <h3 class="block-title">方言概况</h3>
            <p>客家话是汉藏语系汉语族的重要方言，主要分布在中国广东、福建、江西、台湾等客家聚居区，以及东南亚、欧美等海外客家人社区，全球使用人口约5000万。</p>
            <p>作为客家文化的核心载体，客家话保留了中古汉语的语音特点，如六声调系统、丰富的鼻化韵和古语词汇（如"食朝""行田"），被誉为"古汉语的活化石"。</p>
          </div>
          <div class="content-block">
            <h3 class="block-title">文化传承</h3>
            <p>客家话不仅是客家人日常交流的工具，更是客家文化传承的重要媒介。客家山歌、采茶戏、谚语等民间艺术均以客家话演绎，展现了客家人勤劳、团结的精神特质。</p>
            <p>客家童谣《月光光》和民间故事《客家围龙屋的传说》等，通过口耳相传，成为客家文化的重要组成部分。</p>
          </div>
          <div class="content-block">
            <h3 class="block-title">精神内核</h3>
            <p>客家话中独特的俗语和谚语（如"宁卖祖宗田，莫忘祖宗言"）深刻反映了客家人重视传统、不忘根本的价值观。</p>
            <p>随着时代变迁，客家话在保持传统的同时，也吸收了周边方言和现代词汇，展现出强大的适应力。</p>
            <p>尽管面临普通话推广的挑战，客家话仍通过教育、文化活动（如世界客属恳亲大会）和媒体（如客家电视台）得以传承和发展。</p>
            <p>2011年，客家山歌被列入国家级非物质文化遗产名录，进一步彰显了客家话的文化价值。</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'DialectOverview',
  components: { NavBar },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.dialect-overview {
  font-family: "PingFang SC", "Microsoft YaHei", sans-serif;
  line-height: 1.8;
  color: #333;
  background-color: #f9f9f9;
}

.page-header {
  height: 300px;
  background: linear-gradient(135deg, #1a2a6c, #3a7bd5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
}

.back-btn {
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
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.main-title {
  font-size: 2.5rem;
  margin-bottom: 15px;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
}

.content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
}

.dialect-section {
  margin-bottom: 60px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  padding: 30px;
}

.section-title {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 2px solid #3498db;
  text-align: center;
}

.dialect-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.content-block {
  padding: 20px;
  border-left: 4px solid #3498db;
  background-color: #f8f9fa;
  border-radius: 0 4px 4px 0;
}

.block-title {
  font-size: 1.3rem;
  color: #2980b9;
  margin-bottom: 15px;
}

p {
  margin-bottom: 15px;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .page-header {
    height: 250px;
    padding: 0 20px;
  }

  .main-title {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }

  .dialect-section {
    padding: 20px;
    margin-bottom: 40px;
  }

  .section-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .content-block {
    padding: 15px;
  }
}
</style>
