'use strict';

// selecting elements

const image = document.getElementById('image');

const nameEl = document.getElementById('name');

const job = document.getElementById('job');

const quote = document.getElementById('quote');

// buttons

const prevBtn = document.getElementById('prev-btn');

const nextBtn = document.getElementById('next-btn');

// global variables
let currentItem = 0;

// array of persons

const reviews = [
  {
    text: ` I’ve been interested in coding for a while but never taken the jump, until now.
I couldn’t recommend this course enough. I’m now in the job of my dreams and so
excited about the future. ”`,

    name: 'Tanya Sinclair',
    job: 'UX Engineer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  },

  {
    text: `If you want to lay the best foundation possible I’d recommend taking this course.
The depth the instructors go into is incredible. I now feel so confident about
starting up as a professional developer.`,

    name: 'John Tarkpor',
    job: 'Junior Front-end Developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
  },
];

// functions
function showPerson() {
  const item = reviews[currentItem];
  quote.textContent = item.text;
  image.src = item.image;
  nameEl.innerText = item.name;
  job.innerText = item.job;
  console.log(`hiiii`);
}

// event listeners
// next button

nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();

  // console.log(`bye`);
});

// previous button

prevBtn.addEventListener('click', function () {
  currentItem--;
  console.log(currentItem);
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
