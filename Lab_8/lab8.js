AddRow = () => {
    var row = document.createElement('div');
    row.innerHTML = `
    <input type="text"><input type="text">
    <button onclick="" >↑</button><button onclick="" >↓</button><button onclick="DeleteRow(this)" >x</button>
  `;
  document.querySelector('container').appendChild(row);
}

DeleteRow = (row) => {
    row.parentNode.remove();}
AddRow();