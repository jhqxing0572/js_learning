let note = document.getElementById('node');
note.innerHTML = `java testcontent demo
<span style="display: none">hidden</span>`;
console.log(typeof note.innerHTML);
console.log(note.textContent);
