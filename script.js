document.addEventListener("DOMContentLoaded", async function () {
    const sheetId = "178cbMRtwkDaCm3xjLSeERMQ3cwIX--XeeD6FoQ8kaF8"; // ✅ Google Sheets ID
    const apiKey = "AIzaSyDX2FpQosfveKlDm43j840qXZT7kOcew1A"; // ✅ API 키
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1?key=${apiKey}`; // ✅ 올바른 URL

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        
        // ✅ API 응답 데이터 출력
        console.log("Google Sheets API 응답 데이터:", data);

        const values = data.values;

        if (!values || values.length < 2) {
            console.error("데이터가 없습니다.");
            document.getElementById("carTableBody").innerHTML = "<tr><td colspan='10'>데이터 없음</td></tr>";
            return;
        }

        let html = "";
        for (let i = 1; i < values.length; i++) { // 첫 번째 행(헤더)은 건너뜀
            const row = values[i];

            html += `<tr>
                <td>${row[0]}</td>  <!-- 차량명 -->
                <td>${row[1]}</td>  <!-- 연식 -->
                <td>${row[2]}</td>  <!-- 주행거리 -->
                <td>${row[3]}</td>  <!-- 최저매각가격 -->
                <td>${row[4]}</td>  <!-- 연료 -->
                <td>${row[5]}</td>  <!-- 매각기일 -->
                <td>${row[6]}</td>  <!-- 사건번호 -->
                <td>${row[7]}</td>  <!-- 물건번호 -->
                <td>${row[8]}</td>  <!-- 등록번호 -->
                <td><a href="https://www.courtauction.go.kr/" target="_blank">${row[9]}</a></td>  <!-- 담당 -->
            </tr>`;
        }

        document.getElementById("carTableBody").innerHTML = html;
    } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        document.getElementById("carTableBody").innerHTML = "<tr><td colspan='10'>데이터 로딩 오류</td></tr>";
    }
});
