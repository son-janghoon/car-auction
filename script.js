document.addEventListener("DOMContentLoaded", async function () {
    const sheetId = "178cbMRtwkDaCm3xjLSeERMQ3cwIX--XeeD6FoQ8kaF8"; // ✅ Google Sheets ID
    const url = `https://spreadsheets.google.com/feeds/list/${sheetId}/1/public/values?alt=json`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const entries = data.feed.entry;

        let html = "<table border='1'><tr><th>차량명</th><th>연식</th><th>주행거리</th><th>최저매각가격</th></tr>";

        entries.forEach(entry => {
            html += `<tr>
                <td>${entry.gsx$차량명.$t}</td>
                <td>${entry.gsx$연식.$t}</td>
                <td>${entry.gsx$주행거리.$t}</td>
                <td>${entry.gsx$최저매각가격.$t}</td>
            </tr>`;
        });

        html += "</table>";
        document.getElementById("data").innerHTML = html;
    } catch (error) {
        console.error("데이터를 가져오는 중 오류 발생:", error);
        document.getElementById("data").innerHTML = "<p>데이터를 불러오는 중 오류가 발생했습니다.</p>";
    }
});
