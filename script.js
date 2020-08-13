/* Add any JavaScript you need to this file. */

function filter() {
  if (document.getElementById('checkbox_category_phones').checked == true) {
    document.querySelector('.phones').style.display = 'block';
    document.querySelector('.pcs').style.display = 'none';
    document.querySelector('.parts').style.display = 'none';
  } else if (document.getElementById('checkbox_category_PC').checked == true) {
    document.querySelector('.phones').style.display = 'none';
    document.querySelector('.pcs').style.display = 'block';
    document.querySelector('.parts').style.display = 'none';
  } else if (document.getElementById('checkbox_category_parts').checked == true) {
    document.querySelector('.phones').style.display = 'none';
    document.querySelector('.pcs').style.display = 'none';
    document.querySelector('.parts').style.display = 'block';
  } else {
    document.querySelector('.phones').style.display = 'block';
    document.querySelector('.pcs').style.display = 'block';
    document.querySelector('.parts').style.display = 'block';
  }
}

window.addEventListener('load', function() {
  document.getElementById('checkbox_category_phones').addEventListener('click', filter);
});

window.addEventListener('load', function() {
  document.getElementById('checkbox_category_PC').addEventListener('click', filter);
});

window.addEventListener('load', function() {
  document.getElementById('checkbox_category_parts').addEventListener('click', filter);
});
