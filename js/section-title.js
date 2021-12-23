// Grab HTML Elements
const sectionTitleList = document.querySelectorAll('.section__title');
const sectionTitleContentList = [
  [
    "About Instagram",
    "About\nInstagram",
  ],
  [
    "History Of Instagram",
    "History\nOf\nInstagram",
  ],
  [
    "How Instagram Work",
    "How\nInstagram\nWork"
  ],
];

// Set Function
function handleMouseEnter(order, leavedBool) {
  if (leavedBool === true) {
    sectionTitleList[order].innerText = sectionTitleContentList[order][0];
  } else if (leavedBool === false) {
    sectionTitleList[order].innerText = sectionTitleContentList[order][1];
  }
}

// Add Event Listener on Elements
for (let i = 0; i < sectionTitleList.length; i++) {
  const element = sectionTitleList[i];
  element.addEventListener('mouseenter', () => {
    handleMouseEnter(i, false);
  });
  element.addEventListener('mouseleave', () => {
    handleMouseEnter(i, true);
  })
  handleMouseEnter(i, true);
}
