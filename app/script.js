// 🚗 자동차 사진 확인 방법 버튼 기능
function toggleGuide() {
    const guide = document.getElementById("guide");
    guide.classList.toggle("hidden");
}

// ✅ 경매 차량 데이터 불러오기 (API 호출)
function fetchCars() {
    fetch('https://your-google-cloud-api.com/api/cars')  // 👉 API 주소 변경 필요
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("carTableBody");
            tableBody.innerHTML = "";

            data.forEach(car => {
                const row = `<tr>
                    <td>${car.차명}</td>
                    <td>${car.연식}</td>
                    <td>${car.주행거리}</td>
                    <td>${car.최저매각가격}</td>
                    <td>${car.연료종류}</td>
                    <td>${car.매각기일}</td>
                    <td>${car.사건번호}</td>
                    <td>${car.물건번호}</td>
                    <td>${car.등록번호}</td>
                    <td><a href="https://www.courtauction.go.kr" target="_blank">${car.담당}</a></td>
                </tr>`;
                tableBody.innerHTML += row;
            });
        })
        .catch(error => console.error('데이터 불러오기 실패:', error));
}

// ✅ 페이지 로딩 시 차량 데이터 자동 불러오기
window.onload = fetchCars;
