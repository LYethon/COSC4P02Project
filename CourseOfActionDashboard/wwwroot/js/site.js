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
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')
            if (afterElement == null && !draggable.classList.contains('course_list')) {
                container.appendChild(draggable)
            } else if (!draggable.classList.contains('course_list')) {
                container.insertBefore(draggable, afterElement)
            }
        })
        container.addEventListener('drop', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')

            if (afterElement == null) {
                if (draggable.classList.contains('course_list')) {
                    const droppable = convertToCSObj(draggable);
                    container.appendChild(droppable);
                } else {
                    container.appendChild(draggable);
                }
            } else {  //insert element
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
    colorCourseList();
}


//Add year button ___________________________________________________________________________

numYears = 4;    //CHANGE LATER : SHOULD GET STUDENT'S TOTAL NUMBER OF YEARS FROM DB

function addYear() {

    numYears++;
    if (numYears <= 10) {
        // create an empty newYear element and its inner empty elements
        const newYearDiv = document.createElement("div");
        const newTitleDiv = document.createElement("div");
        const newUlDiv = document.createElement("div");
        const newUl = document.createElement("ul");

        // attach the styles for the newUl
        newUl.classList.add('ul_container', 'ul_format');
        newUl.style.minHeight = "50px";

        // add newUl and attach the styles for the newUlDiv
        newUlDiv.appendChild(newUl);
        newUlDiv.style.height = "100%";

        // attach the styles and content for the newTitleDiv
        const newTitle = document.createTextNode("Year "+ numYears); //CORRECT -> DON'T MAKE IT STATIC
        newTitleDiv.appendChild(newTitle);
        newTitleDiv.classList.add('row', 'year', 'mb-2');

        // add newUlDiv and newTitleDiv and attach the styles and content for the newYearDiv
        newYearDiv.appendChild(newTitleDiv);
        newYearDiv.appendChild(newUlDiv);
        newYearDiv.classList.add('col-6', 'col-sm-3', 'year_container');
        newYearDiv.style.display = "inline-block";

        // add the new element to the course planner container
        document.getElementById("course_planner").appendChild(newYearDiv);

        drag_and_drop(); //update the drag and droppable lists
    }
    //ELSE: SHOULD NOTIFY USER THAT THEY CANNOT ADD MORE THAN 10 YEARS
}


//Export schedule button ___________________________________________________________________________

function exportSchedule() {

}


// course list filter ________________________________________
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


function convertToCSObj(draggable) {

    // create the empty containers
    const newLi = document.createElement("li");
    const newTitle = document.createElement("div");
    const newBtn = document.createElement("span");

    // attach the styles for the newBtn
    newBtn.classList.add('col-1', 'remove_btn');
    const x = document.createTextNode("x");
    newBtn.appendChild(x);
    newBtn.setAttribute("onclick", "remove(this)");

    // attach the styles and content to the newTitle 
    newTitle.classList.add('col-10');

    const course_name = draggable.innerText;

    const title = document.createTextNode(course_name);
    newTitle.appendChild(title);

    // attach the styles for the newLi
    newLi.classList.add('row', 'credit_box', 'draggable');
    newLi.style.whiteSpace = "normal";
    newLi.draggable = true;

    // add the components to newLi
    newLi.appendChild(newTitle);
    newLi.appendChild(newBtn);

    return newLi;
}

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
