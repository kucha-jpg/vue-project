import{N as g}from"./NavBar-CUfHI2uT.js";import{_ as m,c as o,b as p,q as _,d as e,h as r,r as v,F as u,i as h,u as y,t as a,o as l}from"./index-BQyouPzZ.js";const f={name:"CreationsView",components:{NavBar:g},data(){return{selectedCreation:null,creations:[{id:1,title:"jellycat1",description:"把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕",category:"美食文创",origin:"广东",image:"/images/文创/jellycat/1.png",rating:"4.8",isNew:!0,detail:"以广东特色美食为灵感设计的可爱玩偶，采用柔软亲肤面料，填充优质PP棉，可手洗清洁，是家居装饰和收藏的绝佳选择。"},{id:2,title:"jellycat2",description:"把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕",category:"美食文创",origin:"广东",image:"/images/文创/jellycat/2.png",rating:"4.9",isNew:!1,detail:"以广东传统小吃为原型设计的玩偶，采用立体刺绣工艺展现食物细节，搭配精美包装盒，是送礼自用的优质选择。"},{id:3,title:"jellycat3",description:"把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕",category:"美食文创",origin:"广东",image:"/images/文创/jellycat/3.png",rating:"4.7",isNew:!1,detail:"以广东特色甜品为造型的玩偶，采用环保印染工艺，色彩鲜艳持久，适合各个年龄段的收藏爱好者。"},{id:4,title:"jellycat4",description:"把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕",category:"美食文创",origin:"广东",image:"/images/文创/jellycat/4.png",rating:"4.6",isNew:!0,detail:"以广东传统糕点为设计灵感的玩偶，采用双层缝制工艺，内部填充高回弹海绵，手感柔软舒适。"},{id:5,title:"jellycat5",description:"把广东味道捧在手心，让这些萌物带你领略独特的岭南美食风情，爱了爱了💕",category:"美食文创",origin:"广东",image:"/images/文创/jellycat/5.png",rating:"4.8",isNew:!0,detail:"以广东特色茶点为造型的玩偶，采用立体裁剪工艺，完美还原食物形态，是茶文化爱好者的收藏佳品。"},{id:6,title:"潮汕包包",description:"灵感源自潮汕非遗红桃粿，以经典桃形轮廓搭配吉祥纹饰，朱红主色调传递喜庆祝福。立体粿印压纹包身搭配流苏穗坠，将传统祭粿文化化为时尚单品，寓意「包」纳福运，随身携带潮汕人的吉庆记忆。",category:"非遗手作",origin:"广东潮汕",image:"/images/文创/潮汕包包/chaoshanbaobao1.jpg",rating:"4.9",isNew:!1,detail:"采用优质PU皮革制作，包身立体压纹工艺还原红桃粿纹样，可拆卸流苏设计，内部分层合理，容量适中，适合日常搭配。"},{id:7,title:"潮汕男包",description:"灵感源自潮汕非遗红桃粿，以经典桃形轮廓搭配吉祥纹饰，朱红主色调传递喜庆祝福。立体粿印压纹包身搭配流苏穗坠，将传统祭粿文化化为时尚单品，寓意「包」纳福运，随身携带潮汕人的吉庆记忆。",category:"非遗手作",origin:"广东潮汕",image:"/images/文创/潮汕包包/chaoshanbaobao2.jpg",rating:"4.7",isNew:!1,detail:"精选牛皮材质，包身压印红桃粿纹样，搭配金属流苏挂饰，内部分隔合理，可容纳手机、钱包等日常物品，适合商务休闲场合。"},{id:8,title:"古村窗棂书签1",description:"采用激光切割工艺，在黄铜/不锈钢片上还原窗棂镂空结构，在书签顶部设计可拆卸的岭南灰塑元素吊坠（如鳌鱼、醒狮造型）",category:"工艺美术",origin:"广东",image:"/images/文创/古村窗棂书签/gucunchuanglingshuqian1.png",rating:"4.8",isNew:!0,detail:"采用黄铜材质，激光切割还原传统窗棂纹样，顶部可更换灰塑元素吊坠，尺寸为15×4cm，表面做旧处理，适合书籍收藏爱好者。"},{id:9,title:"古村窗棂书签2",description:"采用激光切割工艺，在黄铜/不锈钢片上还原窗棂镂空结构，在书签顶部设计可拆卸的岭南灰塑元素吊坠（如鳌鱼、醒狮造型）",category:"工艺美术",origin:"广东",image:"/images/文创/古村窗棂书签/gucunchuanglingshuqian2.png",rating:"4.9",isNew:!0,detail:"采用不锈钢材质，表面镀金处理，激光雕刻窗棂纹样，顶部可拆卸醒狮造型吊坠，尺寸为16×5cm，适合作为礼品赠送。"},{id:10,title:"盲盒1",description:`1. 主题定位
• 系列名称：《岭南旧梦》
• 风格基调：岭南传统建筑元素 × 微缩景观 × Q版拟人角色
• 目标人群：文旅爱好者、潮玩收藏圈、年轻文艺消费人群

⸻

2. 产品系列设计

每一款盲盒都结合一个岭南经典建筑元素（总计8款+2款隐藏款）

编号	名称	元素特色	角色设定
01	镬耳飞檐	镬耳墙造型	小女孩佩戴飞檐发饰，脚踏青砖
02	青砖小巷	青砖灰瓦小巷	短衣少年捧着油纸灯
03	红门碧瓦	朱红大门配青瓦	小女孩推开小红门，眺望远方
04	骑楼街景	骑楼拱廊建筑	小男孩靠着骑楼拱柱
05	花窗光影	花格雕刻窗	小动物趴在雕花窗台上打盹
06	石雕龙柱	石雕艺术	小角色盘坐在龙柱下
07	岭南庭院	天井院落	小姑娘打理小院盆栽
08	灰塑剪影	灰塑墙艺	灰塑图案在角色身后浮现`,category:"潮玩收藏",origin:"广东",image:"/images/文创/盲盒/3.png",rating:"4.6",isNew:!0,detail:"采用PVC材质，每款盲盒高度约8cm，附带专属展示底座，包装盒设计为岭南建筑风格，内含角色故事卡片。"},{id:11,title:"盲盒2",description:`1. 主题定位
• 系列名称：《岭南旧梦》
• 风格基调：岭南传统建筑元素 × 微缩景观 × Q版拟人角色
• 目标人群：文旅爱好者、潮玩收藏圈、年轻文艺消费人群

⸻

2. 产品系列设计

每一款盲盒都结合一个岭南经典建筑元素（总计8款+2款隐藏款）

编号	名称	元素特色	角色设定
01	镬耳飞檐	镬耳墙造型	小女孩佩戴飞檐发饰，脚踏青砖
02	青砖小巷	青砖灰瓦小巷	短衣少年捧着油纸灯
03	红门碧瓦	朱红大门配青瓦	小女孩推开小红门，眺望远方
04	骑楼街景	骑楼拱廊建筑	小男孩靠着骑楼拱柱
05	花窗光影	花格雕刻窗	小动物趴在雕花窗台上打盹
06	石雕龙柱	石雕艺术	小角色盘坐在龙柱下
07	岭南庭院	天井院落	小姑娘打理小院盆栽
08	灰塑剪影	灰塑墙艺	灰塑图案在角色身后浮现`,category:"潮玩收藏",origin:"广东",image:"/images/文创/盲盒/4.png",rating:"4.7",isNew:!0,detail:"隐藏款设计有特殊工艺处理，如夜光效果或可动关节，每盒附带收藏编号，适合系列收藏。"},{id:12,title:"手机壳1",description:`岭南花窗·手机壳
参考广府祠堂和骑楼建筑中的镂空花窗图案，采用环保TPU材质与激光镂空工艺，兼具美观与保护性，成为随身岭南文化"展示窗"`,category:"数码配件",origin:"广东",image:"/images/文创/手机壳/1.jpg",rating:"4.8",isNew:!0,detail:"采用TPU软胶材质，四角加厚防摔设计，激光镂空工艺精准还原花窗图案，适配主流手机型号，提供多种颜色选择。"},{id:13,title:"丝巾1",description:`广绣流光·丝巾
以传统广绣图案（如双喜鸳鸯、龙凤呈祥）为设计母本，选用真丝或雪纺材质，融合当代配色系统，打造兼具典雅与时尚感的日常佩戴艺术品`,category:"服饰配件",origin:"广东",image:"/images/文创/丝巾/1.jpg",rating:"4.9",isNew:!1,detail:"采用100%真丝材质，手工卷边工艺，尺寸为90×90cm，图案采用数码印花技术，色彩鲜艳持久，适合搭配各种服饰。"},{id:14,title:"丝巾2",description:`广绣流光·丝巾
以传统广绣图案（如双喜鸳鸯、龙凤呈祥）为设计母本，选用真丝或雪纺材质，融合当代配色系统，打造兼具典雅与时尚感的日常佩戴艺术品`,category:"服饰配件",origin:"广东",image:"/images/文创/丝巾/2.png",rating:"4.8",isNew:!1,detail:"采用雪纺材质，轻盈透气，尺寸为180×65cm，可作披肩或头巾使用，图案设计融合现代审美，适合日常佩戴。"}]}},methods:{showDetail(c){this.selectedCreation=c,document.body.style.overflow="hidden"},closeDetail(){this.selectedCreation=null,document.body.style.overflow=""},getDetailText(c){return c.detail||"暂无详细介绍"}}},C={class:"creations"},N={class:"content"},w={class:"creation-list"},b={class:"creation-grid"},j=["onClick"],D={class:"card-image-container"},k=["src","alt"],V={class:"creation-info"},B={class:"info-header"},P={class:"creation-description"},x={class:"creation-meta"},T={class:"creation-category"},q={class:"creation-origin"},U={class:"modal-content"},F={class:"modal-image-container"},Q=["src","alt"],S={class:"modal-info"},E={class:"modal-description"},I={class:"modal-meta"},L={class:"modal-category"},M={class:"modal-origin"},z={key:0,class:"modal-rating"},A={class:"modal-detail"};function G(c,i,H,J,s,n){const d=v("NavBar");return l(),o("div",C,[p(d),i[5]||(i[5]=_('<div class="page-header" data-v-0fb29035><div class="header-content" data-v-0fb29035><h1 data-v-0fb29035>传统村落文创</h1><p data-v-0fb29035>守护村落记忆，焕活乡村新生</p><div class="header-decoration" data-v-0fb29035><div class="decoration-line" data-v-0fb29035></div><div class="decoration-icon" data-v-0fb29035>🏡</div><div class="decoration-line" data-v-0fb29035></div></div></div></div>',1)),e("div",N,[e("section",w,[i[2]||(i[2]=e("div",{class:"section-header"},[e("h2",null,"村落文创精选"),e("div",{class:"section-divider"})],-1)),e("div",b,[(l(!0),o(u,null,h(s.creations,t=>(l(),o("div",{class:"creation-card",key:t.id,onClick:K=>n.showDetail(t)},[e("div",D,[e("img",{src:t.image,alt:t.title,class:"creation-image"},null,8,k)]),e("div",V,[e("div",B,[e("h3",null,a(t.title),1)]),e("p",P,a(t.description),1),e("div",x,[e("span",T,a(t.category),1),e("span",q,a(t.origin),1)])])],8,j))),128))])]),i[3]||(i[3]=e("section",{class:"culture-feature"},[e("div",{class:"feature-content"},[e("h3",null,"村落记忆，匠心传承"),e("p",null,"我们的文创产品汲取传统村落建筑、民俗、手工艺等多元文化精髓，将古村智慧与现代设计完美融合，让传统村落文化以全新姿态走进您的生活。")])],-1))]),s.selectedCreation?(l(),o("div",{key:0,class:"detail-modal",onClick:i[1]||(i[1]=y((...t)=>n.closeDetail&&n.closeDetail(...t),["self"]))},[e("div",U,[e("span",{class:"close-btn",onClick:i[0]||(i[0]=(...t)=>n.closeDetail&&n.closeDetail(...t))},"×"),e("div",F,[e("img",{src:s.selectedCreation.image,alt:s.selectedCreation.title,class:"modal-image"},null,8,Q)]),e("div",S,[e("h2",null,a(s.selectedCreation.title),1),e("p",E,a(s.selectedCreation.description),1),e("div",I,[e("span",L,"类别: "+a(s.selectedCreation.category),1),e("span",M,"产地: "+a(s.selectedCreation.origin),1),s.selectedCreation.rating?(l(),o("span",z,"评分: "+a(s.selectedCreation.rating),1)):r("",!0)]),e("div",A,[i[4]||(i[4]=e("h3",null,"产品详情",-1)),e("p",null,a(n.getDetailText(s.selectedCreation)),1)])])])])):r("",!0)])}const W=m(f,[["render",G],["__scopeId","data-v-0fb29035"]]);export{W as default};
