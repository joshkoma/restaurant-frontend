const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
const dropdown = document.querySelector('.nav-item-dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');

if (mobileMenuBtn && mobileDrawer) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileDrawer.classList.toggle('open');
  });
}


if (dropdown && dropdownToggle) {
  dropdownToggle.addEventListener('click', function (e) {
    e.preventDefault();
    dropdown.classList.toggle('open');
  });

  document.addEventListener('click', function (e) {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
    }
  });
}