<template>
  <div class="creations">
    <NavBar />
    <div class="page-header">
      <div class="header-content">
        <h1>传统村落文创</h1>
        <p>守护村落记忆，焕活乡村新生</p>
        <div class="header-decoration">
          <div class="decoration-line"></div>
          <div class="decoration-icon">🏡</div>
          <div class="decoration-line"></div>
        </div>
      </div>
    </div>
    <div class="content">
      <section class="creation-list">
        <div class="section-header">
          <h2>村落文创精选</h2>
          <div class="section-divider"></div>
        </div>
        <div class="creation-grid">
          <div
            class="creation-card"
            v-for="creation in creations"
            :key="creation.id"
            @click="showDetail(creation)"
          >
            <div class="card-image-container">
              <img :src="creation.image" :alt="creation.title" class="creation-image">
            </div>
            <div class="creation-info">
              <div class="info-header">
                <h3>{{ creation.title }}</h3>
              </div>
              <p class="creation-description">{{ creation.description }}</p>
              <div class="creation-meta">
                <span class="creation-category">{{ creation.category }}</span>
                <span class="creation-origin">{{ creation.origin }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="culture-feature">
        <div class="feature-content">
          <h3>村落记忆，匠心传承</h3>
          <p>我们的文创产品汲取传统村落建筑、民俗、手工艺等多元文化精髓，将古村智慧与现代设计完美融合，让传统村落文化以全新姿态走进您的生活。</p>
        </div>
      </section>
    </div>

    <!-- 详情弹窗 -->
    <div class="detail-modal" v-if="selectedCreation" @click.self="closeDetail">
      <div class="modal-content">
        <span class="close-btn" @click="closeDetail">&times;</span>
        <div class="modal-image-container">
          <img :src="selectedCreation.image" :alt="selectedCreation.title" class="modal-image">
        </div>
        <div class="modal-info">
          <h2>{{ selectedCreation.title }}</h2>
          <p class="modal-description">{{ selectedCreation.description }}</p>
          <div class="modal-meta">
            <span class="modal-category">类别: {{ selectedCreation.category }}</span>
            <span class="modal-origin">产地: {{ selectedCreation.origin }}</span>
            <span class="modal-rating" v-if="selectedCreation.rating">评分: {{ selectedCreation.rating }}</span>
          </div>
          <div class="modal-detail">
            <h3>产品详情</h3>
            <p>{{ getDetailText(selectedCreation) }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'CreationsView',
  components: {
    NavBar
  },
  data() {
    return {
      selectedCreation: null,
      creations: [
        {
          id: 1,
          title: 'jellycat1',
          description: '把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕',
          category: '美食文创',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/jellycat/1.png',
          rating: '4.8',
          isNew: true,
          detail: '以广东特色美食为灵感设计的可爱玩偶，采用柔软亲肤面料，填充优质PP棉，可手洗清洁，是家居装饰和收藏的绝佳选择。'
        },
        {
          id: 2,
          title: 'jellycat2',
          description: '把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕',
          category: '美食文创',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/jellycat/2.png',
          rating: '4.9',
          isNew: false,
          detail: '以广东传统小吃为原型设计的玩偶，采用立体刺绣工艺展现食物细节，搭配精美包装盒，是送礼自用的优质选择。'
        },
        {
          id: 3,
          title: 'jellycat3',
          description: '把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕',
          category: '美食文创',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/jellycat/3.png',
          rating: '4.7',
          isNew: false,
          detail: '以广东特色甜品为造型的玩偶，采用环保印染工艺，色彩鲜艳持久，适合各个年龄段的收藏爱好者。'
        },
        {
          id: 4,
          title: 'jellycat4',
          description: '把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕',
          category: '美食文创',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/jellycat/4.png',
          rating: '4.6',
          isNew: true,
          detail: '以广东传统糕点为设计灵感的玩偶，采用双层缝制工艺，内部填充高回弹海绵，手感柔软舒适。'
        },
        {
          id: 5,
          title: 'jellycat5',
          description: '把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕',
          category: '美食文创',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/jellycat/5.png',
          rating: '4.8',
          isNew: true,
          detail: '以广东特色茶点为造型的玩偶，采用立体裁剪工艺，完美还原食物形态，是茶文化爱好者的收藏佳品。'
        },
        {
          id: 6,
          title: '潮汕包包',
          description: '灵感源自潮汕非遗红桃粿，以经典桃形轮廓搭配吉祥纹饰，朱红主色调传递喜庆祝福。立体粿印压纹包身搭配流苏穗坠，将传统祭粿文化化为时尚单品，寓意「包」纳福运，随身携带潮汕人的吉庆记忆。',
          category: '非遗手作',
          origin: '广东潮汕',
          image: '/yuecunwenmai1/images/文创/潮汕包包/chaoshanbaobao1.jpg',
          rating: '4.9',
          isNew: false,
          detail: '采用优质PU皮革制作，包身立体压纹工艺还原红桃粿纹样，可拆卸流苏设计，内部分层合理，容量适中，适合日常搭配。'
        },
        {
          id: 7,
          title: '潮汕男包',
          description: '灵感源自潮汕非遗红桃粿，以经典桃形轮廓搭配吉祥纹饰，朱红主色调传递喜庆祝福。立体粿印压纹包身搭配流苏穗坠，将传统祭粿文化化为时尚单品，寓意「包」纳福运，随身携带潮汕人的吉庆记忆。',
          category: '非遗手作',
          origin: '广东潮汕',
          image: '/yuecunwenmai1/images/文创/潮汕包包/chaoshanbaobao2.jpg',
          rating: '4.7',
          isNew: false,
          detail: '精选牛皮材质，包身压印红桃粿纹样，搭配金属流苏挂饰，内部分隔合理，可容纳手机、钱包等日常物品，适合商务休闲场合。'
        },
        {
          id: 8,
          title: '古村窗棂书签1',
          description: '采用激光切割工艺，在黄铜/不锈钢片上还原窗棂镂空结构，在书签顶部设计可拆卸的岭南灰塑元素吊坠（如鳌鱼、醒狮造型）',
          category: '工艺美术',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/古村窗棂书签/gucunchuanglingshuqian1.png',
          rating: '4.8',
          isNew: true,
          detail: '采用黄铜材质，激光切割还原传统窗棂纹样，顶部可更换灰塑元素吊坠，尺寸为15×4cm，表面做旧处理，适合书籍收藏爱好者。'
        },
        {
          id: 9,
          title: '古村窗棂书签2',
          description: '采用激光切割工艺，在黄铜/不锈钢片上还原窗棂镂空结构，在书签顶部设计可拆卸的岭南灰塑元素吊坠（如鳌鱼、醒狮造型）',
          category: '工艺美术',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/古村窗棂书签/gucunchuanglingshuqian2.png',
          rating: '4.9',
          isNew: true,
          detail: '采用不锈钢材质，表面镀金处理，激光雕刻窗棂纹样，顶部可拆卸醒狮造型吊坠，尺寸为16×5cm，适合作为礼品赠送。'
        },
        {
          id: 10,
          title: '盲盒1',
          description: '1. 主题定位\n• 系列名称：《岭南旧梦》\n• 风格基调：岭南传统建筑元素 × 微缩景观 × Q版拟人角色\n• 目标人群：文旅爱好者、潮玩收藏圈、年轻文艺消费人群\n\n⸻\n\n2. 产品系列设计\n\n每一款盲盒都结合一个岭南经典建筑元素（总计8款+2款隐藏款）\n\n编号	名称	元素特色	角色设定\n01	镬耳飞檐	镬耳墙造型	小女孩佩戴飞檐发饰，脚踏青砖\n02	青砖小巷	青砖灰瓦小巷	短衣少年捧着油纸灯\n03	红门碧瓦	朱红大门配青瓦	小女孩推开小红门，眺望远方\n04	骑楼街景	骑楼拱廊建筑	小男孩靠着骑楼拱柱\n05	花窗光影	花格雕刻窗	小动物趴在雕花窗台上打盹\n06	石雕龙柱	石雕艺术	小角色盘坐在龙柱下\n07	岭南庭院	天井院落	小姑娘打理小院盆栽\n08	灰塑剪影	灰塑墙艺	灰塑图案在角色身后浮现',
          category: '潮玩收藏',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/盲盒/3.png',
          rating: '4.6',
          isNew: true,
          detail: '采用PVC材质，每款盲盒高度约8cm，附带专属展示底座，包装盒设计为岭南建筑风格，内含角色故事卡片。'
        },
        {
          id: 11,
          title: '盲盒2',
          description: '1. 主题定位\n• 系列名称：《岭南旧梦》\n• 风格基调：岭南传统建筑元素 × 微缩景观 × Q版拟人角色\n• 目标人群：文旅爱好者、潮玩收藏圈、年轻文艺消费人群\n\n⸻\n\n2. 产品系列设计\n\n每一款盲盒都结合一个岭南经典建筑元素（总计8款+2款隐藏款）\n\n编号	名称	元素特色	角色设定\n01	镬耳飞檐	镬耳墙造型	小女孩佩戴飞檐发饰，脚踏青砖\n02	青砖小巷	青砖灰瓦小巷	短衣少年捧着油纸灯\n03	红门碧瓦	朱红大门配青瓦	小女孩推开小红门，眺望远方\n04	骑楼街景	骑楼拱廊建筑	小男孩靠着骑楼拱柱\n05	花窗光影	花格雕刻窗	小动物趴在雕花窗台上打盹\n06	石雕龙柱	石雕艺术	小角色盘坐在龙柱下\n07	岭南庭院	天井院落	小姑娘打理小院盆栽\n08	灰塑剪影	灰塑墙艺	灰塑图案在角色身后浮现',
          category: '潮玩收藏',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/盲盒/4.png',
          rating: '4.7',
          isNew: true,
          detail: '隐藏款设计有特殊工艺处理，如夜光效果或可动关节，每盒附带收藏编号，适合系列收藏。'
        },
        {
          id: 12,
          title: '手机壳1',
          description: '岭南花窗·手机壳\n参考广府祠堂和骑楼建筑中的镂空花窗图案，采用环保TPU材质与激光镂空工艺，兼具美观与保护性，成为随身岭南文化"展示窗"',
          category: '数码配件',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/手机壳/1.jpg',
          rating: '4.8',
          isNew: true,
          detail: '采用TPU软胶材质，四角加厚防摔设计，激光镂空工艺精准还原花窗图案，适配主流手机型号，提供多种颜色选择。'
        },
        {
          id: 13,
          title: '丝巾1',
          description: '广绣流光·丝巾\n以传统广绣图案（如双喜鸳鸯、龙凤呈祥）为设计母本，选用真丝或雪纺材质，融合当代配色系统，打造兼具典雅与时尚感的日常佩戴艺术品',
          category: '服饰配件',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/丝巾/1.jpg',
          rating: '4.9',
          isNew: false,
          detail: '采用100%真丝材质，手工卷边工艺，尺寸为90×90cm，图案采用数码印花技术，色彩鲜艳持久，适合搭配各种服饰。'
        },
        {
          id: 14,
          title: '丝巾2',
          description: '广绣流光·丝巾\n以传统广绣图案（如双喜鸳鸯、龙凤呈祥）为设计母本，选用真丝或雪纺材质，融合当代配色系统，打造兼具典雅与时尚感的日常佩戴艺术品',
          category: '服饰配件',
          origin: '广东',
          image: '/yuecunwenmai1/images/文创/丝巾/2.png',
          rating: '4.8',
          isNew: false,
          detail: '采用雪纺材质，轻盈透气，尺寸为180×65cm，可作披肩或头巾使用，图案设计融合现代审美，适合日常佩戴。'
        }
      ]
    }
  },
  methods: {
    showDetail(creation) {
      this.selectedCreation = creation;
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    },
    closeDetail() {
      this.selectedCreation = null;
      document.body.style.overflow = ''; // 恢复背景滚动
    },
    getDetailText(creation) {
      // 这里可以添加更复杂的详情文本处理逻辑
      return creation.detail || '暂无详细介绍';
    }
  }
}
</script>

<style scoped>
.creations {
  font-family: "Microsoft YaHei", "PingFang SC", sans-serif;
  background-color: #f8f8f8;
  color: #333;
}

/* 页面头部样式 */
.page-header {
  height: 400px;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url('/yuecunwenmai1/images/chaoshandiqu/qianmeicun/qianmeicun6.png') center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  position: relative;
}

.header-content {
  max-width: 800px;
  padding: 0 20px;
}

.page-header h1 {
  font-size: 4rem;
  margin-bottom: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.page-header p {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

.header-decoration {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.decoration-line {
  width: 60px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.8);
}

.decoration-icon {
  margin: 0 15px;
  font-size: 1.5rem;
}

/* 内容区域 */
.content {
  padding: 60px 5%;
  max-width: 1400px;
  margin: 0 auto;
}

/* 章节标题 */
.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #333;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
}

.section-header h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(to right, #6a5, #9c7);
}

.section-divider {
  height: 1px;
  width: 80%;
  max-width: 800px;
  margin: 30px auto;
  background-color: rgba(0, 0, 0, 0.1);
}

/* 产品网格 */
.creation-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

/* 产品卡片 */
.creation-card {
  position: relative;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.creation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
}

.card-image-container {
  height: 280px;
  overflow: hidden;
}

.creation-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.creation-card:hover .creation-image {
  transform: scale(1.05);
}

/* 产品信息 */
.creation-info {
  padding: 25px;
}

.info-header {
  margin-bottom: 15px;
}

.info-header h3 {
  font-size: 1.3rem;
  margin-bottom: 8px;
  color: #333;
}

.creation-description {
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 15px;
  height: 48px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.creation-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-size: 0.85rem;
  color: #999;
}

.creation-origin {
  background-color: #f9f9f9;
  padding: 3px 8px;
  border-radius: 4px;
}

/* 文化特色区域 */
.culture-feature {
  margin-top: 80px;
  background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)),
  url('https://example.com/village-culture.jpg') center/cover;
  padding: 60px 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.feature-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.feature-content h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.feature-content p {
  font-size: 1.1rem;
  color: #666;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 30px;
}

/* 详情弹窗样式 */
.detail-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto;
}

.modal-content {
  position: relative;
  background-color: white;
  border-radius: 10px;
  width: 80%;
  max-width: 900px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  animation: modalFadeIn 0.3s;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-btn {
  position: absolute;
  top: 15px;
  right: 20px;
  font-size: 2rem;
  color: #999;
  cursor: pointer;
  transition: color 0.2s;
}

.close-btn:hover {
  color: #333;
}

.modal-image-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
}

.modal-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-info {
  padding: 30px;
  flex-grow: 1;
}

.modal-info h2 {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #333;
}

.modal-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
  margin-bottom: 25px;
}

.modal-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 25px;
  font-size: 0.9rem;
  color: #666;
}

.modal-meta span {
  background-color: #f5f5f5;
  padding: 5px 12px;
  border-radius: 20px;
}

.modal-detail {
  margin-top: 30px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.modal-detail h3 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #444;
}

.modal-detail p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.8;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .page-header {
    height: 300px;
  }

  .page-header h1 {
    font-size: 2.5rem;
  }

  .page-header p {
    font-size: 1.2rem;
  }

  .creation-grid {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }

  .card-image-container {
    height: 220px;
  }

  .modal-content {
    width: 95%;
    flex-direction: column;
  }

  .modal-image-container {
    height: 200px;
  }
}

@media (min-width: 769px) {
  .modal-content {
    flex-direction: row;
  }

  .modal-image-container {
    width: 40%;
    height: auto;
    min-height: 400px;
  }

  .modal-info {
    width: 60%;
  }
}

@media (max-width: 480px) {
  .page-header h1 {
    font-size: 2rem;
  }

  .creation-grid {
    grid-template-columns: 1fr;
  }

  .card-image-container {
    height: 200px;
  }

  .modal-image-container {
    height: 180px;
    min-height: auto;
  }

  .modal-info {
    padding: 20px;
  }

  .modal-info h2 {
    font-size: 1.5rem;
  }
}
</style>
