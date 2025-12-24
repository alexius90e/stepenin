const buyCourseElms = document.querySelectorAll('.buy-course__course');

buyCourseElms.forEach((buyCourseElm) => {
  buyCourseElm.addEventListener('click', (event) => {
    const isAddButton = event.target.classList.contains('buy-course__course-add-button');
    const isSuccessButton = event.target.classList.contains('buy-course__course-add-success');

    if (isAddButton) event.currentTarget.classList.add('active');
    if (isSuccessButton) event.currentTarget.classList.remove('active');
  });
});

const paymentTotal = document.querySelector('.buy-course__payment-total');
const paymentPaylink = document.querySelector('.buy-course__payment-pay-link');

if (paymentTotal && paymentPaylink) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          paymentPaylink.classList.remove('visible');
        } else {
          paymentPaylink.classList.add('visible');
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  observer.observe(paymentTotal);
}

const gradeRadios = document.querySelectorAll('.buy-course__grade-control-input');
const courseBlocks = document.querySelectorAll('.buy-course__courses-block');

function updateActiveBlock() {
  const checkedRadio = document.querySelector('.buy-course__grade-control-input:checked');

  if (!checkedRadio) return;

  const gradeValue = checkedRadio.value;

  courseBlocks.forEach((block) => {
    if (block.dataset.grade === gradeValue) {
      block.classList.add('active');
    } else {
      block.classList.remove('active');
    }
  });
}

updateActiveBlock();

gradeRadios.forEach((radio) => {
  radio.addEventListener('change', updateActiveBlock);
});
