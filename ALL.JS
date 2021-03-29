let data = [
  {
    "id": 0,
    "name": "綠島自由行套裝行程",
    "imgUrl": "https://images.unsplash.com/photo-1610128114197-485d933885c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    "area": "台北",
    "description": "嚴選超高CP值綠島自由行套裝行程，多種綠島套裝組合，提供台東綠島來回船票、綠島環島機車、綠島民宿住宿，行程加贈『綠島浮潛體驗』以及『綠島生態導覽』，讓你用輕鬆的綠島套裝自由行，也能深度認識綠島在地文化。",
    "group": 8,
    "price": 1280,
    "rate": 8.6
  },
  {
    "id": 1,
    "name": "清境高空觀景步道二日遊",
    "imgUrl": "https://images.unsplash.com/photo-1613425269135-fb9f19ae7be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
    "group": 12,
    "price": 2580,
    "rate": 2
  },
  {
    "id": 2,
    "name": "南庄度假村露營車二日遊",
    "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台南",
    "description": "南庄雲水豪華露營車，快來擁有最愜意的露營體驗吧！ 一泊一食，輕鬆享受露營車樂趣。 獨立衛浴與私人戶外露臺。 入住豪華露營車還能使用戶外SPA大眾湯，感受美人湯魅力。",
    "group": 2,
    "price": 2480,
    "rate": 9.2
  }, {
    "id": 3,
    "name": "山林悠遊雙人套票",
    "imgUrl": "https://images.unsplash.com/photo-1613733895930-4a51e90d50fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "山林悠遊套票，結合南投清境高空步道、雙龍瀑布七彩吊橋、瑞龍瀑布園區之熱門景點，帶您飽覽南投瑰麗的自然環境，體驗變化無窮的地形景觀，喜歡挑戰高空的您一定不可錯過。 （含雙龍瀑布入場券 x2）",
    "group": "限時搶購",
    "price": 880,
    "rate": 9.3
  }, {
    "id": 4,
    "name": "漁樂碼頭釣魚體驗套票",
    "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",

    "area": "台中",
    "description": "台中全新親子景點寶熊漁樂碼頭，為知名釣具公司「OKUMA」所創立的觀光工廠。一樓藍白希臘漁村風商店街免費參觀。二樓釣魚故事館則設立全台唯一虛擬釣場，透過導覽讓你知道如何釣魚、魚餌怎麼區分，寓教於樂的台中景點！",
    "group": 5,
    "price": 1280,
    "rate": 7.6
  }, {
    "id": 5,
    "name": "熊森公園親子二日遊套票",
    "imgUrl": "https://images.unsplash.com/photo-1516434233442-0c69c369b66d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    "area": "台中",
    "description": "來自日本最受歡迎的兒童遊樂園《 BearSon Park 熊森公園》於全世界有800多家據點，在全世界、日本及台灣，很多小孩的童年都在遊戲愛樂園裡一同成長，提供兒童一個最富教育性及娛樂性的休憩遊樂天地！",
    "group": 3,
    "price": 2480,
    "rate": 5.3
  }
];


const list = document.querySelector(".list");

//預設邏輯
function init () {
  let str = "";
  data.forEach(function (item) {
    str += `
  <div class="col mb-4">
                        <div class=" bg-white px-0 pb-3 shadow bg-white rounded card h-100">
                            <div style="position: relative;">
                                <img src="${item.imgUrl}" style="width:100%;" alt="...">
                                <div style="font-size: 20px; border-radius: 0 5px 5px 0px;  padding: 10px 20px; text-align: center; background-color: #64C3BF; color: white; position: absolute; top: -10px;">${item.area}</div>
                                <div style="font-size: 20px; border-radius: 0 5px 5px 0px; padding: 5px 15px; text-align: center; background-color: #00807E; color: white; position: absolute; bottom: -10px;">${item.rate}</div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title pb-1" style="border-bottom: 2px solid black;">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                            </div>
                            <div class="d-flex card-footer bg-transparent" style="border-top: 0; justify-content: space-between; align-items: center;">
                                <span class="card-text">
                                    <i class="fas fa-exclamation-circle"></i>
                                    剩下最後 ${item.group} 組
                                </span>
                                <h3>
                                    <small style="font-size: 10px; ">TWD</small>
                                    $${item.price}
                                </h3>
                            </div>
                        </div>
                    </div>
  `;
  });
  list.innerHTML = str;
}
init();

//篩選器邏輯
const filter = document.querySelector(".filter");
const dataNums = document.querySelector(".dataNum");
filter.addEventListener("change", function (e) {
  let str = "";
  let dataNum = 0;
  data.forEach(function (item, index) {
    if (e.target.value == "全部") {
      dataNum++;
      str += `
  <div class="col mb-4">
                        <div class=" bg-white px-0 pb-3 shadow bg-white rounded card h-100">
                            <div style="position: relative;">
                                <img src="${item.imgUrl}" style="width:100%;" alt="...">
                                <div style="font-size: 20px; border-radius: 0 5px 5px 0px;  padding: 10px 20px; text-align: center; background-color: #64C3BF; color: white; position: absolute; top: -10px;">${item.area}</div>
                                <div style="font-size: 20px; border-radius: 0 5px 5px 0px; padding: 5px 15px; text-align: center; background-color: #00807E; color: white; position: absolute; bottom: -10px;">${item.rate}</div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title pb-1" style="border-bottom: 2px solid black;">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                            </div>
                            <div class="d-flex card-footer bg-transparent" style="border-top: 0; justify-content: space-between; align-items: center;">
                                <span class="card-text">
                                    <i class="fas fa-exclamation-circle"></i>
                                    剩下最後 ${item.group} 組
                                </span>
                                <h3>
                                    <small style="font-size: 10px; ">TWD</small>
                                    $${item.price}
                                </h3>
                            </div>
                        </div>
                    </div>
  `;
    }
    if (e.target.value == item.area) {
      dataNum++;
      str += `
  <div class="col mb-4">
                        <div class=" bg-white px-0 pb-3 shadow bg-white rounded card h-100">
                            <div style="position: relative;">
                                <img src="${item.imgUrl}" style="width:100%;" alt="...">
                                <div style="font-size: 20px; border-radius: 0 5px 5px 0px;  padding: 10px 20px; text-align: center; background-color: #64C3BF; color: white; position: absolute; top: -10px;">${item.area}</div>
                                <div style="font-size: 20px; border-radius: 0 5px 5px 0px; padding: 5px 15px; text-align: center; background-color: #00807E; color: white; position: absolute; bottom: -10px;">${item.rate}</div>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title pb-1" style="border-bottom: 2px solid black;">${item.name}</h5>
                                <p class="card-text">${item.description}</p>
                            </div>
                            <div class="d-flex card-footer bg-transparent" style="border-top: 0; justify-content: space-between; align-items: center;">
                                <span class="card-text">
                                    <i class="fas fa-exclamation-circle"></i>
                                    剩下最後 ${item.group} 組
                                </span>
                                <h3>
                                    <small style="font-size: 10px; ">TWD</small>
                                    $${item.price}
                                </h3>
                            </div>
                        </div>
                    </div>
  `;
    }
  });
  list.innerHTML = str;
  dataNums.innerHTML = `<label class="col-md-5 mb-0 dataNum">本次搜尋共 ${dataNum} 筆資料</label>`;
});


//新增篩選器
const inputTitle = document.querySelector(".inputTitle");
const inputUrl = document.querySelector(".inputUrl");
const inputArea = document.querySelector(".inputArea");
const inputMoney = document.querySelector(".inputMoney");
const inputGroup = document.querySelector(".inputGroup");
const inputRate = document.querySelector(".inputRate");
const inputDescription = document.querySelector(".inputDescription");
const addBtn = document.querySelector(".addBtn");
let idNum = data.length - 1;


addBtn.addEventListener("click", function (e) {
  // {
  //   "id": 1,
  //   "name": "清境高空觀景步道二日遊",
  //   "imgUrl": "https://images.unsplash.com/photo-1613425269135-fb9f19ae7be8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  //   "area": "台中",
  //   "description": "清境農場青青草原數十公頃碧草，餵食著數以百計的綿羊和牛群，中央山脈最高的北三段群峰形成一堵如帶的高牆，攔住清晨的薄霧山嵐，成就了從花蓮翻山而來的雲瀑在濁水溪谷積成雲海，這些景觀豐沛了清境觀景步道的風格，也涵養它無可取代的特色。",
  //   "group": 12,
  //   "price": 2580,
  //   "rate": 2
  // }
  let obj = {};
  obj.name = inputTitle.value;
  obj.imgUrl = inputUrl.value;
  obj.area = inputArea.value;
  if (inputArea.value == "chooseOne") {
    alert('請選擇地區');
    return;
  }
  obj.description = inputDescription.value;
  obj.group = parseInt(inputGroup.value);
  obj.price = parseInt(inputMoney.value);
  if (inputMoney.value < 1 || inputGroup.value < 1) {
    alert('請輸入正整數');
    return;
  }
  obj.rate = parseInt(inputRate.value);
  if (inputRate.value < 1 || inputRate.value > 10) {
    alert('請輸入1~10');
    return;
  }
  obj.id = parseInt(idNum += 1);
  data.push(obj);
  inputUrl.value = "";
  inputTitle.value = "";
  inputArea.value = "";

  inputDescription.value = "";
  inputGroup.value = "";
  inputMoney.value = "";
  inputRate.value = "";
  init();
});

