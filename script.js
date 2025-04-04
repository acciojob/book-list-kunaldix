//your JS code here. If required.
function addBook() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let isbn = document.getElementById("isbn").value;

  if (!title || !author || !isbn) {
    alert("Please fill in all fields");
    return;
  }
  let tableRow = document.getElementById("book-list");
  tableRow.innerHTML += `
  <tr class = "table-rows">
          <td>${title}</td>
          <td>${author}</td>
          <td>${isbn}</td>
          <td><span  class="material-symbols-outlined  delete"> close </span></td>
    </tr>
        `;
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
}

document.getElementById("book-list").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    e.target.closest("tr").remove();
  }
});
