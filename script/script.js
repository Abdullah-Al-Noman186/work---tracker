let currentTab = "all";
const tabActive = ["bg-blue-500", "border-blue-500", "text-white"];
const tabInactive = ["bg-white", "border-gray-300", "text-gray-500"];

const allContainers = document.getElementById("all-container");
const interviewContainers = document.getElementById("interview-container");
const rejectedContainers = document.getElementById("rejected-container");
const emptyState = document.getElementById("empty-State");

function switchTab(tab) {
    console.log (tab);
    const tabs = ["all", "interviewing", "rejected",];


    for (const t of tabs) { 
        const  tabElement = document.getElementById("tab-" + t); 
        currentTab = tab;

        if(t === tab) {
           
            tabElement.classList.remove(...tabInactive);
            tabElement.classList.add(...tabActive);
        }
        else {
            tabElement.classList.add(...tabInactive);
            tabElement.classList.remove(...tabActive);
        }

   }
   const pages = [allContainers, interviewContainers, rejectedContainers];

   for (const page of pages) {
    page.classList.add("hidden");
   }

   emptyState.classList.add("hidden");

   if (tab === "all") {
    allContainers.classList.remove("hidden");
    if (allContainers.children.length < 1) {
        emptyState.classList.remove("hidden");
    }
   }
   else if (tab === "interviewing") {
    interviewContainers.classList.remove("hidden");  
    if (interviewContainers.children.length < 1) {
        emptyState.classList.remove("hidden");
    }
   }
   else if (tab === "rejected") {
    rejectedContainers.classList.remove("hidden");
    if (rejectedContainers.children.length < 1) {
        emptyState.classList.remove("hidden");
    }
   }
  updateCounts();
}

// count update
const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectedCount = document.getElementById("rejected-count");
const available = document.getElementById("available");

totalCount.innerText = allContainers.children.length;
interviewCount.innerText = interviewContainers.children.length;
rejectedCount.innerText = rejectedContainers.children.length;


switchTab(currentTab);

document.getElementById("job-Container").addEventListener("click", function(event) {
    const clickedElement = event.target;
    const cards = clickedElement.closest(".job-Card");
    const status = cards.querySelector(".status");
    const parent = cards.parentNode;


    if (clickedElement.classList.contains("interview-Btn")) {
        status.innerText = "Interviewing";
       interviewContainers.appendChild(cards);
       updateCounts();
    }

    if (clickedElement.classList.contains("rejected-Btn")) {
        status.innerText = "Rejected";
        rejectedContainers.appendChild(cards);
        updateCounts();
    }

    if (clickedElement.classList.contains("delete-Btn")) {
        parent.removeChild(cards);
        updateCounts();
    }

})

function updateCounts() {
    

    const counts = {
        all: allContainers.children.length,
        interviewing: interviewContainers.children.length,
        rejected: rejectedContainers.children.length,
    }
     
    totalCount.innerText = counts["all"];
    interviewCount.innerText = counts["interviewing"];
    rejectedCount.innerText = counts["rejected"];

    available.innerText = counts["currentTab"];

    if (counts [currentTab] <1 ){
        emptyState.classList.remove("hidden");
    }
    else {
        emptyState.classList.add("hidden");
    }

}

updateCounts();