const tabs = document.querySelector(".tabs");
const tabBtn = tabs.querySelectorAll('[role="tab"]');
const tabPanel = tabs.querySelectorAll('[role="tabpanel"]');

function handelClick(e) {
  console.log(e.target);
  tabPanel.forEach((tabSelected) => {
    tabSelected.hidden = true;
  });
  tabBtn.forEach((singleBtn) => {
    singleBtn.setAttribute("aria-selected", false);
  });
  // mark the clicked tab
  e.currentTarget.setAttribute("aria-selected", true);
  //find the assosited tabPanel and show it
  const id = e.currentTarget.id;
  const tabId = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabId.hidden = false;
}

tabBtn.forEach((btn) => {
  btn.addEventListener("click", handelClick);
});
