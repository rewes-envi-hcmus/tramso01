function setValuetoUI(id, value) {
  document.getElementById(id).innerHTML = value;
}

function setColorBackgroundbyId(id, background, color) {
  const div = document.getElementById(id);
  if (background === null) {
    div.style.color = color;
  }
  if (color === null) {
    div.style.background = background;
  }
  if (background && color) {
    div.style.background = background;
    div.style.color = color;
  }
}

function setColorBackgroundbyIdType(id, type) {
  if (type === 'wr') {
    const div = document.getElementById(id);
    div.style.background = 'white';
    div.style.color = 'red';
  }
}

function substractTime(time1) {
  let time2 = getTimeWithFormat();
  time = time2.diff(time1, 's');
  return moment.duration(time, "seconds").format("DD [ngày,] HH [giờ] mm [phút] ss [giây]");
}

function getTimeWithFormat(format) {
  if (!format) {
    return moment().locale('vi').utc().local();
  }
  return moment().locale('vi').utc().local().format(format);
}

function doLoopAction() {
  var do1 = setInterval(timeLoaded, 500);
  var do2 = setInterval(actionData, 500);
}

function getLinkData(mode) {
  return mode === 'real' ? 'https://rewes.herokuapp.com/' : 'http://localhost:8001/dummy-data';
}

doLoopAction();
const b = getLinkData('dummy');
actionData();
const data = getTimeWithFormat('dddd, DD/MM/YYYY - HH:mm:ss');
this.setValuetoUI('timeload', data.replace(data.charAt(0), data.charAt(0).toUpperCase()));
const time1 = getTimeWithFormat();

function timeLoaded() {
  setValuetoUI('timeloaded', substractTime(time1));
};
let dataObj = {
  dosemax: 0,
  Humax: 0,
  Temax: 0,
  sen1max: 0,
  sen2max: 0,
  sen3max: 0,
  dosemin: 99999,
  Humin: 99999,
  Temin: 99999,
  sen1min: 99999,
  sen2min: 99999,
  sen3min: 99999,
};
const stateColorId = ['td090', 'td091', 'td092', 'td093', 'td094', 'td095', 'td096']
const arrObj = [{
  dataId: 'realtime',
  colorId: 'td090'
}, {
  dataId: 'dose',
  colorId: 'td091'
}, {
  dataId: 'Te',
  colorId: 'td092'
}, {
  dataId: 'Hu',
  colorId: 'td093'
}, {
  dataId: 'sen1',
  colorId: 'td094'
}, {
  dataId: 'sen2',
  colorId: 'td095'
}, {
  dataId: 'sen3',
  colorId: 'td096'
}]

function actionData() {
  var date = getTimeWithFormat('dddd, DD/MM/YYYY - HH:mm:ss');
  setValuetoUI('time', date.replace(date.charAt(0), date.charAt(0).toUpperCase()));
  setValuetoUI('timenow', getTimeWithFormat('HH : mm : ss -- DD / MM / YYYY'));
  fetch(b).then(res => res.json().then(data => {
    let realtime = data.realtime;
    arrObj.forEach(item => {
      if (item.dataId !== 'realtime') {
        if (!!data[item.dataId]) {
          let loading = document.getElementById('loading');
          loading.style.display = "none";
          setValuetoUI(item.dataId, data[item.dataId].toFixed(2));
          const varMax = item.dataId + 'max';
          const varMin = item.dataId + 'min';
          setColorBackgroundbyId(item.colorId, 'lime', null);
          if (dataObj[varMax] <= data[item.dataId]) {
            dataObj[varMax] = data[item.dataId];
            setValuetoUI(varMax.toLowerCase(), dataObj[varMax].toFixed(2));
            setValuetoUI(('time' + varMax).toLowerCase(), getTimeWithFormat('HH:mm:ss - DD/MM/YYYY'));
          }
          if (dataObj[varMin] >= data[item.dataId]) {
            dataObj[varMin] = data[item.dataId];
            setValuetoUI(varMin.toLowerCase(), dataObj[varMin].toFixed(2));
            setValuetoUI(('time' + varMin).toLowerCase(), getTimeWithFormat('HH:mm:ss - DD/MM/YYYY'));
          }
        } else {
          let loading = document.getElementById('loading');
          loading.style.display = "none";
          setValuetoUI(item.dataId, null);
          setColorBackgroundbyId(item.colorId, 'red', null);
          console.log('Cannot find ', data[item.dataId]);
        }
      } else {
        if (!!realtime) {
          let loading = document.getElementById('loading');
          loading.style.display = "none";
          setValuetoUI('timestart', moment().subtract(realtime, 's').format('HH : mm -- DD / MM / YYYY'));
          setValuetoUI('timerun', moment.duration(realtime, "seconds").format("DD [ngày,] HH [giờ] mm [phút] ss [giây]"));
          setColorBackgroundbyIdType('td031', 'wr');
          setColorBackgroundbyIdType('td032', 'wr');
          setColorBackgroundbyId(item.colorId, 'lime', null);
          setValuetoUI('trangthai', 'Hệ đang hoạt động');
          setColorBackgroundbyId('trangthai', null, 'lime');
        } else {
          let loading = document.getElementById('loading');
          loading.style.display = "none";
          setValuetoUI('timestart', 'Hệ đang tắt!');
          setValuetoUI('timerun', 'Không xác định được!');
          setColorBackgroundbyIdType('td031', 'wr');
          setColorBackgroundbyIdType('td032', 'wr');
          setValuetoUI('trangthai', 'Hệ đang tắt');
          setColorBackgroundbyId('trangthai', null, 'red');
          setColorBackgroundbyId('td090', 'red', null);
        }
      }
    })
  })).catch(function (error) {
    console.log(error);
    let loading = document.getElementById('loading');
    loading.style.display = "none";
    setValuetoUI('timestart', 'Hệ đang tắt!');
    setValuetoUI('timerun', 'Không xác định được!');
    setColorBackgroundbyIdType('td031', 'wr');
    setColorBackgroundbyIdType('td032', 'wr');
    setValuetoUI('trangthai', 'Hệ đang tắt');
    setColorBackgroundbyId('trangthai', null, 'red');
    stateColorId.forEach(i => {
      setColorBackgroundbyId(i, 'red', null);
    });
  });
}