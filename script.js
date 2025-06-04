const ctx = document.getElementById('powerChart').getContext('2d');
let powerData = {
  labels: ["1日", "2日", "3日", "4日", "5日", "6日", "7日"],
  datasets: [
    {
      label: "客廳",
      data: [10, 12, 9, 11, 13, 8, 14],
      borderColor: "red",
      backgroundColor: "rgba(255,0,0,0.1)",
      hidden: false
    },
    {
      label: "臥室",
      data: [5, 7, 6, 5, 6, 7, 8],
      borderColor: "blue",
      backgroundColor: "rgba(0,0,255,0.1)",
      hidden: false
    },
    {
      label: "廚房",
      data: [8, 9, 7, 10, 11, 9, 12],
      borderColor: "green",
      backgroundColor: "rgba(0,255,0,0.1)",
      hidden: false
    },
    {
      label: "浴室",
      data: [4, 4, 3, 5, 4, 4, 3],
      borderColor: "purple",
      backgroundColor: "rgba(128,0,128,0.1)",
      hidden: false
    }
  ]
};

let chart = new Chart(ctx, {
  type: 'line',
  data: powerData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '每週用電趨勢'
      }
    }
  }
});

function toggleRoom(room) {
  const dataset = chart.data.datasets.find(d => d.label === getRoomLabel(room));
  dataset.hidden = !dataset.hidden;
  chart.update();
}

function getRoomLabel(room) {
  switch (room) {
    case 'living': return '客廳';
    case 'bedroom': return '臥室';
    case 'kitchen': return '廚房';
    case 'bathroom': return '浴室';
    default: return '';
  }
}