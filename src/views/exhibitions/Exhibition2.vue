<template>
  <div class="exhibition-container">
    <h1>现代艺术展</h1>
    <div class="exhibition-content">
      <div class="exhibition-image">
        <img src="/images/1.jpg" alt="现代艺术展">
      </div>
      <div class="exhibition-details">
        <h2>探索20世纪现代艺术</h2>
        <p>本次展览汇集了毕加索、达利、莫奈等大师的经典作品，展现现代艺术的发展脉络。</p>
        <ul>
          <li>展览时间：2023年10月1日 - 2023年11月30日</li>
          <li>开放时间：9:00 - 17:00（周一闭馆）</li>
          <li>票价：成人票￥80，学生票￥40</li>
        </ul>
        <button @click="bookTicket" class="book-button">立即预约</button>
      </div>
    </div>
    <button @click="goBack" class="back-button">←</button>
  </div>
</template>

<script>
export default {
  name: 'Exhibition2',
  methods: {
    bookTicket() {
      this.$router.push('/booking/2');
    },
    goBack() {
      this.$router.go(-1); // 返回上一页
    }
  }
}
</script>

<style scoped>
.exhibition-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  min-height: 100vh;
}

.exhibition-content {
  display: flex;
  margin-top: 30px;
  gap: 30px;
}

.exhibition-image img {
  width: 100%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
}

.exhibition-details {
  flex: 1;
}

.book-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.book-button:hover {
  background-color: #45a049;
}

.back-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #333;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.back-button:hover {
  background-color: #555;
  transform: scale(1.1);
}
</style>
