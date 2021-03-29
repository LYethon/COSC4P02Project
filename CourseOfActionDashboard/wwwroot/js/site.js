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
    document.getElementById("majorPlanned").innerHTML = (compMajor + planMajor) + "/" + totMajor;
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

    var percentComp = "width:" + ((compOverall / totOverall) * 100) + "%";
    var percentPlanned = "width:" + ((planOverall / totOverall) * 100) + "%";

    document.getElementById("percentCompleted").setAttribute("style", percentComp);
    document.getElementById("percentPlanned").setAttribute("style", percentPlanned);
}


// Remove button: ______________________________________________________________________________

function remove(el) {
    var child = el;
    var parent = child.parentNode;
    parent.parentNode.removeChild(parent);
    colorCourseList();
}


// Drag and drop: ______________________________________________________________________________

maxYearCredits = 12; //CHANGE TO ACTUALLY CALC CREDIT WEIGHT AND ADD TO CONFIGURATIONS

drag_and_drop();
colorCourseList();


function drag_and_drop() {
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
            var numElements = container.childElementCount;
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')

            //if user can add credit to container..
            if (afterElement == null && !draggable.classList.contains('course_list') && numElements < maxYearCredits) {
                container.appendChild(draggable)
            } else if (!draggable.classList.contains('course_list') && numElements < maxYearCredits) {
                container.insertBefore(draggable, afterElement)
            }
        })
        container.addEventListener('drop', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')

            var numElements = container.childElementCount;

            if (afterElement == null && numElements < maxYearCredits) {
                if (draggable.classList.contains('course_list')) {
                    const droppable = convertToCSObj(draggable);
                    container.appendChild(droppable);
                } else {
                    container.appendChild(draggable);
                }
            } else if (numElements < maxYearCredits) {  //insert element
                if (draggable.classList.contains('course_list')) {
                    const droppable = convertToCSObj(draggable);
                    container.insertBefore(droppable, afterElement);
                } else {
                    container.insertBefore(draggable, afterElement);
                }
            }
            addDragTag();
            colorCourseList();
        })
    })
}

// getDragAfterElement: determines where the item should get dropped
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

numYears = 4; //CHANGE LATER : SHOULD GET STUDENT'S TOTAL NUMBER OF YEARS FROM DB

// addYear: adds a year container to the student's CP
function addYear() {

    if (numYears < 10) {
        numYears++;

        // create an empty newYear element and its inner empty elements
        const newYearDiv = document.createElement("div");
        const newTitleDiv = document.createElement("div");
        const newUlDiv = document.createElement("div");
        const newSpan1 = document.createElement("span");
        const newSpan2 = document.createElement("span");
        const newUl = document.createElement("ul");

        // attach the styles for the newUl and append to parent
        newUl.classList.add('ul_container', 'ul_format');
        newUl.style.minHeight = "400px";
        newUlDiv.appendChild(newUl);

        // attach the styles and content for the newTitleDiv
        newSpan1.classList.add('mb-2', 'mt-3');
        newSpan1.style.userSelect = "none";
        newSpan1.appendChild(document.createTextNode("Year " + numYears));
        newSpan2.classList.add('mt-3', 'ml-5', 'remove_year');
        newSpan2.style.cursor = "pointer";
        newSpan2.appendChild(document.createTextNode("remove"));
        newSpan2.setAttribute("onclick", "removeYear(this)");

        newTitleDiv.appendChild(newSpan1);
        newTitleDiv.appendChild(newSpan2);
        newTitleDiv.classList.add('row', 'year');
        newTitleDiv.style.userSelect = "none";

        // add newUlDiv and newTitleDiv and attach the styles and content for the newYearDiv
        newYearDiv.appendChild(newTitleDiv);
        newYearDiv.appendChild(newUlDiv);
        newYearDiv.classList.add('col-3', 'year_container', 'align-top', 'mt-2', 'mb-2', 'ml-1', 'pb-1', 'mr-1', 'd-inline-block');

        // add the new element to the course planner container
        document.getElementById("course_planner").appendChild(newYearDiv);

        drag_and_drop(); //update the drag and droppable lists

    }
    //ELSE: SHOULD NOTIFY USER THAT THEY CANNOT ADD MORE THAN 10 YEARS
}


//removeYear: removes the last year container in the CP
function removeYear(el) {

    var child = el;
    var parent = child.parentNode;
    var grandparent = parent.parentNode;
    grandparent.parentNode.removeChild(grandparent);
    colorCourseList();

    //ELSE: SHOULD NOTIFY USER THAT THEY CANNOT REMOVE ANY MORE YEARS
}


// Export schedule: ___________________________________________________________________________

function exportSchedule() {

}


// Course List filter: ________________________________________________________________________

function filterFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("div")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// convertToCSObj: converts the CS list item to a CP item
function convertToCSObj(draggable) {
    // create the empty containers
    const newLi = document.createElement("li");
    const newTitle = document.createElement("div");
    const newBtn = document.createElement("span");

    console.log(draggable.children[0].id)
    const id = draggable.children[0].id;

    // attach the styles for the newBtn
    newBtn.classList.add('col-1', 'pl-2', 'remove_btn');
    const x = document.createTextNode("x");
    newBtn.appendChild(x);
    newBtn.setAttribute("onclick", "remove(this)");

    // attach the styles and content to the newTitle 
    newTitle.id = id;
    newTitle.classList.add('col-10', 'pl-2', 'courseName');

    const course_name = draggable.innerText;

    const title = document.createTextNode(course_name);
    newTitle.appendChild(title);

    // attach the styles for the newLi
    newLi.classList.add('row', 'credit_box', 'draggable', 'p-2');
    newLi.style.whiteSpace = "normal";
    newLi.draggable = true;

    // add the components to newLi
    newLi.appendChild(newTitle);
    newLi.appendChild(newBtn);

    return newLi;
}

// colorCourseList: colours the CL item depending if already present in CP
function colorCourseList() {
    var courseList = document.querySelectorAll('.course_list');
    var courseSchd = document.querySelectorAll('.col-10');
    for (i = 0; i < courseList.length; i++) {
        if (courseList.item(i).classList.contains('list-group-item-success')) {
            courseList.item(i).classList.remove('list-group-item-success');
        }
        for (j = 0; j < courseSchd.length; j++) {
            if (courseList.item(i).innerText == courseSchd.item(j).innerText) {
                courseList.item(i).classList.add('list-group-item-success');
                break;
            }
        }
    }
}

// addDragTag: adds any newely added elements that has class 'draggable' into the query
function addDragTag() {
    const draggables = document.querySelectorAll('.draggable')

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging')
        })
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging')
        })
    })

}
