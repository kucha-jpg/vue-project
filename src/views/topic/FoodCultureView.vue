<template>
  <div class="topic-detail">
    <NavBar />
    <div class="topic-header" style="background-image: url('/images/美食文化/客家美食/酿豆腐.png')">
      <button class="back-button" @click="goBack">
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </svg>
        返回
      </button>
      <h1>广东美食文化</h1>
      <p>品味广东风味，感受广东饮食魅力</p>
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
                <img src="/images/美食文化/潮汕美食/潮汕生腌.png" alt="潮汕生腌">
                <div class="item-info">
                  <h3>潮汕生腌</h3>
                  <p>潮汕生腌是广东潮汕地区的特色美食，以新鲜海鲜为主料，通过鱼露、酱油、蒜蓉、辣椒、芫荽等调料腌制而成。代表性菜品有生腌蟹、生腌虾、生腌血蚶等，讲究食材鲜活、调味精准。其独特之处在于通过腌制既保持海鲜的原始鲜甜，又赋予咸香辛辣的复合风味，口感嫩滑，令人回味。潮汕生腌不仅是当地饮食文化的精髓，更体现了潮汕人对食材本味的极致追求，如今已成为风靡全国的美食IP。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/潮汕美食/蚝仔煎.png" alt="蚝仔煎">
                <div class="item-info">
                  <h3>蚝仔煎</h3>
                  <p>蚝仔煎是闽南及潮汕地区的经典小吃，以新鲜海蛎（蚝仔）为主料，搭配地瓜粉浆、鸡蛋、葱花煎制而成。外酥里嫩的口感层次分明，蚝肉鲜甜多汁，地瓜粉的焦脆与蛋香完美融合。传统做法讲究火候掌控，需先煎后烘，配鱼露或甜辣酱提味。这道平民美食既保留了海洋的鲜美，又彰显了地方烹饪智慧，从街头摊档到高级餐馆都能见到它的身影，是最具烟火气的沿海风味代表。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/潮汕美食/红桃粿.png" alt="红桃粿">
                <div class="item-info">
                  <h3>红桃粿</h3>
                  <p>红桃粿是潮汕地区传统特色粿品，因其外形似桃而得名。以粳米粉或糯米粉为主料，包入糯米、香菇、虾米、猪肉等馅料，用桃形模具压制成型后蒸熟。红桃粿色泽红润，寓意吉祥，是潮汕节日和祭祀的重要食品，也是日常茶点佳品，承载着潮汕人民对美好生活的祈愿。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/潮汕美食/卤鹅.png" alt="卤鹅">
                <div class="item-info">
                  <h3>卤鹅</h3>
                  <p>卤鹅是潮汕地区的标志性卤味，选用肉质肥嫩的狮头鹅为原料，以老卤汤慢火浸煮而成。卤汁秘方通常包含八角、桂皮、酱油等数十种香料，经代代传承形成独特风味。成品鹅肉咸香入味、皮滑肉嫩，骨髓凝香，尤以鹅掌、鹅翅最为珍贵。作为潮汕宴席的"头盘"硬菜，卤鹅既体现了潮汕人对食材的极致追求，也承载着深厚的卤味文化，是舌尖上的非遗瑰宝。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/潮汕美食/牛肉丸.png" alt="牛肉丸">
                <div class="item-info">
                  <h3>牛肉丸</h3>
                  <p>潮汕牛肉丸是潮汕地区的传统名小吃，以新鲜牛肉为原料，经过反复捶打制成肉浆，再挤成丸状煮熟。牛肉丸口感弹牙，肉质鲜嫩，咬下去汁水四溢。传统的潮汕牛肉丸讲究"手打"工艺，保留了牛肉的纤维和口感，是潮汕美食中极具代表性的一道，无论是煮汤、火锅还是烧烤，都深受人们喜爱。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/潮汕美食/无米粿.png" alt="无米粿">
                <div class="item-info">
                  <h3>无米粿</h3>
                  <p>无米粿是潮汕地区特色粿品，因不使用大米而得名。以番薯粉制成粿皮，包入韭菜、绿豆等馅料，蒸熟后晶莹剔透。无米粿口感软糯，馅料鲜香，是潮汕人民日常喜爱的点心之一。其独特的制作工艺和丰富的馅料选择，体现了潮汕美食的多样性和创新性。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/潮汕美食/咸水粿.png" alt="咸水粿">
                <div class="item-info">
                  <h3>咸水粿</h3>
                  <p>咸水粿是潮汕地区传统小吃，以粳米粉制成粿皮，中间凹陷处放上菜脯粒，蒸熟后淋上糖浆。咸水粿口感软糯，菜脯粒咸香，糖浆微甜，三种味道相互交融，别具风味。它是潮汕街头常见的小吃之一，承载着许多潮汕人的童年回忆。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/潮汕美食/鸭母捻.png" alt="鸭母捻">
                <div class="item-info">
                  <h3>鸭母捻</h3>
                  <p>鸭母捻是潮汕地区特色甜品，因形状似鸭蛋而得名。以糯米粉制成汤圆皮，包入豆沙、芋泥、芝麻等馅料，煮熟后放入甜汤中。鸭母捻口感软糯，馅料香甜，甜汤清甜可口，是潮汕人喜爱的甜品之一，尤其在冬季，一碗热乎乎的鸭母捻能给人带来温暖和满足。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/潮汕美食/鱼饭.png" alt="鱼饭">
                <div class="item-info">
                  <h3>鱼饭</h3>
                  <p>鱼饭是潮汕地区的传统渔家美食，以新鲜海鱼为主料，经过清洗、腌制后，用盐水煮熟而成。鱼饭保持了鱼的原汁原味，肉质鲜嫩，口感鲜美。它是潮汕渔民出海捕鱼时的常备食物，也是潮汕地区餐桌上常见的一道菜，体现了潮汕人民对海洋食材的巧妙利用。</p>
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
                <img src="/images/美食文化/广府美食/白切鸡.png" alt="白切鸡">
                <div class="item-info">
                  <h3>白切鸡</h3>
                  <p>白切鸡是粤菜经典代表，选用三黄鸡或清远鸡，以"浸煮-冰镇"工艺制作。鸡身仅用姜葱盐水慢火浸熟，斩件后骨髓仍带桃红色，配姜葱蓉或沙姜豉油蘸食。其精髓在于火候精准，皮爽肉滑，原汁原味，完美诠释粤菜"鲜而不俗，嫩而不生"的烹饪哲学，既是广府家常美味，也是宴席必备菜肴。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/广府美食/广式腊肠.png" alt="广式腊肠">
                <div class="item-info">
                  <h3>广式腊肠</h3>
                  <p>广式腊肠是广府地区的传统特色腊味，以猪肉为主要原料，加入白酒、糖、盐等调料腌制后灌入肠衣晾晒而成。广式腊肠色泽红润，口感鲜甜，带有淡淡的酒香。它可以直接食用，也可以用来炒菜、煲仔饭等，是广府美食中不可或缺的食材之一。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/广府美食/广式牛杂.png" alt="广式牛杂">
                <div class="item-info">
                  <h3>广式牛杂</h3>
                  <p>广式牛杂是广州街头常见的小吃，以牛肚、牛肠、牛肺等牛杂为主料，加入八角、桂皮、香叶等香料炖煮而成。牛杂口感软糯，汤汁浓郁，搭配萝卜、豆腐泡等配菜，味道更加丰富。它是广府人喜爱的美食之一，无论是早餐、午餐还是晚餐，都能看到它的身影。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/广府美食/广式烧腊.png" alt="广式烧腊">
                <div class="item-info">
                  <h3>广式烧腊</h3>
                  <p>广式烧腊是广府地区的传统名菜，包括烧鹅、烧鸭、叉烧等多种菜品。烧腊以新鲜肉类为原料，经过腌制、晾晒、烤制等工艺制成。烧腊色泽红亮，口感香脆，肉质鲜嫩，搭配特制的酸梅酱或糖浆食用，味道更加美妙。它是广府宴席和日常饮食中常见的菜肴，深受人们喜爱。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/广府美食/广式烧卖.png" alt="广式烧卖">
                <div class="item-info">
                  <h3>广式烧卖</h3>
                  <p>广式烧卖是广式早茶中的经典点心之一，以猪肉、虾仁等为馅料，用薄面皮包裹后蒸熟。烧卖外形小巧玲珑，馅料鲜美多汁，口感软糯。它是广府人早茶时喜爱的点心之一，也是广式早茶文化的代表之一。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/广府美食/广式早茶文化.jpg" alt="广式早茶文化">
                <div class="item-info">
                  <h3>广式早茶文化</h3>
                  <p>广式早茶是岭南饮食文化的精髓，起源于清代广州的"茶楼文化"，现已发展为集社交、饮食与民俗于一体的生活方式。早茶以"一盅两件"（一壶茶配两样点心）为传统，包含上百种精致点心，如虾饺、烧卖、叉烧包、肠粉等，讲究"即点即蒸"的新鲜口感。茶品以普洱、菊花、铁观音为主，既解腻又助消化。广式早茶不仅是美食体验，更是广府人社交的重要场合。晨间亲友围桌"叹茶"（享受饮茶），闲话家常，体现"慢生活"哲学。茶楼内推车叫卖、揭盖续水的传统服务，更成为独特的文化符号。现代茶楼在保留传统的同时，创新推出榴莲酥、黑金流沙包等新式点心，吸引年轻食客。作为广东省非物质文化遗产，广式早茶已从地方习俗发展为全球中餐的代表性饮食文化，在海外华人社区及国际都市广受欢迎，成为传播岭南文化的"美味名片"。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/广府美食/老婆饼.png" alt="老婆饼">
                <div class="item-info">
                  <h3>老婆饼</h3>
                  <p>老婆饼是广府地区的传统糕点，以面粉、糖、油等为原料，包入冬瓜蓉、糯米粉等馅料，烤制而成。老婆饼外形圆润，色泽金黄，口感酥脆，馅料香甜。它是广府人喜爱的糕点之一，也是馈赠亲友的佳品。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/广府美食/粤式羊肉煲.png" alt="粤式羊肉煲">
                <div class="item-info">
                  <h3>粤式羊肉煲</h3>
                  <p>粤式羊肉煲是广府地区冬季的特色美食，以羊肉为主料，加入马蹄、甘蔗、竹蔗等食材炖煮而成。羊肉煲口感鲜美，汤汁浓郁，具有驱寒暖身的功效。它是广府人在冬季喜爱的美食之一，一家人围坐在一起，吃着热气腾腾的羊肉煲，感受着浓浓的亲情和温暖。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/广府美食/早茶点心.jpg" alt="早茶点心">
                <p></p>
                <div class="item-info">
                  <h3>早茶点心</h3>
                  <p>广式早茶点心种类繁多，包括虾饺、叉烧包、肠粉、糯米鸡等。这些点心制作精细，口感丰富，既有咸香可口的，也有香甜软糯的。早茶点心是广式早茶文化的重要组成部分，体现了广府人对美食的追求和对生活的热爱。</p>
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
                <img src="/images/美食文化/客家美食/艾粄.png" alt="艾粄">
                <div class="item-info">
                  <h3>艾粄</h3>
                  <p>艾粄是客家地区的传统美食，以艾草和糯米粉为主要原料，包入花生、芝麻、糖等馅料，蒸熟而成。艾粄口感软糯，带有艾草的清香，馅料香甜可口。它是客家人在清明时节常吃的食品，寓意着健康和平安。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/客家美食/客家烧鱼白.png" alt="客家烧鱼白">
                <div class="item-info">
                  <h3>客家烧鱼白</h3>
                  <p>客家烧鱼白是客家地区的特色菜肴，以鱼肉为主料，加入鸡蛋、淀粉等调料搅拌成鱼浆，再煎制而成。烧鱼白口感鲜嫩，外酥里嫩，味道鲜美。它是客家人在宴席上常见的一道菜，深受人们喜爱。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/客家美食/客家腌面.png" alt="客家腌面">
                <div class="item-info">
                  <h3>客家腌面</h3>
                  <p>客家腌面是客家地区的传统面食，以手工面条为主料，加入猪油、葱花、酱油等调料拌匀而成。腌面口感爽滑，味道香浓，是客家人早餐的常见选择。它简单易做，却蕴含着客家人对家乡的思念和对美食的热爱。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/客家美食/酿豆腐.png" alt="酿豆腐">
                <div class="item-info">
                  <h3>酿豆腐</h3>
                  <p>酿豆腐是客家三大名菜之一，在豆腐中填入肉馅煎制而成，外酥里嫩，汤汁醇厚，体现了客家人的烹饪智慧。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/客家美食/酿茄子.png" alt="酿茄子">
                <div class="item-info">
                  <h3>酿茄子</h3>
                  <p>酿茄子是客家地区的传统菜肴，以茄子为主料，在茄子中间挖空，填入肉馅后煎制而成。酿茄子口感软糯，肉馅鲜美，汤汁浓郁。它是客家人在日常生活中常做的一道菜，营养丰富，味道可口。</p>
                </div>
              </div>

              <div class="culture-item">
                <img src="/images/美食文化/客家美食/盐焗鸡.png" alt="盐焗鸡">
                <div class="item-info">
                  <h3>盐焗鸡</h3>
                  <p>盐焗鸡是客家传统名菜，用粗盐将整鸡焗熟，皮滑肉嫩，骨香浓郁，体现了客家人节俭持家的美德。</p>
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
