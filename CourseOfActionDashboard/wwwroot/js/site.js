// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//  updateProgress method: when changes are made to students schedule, use updateProgress
//  to update the credit counter and progress bar

function updateProgress() {
    //Required totals **these can be hardcoded if only relevant to computer science students
    var totOverall = 40;
    var totMajor = 32;
    var totMinor = 6;
    var totSocSci = 1;
    var totHuman = 1;
    var tot1alpha = 8;
    var tot2alpha = 8;
    var tot3alpha = 8;
    var tot4alpha = 8;
    //completed credits 
    var compOverall = 22; //number student has completed
    var compMajor = 12; //number of completed courses that have "major" attribute
    var compMinor = 4;
    var compSocSci = 0.5;
    var compHuman = 0.5;
    var comp1alpha = 8;
    var comp2alpha = 6;
    var comp3alpha = 0;
    var comp4alpha = 0;
    //planned credits **a completed credit does not count as a planned credit**
    var planOverall = 12; //number of courses in planner that aren't completed
    var planMajor = 20; //number of courses in the list as "planned" that have "major" attribute
    var planMinor = 2;
    var planSocSci = 0.5;
    var planHuman = 0.5;
    var plan1alpha = 0;
    var plan2alpha = 2;
    var plan3alpha = 8;
    var plan4alpha = 3;

    document.getElementById("overPlanned").innerHTML = (compOverall + planOverall) + "/" + totOverall;
    document.getElementById("overCompleted").innerHTML = (compOverall) + "/" + totOverall;
    document.getElementById("majorPlanned").innerHTML =(compMajor+planMajor) + "/" + totMajor;
    document.getElementById("majorCompleted").innerHTML = (compMajor) + "/" + totMajor;
    document.getElementById("minorPlanned").innerHTML = (compMinor + planMinor) + "/" + totMinor;
    document.getElementById("minorCompleted").innerHTML = (compMinor) + "/" + totMinor;
    document.getElementById("socPlanned").innerHTML = (compSocSci + planSocSci) + "/" + totSocSci;
    document.getElementById("socCompleted").innerHTML = (compSocSci) + "/" + totSocSci;
    document.getElementById("humPlanned").innerHTML = (compHuman + planHuman) + "/" + totHuman;
    document.getElementById("humCompleted").innerHTML = (compHuman) + "/" + totHuman;
    document.getElementById("1aPlanned").innerHTML = (comp1alpha + plan1alpha) + "/" + tot1alpha;
    document.getElementById("1aCompleted").innerHTML = (comp1alpha) + "/" + tot1alpha;
    document.getElementById("2aPlanned").innerHTML = (comp2alpha + plan2alpha) + "/" + tot2alpha;
    document.getElementById("2aCompleted").innerHTML = (comp2alpha) + "/" + tot2alpha;
    document.getElementById("3aPlanned").innerHTML = (comp3alpha + plan3alpha) + "/" + tot3alpha;
    document.getElementById("3aCompleted").innerHTML = (comp3alpha) + "/" + tot3alpha;
    document.getElementById("4aPlanned").innerHTML = (comp4alpha + plan4alpha) + "/" + tot4alpha;
    document.getElementById("4aCompleted").innerHTML = (comp4alpha) + "/" + tot4alpha;

    var percentComp = "width:" + ((compOverall/totOverall)*100) + "%";
    var percentPlanned = "width:" + ((planOverall/totOverall)*100) + "%";

    document.getElementById("percentCompleted").setAttribute("style", percentComp);
    document.getElementById("percentPlanned").setAttribute("style", percentPlanned);
}


// Drag and drop: ______________________________________________________________________________

const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.ul_container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

containers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault()
        const afterElement = getDragAfterElement(container, e.clientY)
        const draggable = document.querySelector('.dragging')
        if (afterElement == null) {
            container.appendChild(draggable)
        } else {
            container.insertBefore(draggable, afterElement)
        }
    })
})

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child }
        } else {
            return closest
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element
}


//Remove button ___________________________________________________________________________

function remove(el) {
    var child = el;
    var parent = child.parentNode;
    parent.parentNode.removeChild(parent);
}

