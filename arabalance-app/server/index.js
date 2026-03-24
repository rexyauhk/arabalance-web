/**
 * Mock Arabalance 訂單 API：模擬從電商取得的訂單，並計算產品剩餘天數。
 */
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** 模擬 Arabalance 後台訂單資料（實務上會來自資料庫） */
function getMockOrders() {
  const now = Date.now();
  // 訂單 A：約剩 5 天（少於 7 天 → 首頁顯示復購提醒）
  const orderA = {
    id: 'ab-mock-001',
    productName: 'Arabalance 控糖配方',
    supplyDays: 30,
    orderedAt: new Date(now - 25 * MS_PER_DAY).toISOString(),
  };
  // 訂單 B：示範多筆訂單時取「最少剩餘天數」
  const orderB = {
    id: 'ab-mock-002',
    productName: 'Arabalance 隨身包',
    supplyDays: 14,
    orderedAt: new Date(now - 10 * MS_PER_DAY).toISOString(),
  };

  return [orderA, orderB];
}

function remainingDaysForOrder(order) {
  const ordered = new Date(order.orderedAt).getTime();
  const daysSince = Math.floor((Date.now() - ordered) / MS_PER_DAY);
  return Math.max(0, order.supplyDays - daysSince);
}

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'arabalance-mock-api' });
});

/**
 * GET /api/orders
 * 回傳訂單列表與每筆「產品剩餘天數」，以及全站最少剩餘天數（用於復購提醒）。
 */
app.get('/api/orders', (_req, res) => {
  const raw = getMockOrders();
  const orders = raw.map((o) => ({
    ...o,
    remainingDays: remainingDaysForOrder(o),
  }));
  const minRemainingDays = orders.reduce(
    (min, o) => Math.min(min, o.remainingDays),
    Infinity
  );

  res.json({
    source: 'mock-arabalance',
    orders,
    minRemainingDays: Number.isFinite(minRemainingDays) ? minRemainingDays : 0,
    repurchaseSuggested: minRemainingDays < 7,
  });
});

app.listen(PORT, () => {
  console.log(`Arabalance mock API: http://localhost:${PORT}`);
  console.log(`  GET /api/health  GET /api/orders`);
});
