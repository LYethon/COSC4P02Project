// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//  updateProgress method: when changes are made to students schedule, use updateProgress
//  to update the credit counter and progress bar

var duplicate = false;
var ignore = false;





// Remove button: ______________________________________________________________________________

function remove(el) {
    var child = el;
    var parent = child.parentNode;
    parent.parentNode.removeChild(parent);
    checkDuplicates();
    colorCourseList();
    checkRequiredCourses();
}


// Drag and drop: ______________________________________________________________________________

creditValueData = [];
totalCreditValue = 0.0;

function callback(data, totWeight) {
    creditValueData = data;
    totalCreditValue = totWeight;
    console.log("totalCreditValue: " + totalCreditValue + " _creditValueData: " + creditValueData)
}

drag_and_drop();
colorCourseList();

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


function drag_and_drop() {
    const containers = document.querySelectorAll('.ul_container')
    addDragTag();
    
    containers.forEach(container => {
        container.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')
            getCreditValues(container) //update current credit weight count
            //console.log("dragover " + totalCreditValue)

            //if user can add credit to container..
            if (afterElement == null && !draggable.classList.contains('course_list') && totalCreditValue < config.max_cap_cr_year) {
                container.appendChild(draggable)
            } else if (!draggable.classList.contains('course_list') && totalCreditValue < config.max_cap_cr_year) {
                container.insertBefore(draggable, afterElement)
            }
            checkDuplicates();

        })
        container.addEventListener('drop', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(container, e.clientY)
            const draggable = document.querySelector('.dragging')
            getCreditValues(container) //update current credit weight count
            //console.log("drop " + totalCreditValue)

            if (afterElement == null && totalCreditValue < config.max_cap_cr_year) {

                if (draggable.classList.contains('course_list')) {
                    const droppable = convertToCSObj(draggable);
                    container.appendChild(droppable);
                } else {
                    container.appendChild(draggable);
                }
            } else if (totalCreditValue < config.max_cap_cr_year) {  //insert element
                if (draggable.classList.contains('course_list')) {
                    const droppable = convertToCSObj(draggable);
                    container.insertBefore(droppable, afterElement);
                } else {
                    container.insertBefore(draggable, afterElement);
                }
            }
            if (totalCreditValue > config.max_cr_year) { //if we have an overflow of weights in a year
                console.log("OVERFLOW")
                var data = creditValueData;
                highlightOverflow(container, data);
            }
            checkDuplicates();
            addDragTag();
            colorCourseList();
            if (!ignore) {
                warnDuplicates(duplicate);
                if (!duplicate) {
                    duplicate = false;
                }
            }
            checkRequiredCourses();
        })
    })
}


//highlights credits that exceed the max credit count
function highlightOverflow(container, data) {
    //determine where the overflow occurs
    var pos = 0;
    var weights = 0.0;
    for (p = 0; p < data.length; p++) {
        if (weights >= config.max_cr_year) {
            pos = p;
            break;
        }
        else weights += data[p]
    }
    //highlight overflowing course elements
    for (i = 0; i < container.childElementCount; i++) {
        if (i >= pos) {
            container.children[i].style.backgroundColor = "palegoldenrod";
        }
        else {
            container.children[i].style.backgroundColor = "white";
        }
    }

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

/*//highlights credits that exceed the max credit count
function highlightOverflow(container, numChildren) {
    console.log("enter highlightoverflow")
   // const yearContainer = container.querySelectorAll('.credit_box')
    console.log(container.childElementCount + " " + numChildren)
    for (i = 0; i < container.childElementCount; i++) {
        if (i >= numChildren) {
            container.children[i].style.backgroundColor = "palegoldenrod";
        }
        else {
            container.children[i].style.backgroundColor = "white";
        }
    }

}
*/


//counts the total weight of the student's credits from the CP
/*function countCredits(container, draggable) {
    var totCredits = 0.0

    const yearContainers = container.querySelectorAll('.credit_box')
    //add current dragging weight to calculation
    if (draggable != null) {
        var dragText = draggable.children[0].textContent.trim().substr(4).trim()
        var dragWeight = dragText[1]

        if (dragWeight == 'P' || dragWeight == 'C' || dragWeight == 'Q' || dragWeight == 'R' || dragWeight == 'V') dragWeight = 0.5
        else if (dragWeight == 'F' || dragWeight == 'G' || dragWeight == 'M') weight = 1.0
        else if (dragWeight == 'N') weight = 0.0
        else if (dragWeight == 'Y') weight = 0.25
        else if (dragWeight == 'D') weight = 1.5
        else if (dragWeight == 'L') weight = 2.0
        else if (dragWeight == 'A') weight = 3.0
        else if (dragWeight == 'B') weight = 4.5
        else if (dragWeight == 'Z') weight = 5.0
        else dragWeight = 0.0

        totCredits = dragWeight;
    }
    yearContainers.forEach(year => {
        var text = year.children[0].textContent.trim().substr(4).trim()
        var weight = text[1] //get the second char of the code
        if (weight == 'P' || weight == 'C' || weight == 'Q' || weight == 'R' || weight == 'V') weight = 0.5
        else if (weight == 'F' || weight == 'G' || weight == 'M') weight = 1.0
        else if (weight == 'N') weight = 0.0
        else if (weight == 'Y') weight = 0.25
        else if (weight == 'D') weight = 1.5
        else if (weight == 'L') weight = 2.0
        else if (weight == 'A') weight = 3.0
        else if (weight == 'B') weight = 4.5
        else if (weight == 'Z') weight = 5.0
        else weight = 0.0
        totCredits += weight;
    })
    return totCredits;
}
*/


//looks for duplicate credits witihin the student's CP
function checkDuplicates() {
    duplicate = false;
    const yearContainers = document.querySelectorAll('.credit_box')
    var idArray = [];
    //find duplicates
    yearContainers.forEach(year => {
        idArray.push(year.children[0].id)
    })
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
    var uniqueIds = new Set(findDuplicates(idArray))
    //highlight duplicates
    yearContainers.forEach(year => {
        if (uniqueIds.has(year.children[0].id)) {
            year.style.backgroundColor = "#ff969c";
            duplicate = true;
        }
        else {
            if (year.style.backgroundColor != "palegoldenrod")
                year.style.backgroundColor = "white";
        }
    })
}

//removeYear: removes the last year container in the CP
function removeYear(el) {
    var child = el;
    var parent = child.parentNode;
    var grandparent = parent.parentNode;
    grandparent.parentNode.removeChild(grandparent);
    colorCourseList();
    updateYearNums();
}


function updateYearNums() {
    var i = 1;
    const yearContainers = document.querySelectorAll('.year_container')
    yearContainers.forEach(year => {
        year.children[0].children[0].textContent = "Year " + i;
        i++;
    })
}

// addYear: adds a year container to the student's CP
function addYear() {
    var yearNum = document.getElementById('course_planner').childElementCount;
    if (yearNum < 10) {
        yearNum++;
        // create an empty newYear element and its inner empty elements
        const newYearDiv = document.createElement("div");
        const newTitleDiv = document.createElement("div");
        const newUlDiv = document.createElement("div");
        const newUl = document.createElement("ul");
        const newSpan1 = document.createElement("span");
        const newSpan2 = document.createElement("span");

        // attach the styles for the newUl and append to parent
        newUl.classList.add('ul_container', 'ul_format');

        newUl.addEventListener('dragover', e => {
            e.preventDefault()
            const afterElement = getDragAfterElement(newUl, e.clientY)
            const draggable = document.querySelector('.dragging')
            getCreditValues(newUl) //update current credit weight count
            //console.log("dragover " + totalCreditValue)

            //if user can add credit to newUl..
            if (afterElement == null && !draggable.classList.contains('course_list') && totalCreditValue < config.max_cap_cr_year) {
                newUl.appendChild(draggable)
            } else if (!draggable.classList.contains('course_list') && totalCreditValue < config.max_cap_cr_year) {
                newUl.insertBefore(draggable, afterElement)
            }
            checkDuplicates();

        })
        newUl.addEventListener('drop', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(newUl, e.clientY)
            const draggable = document.querySelector('.dragging')
            getCreditValues(newUl) //update current credit weight count
            //console.log("drop " + totalCreditValue)

            if (afterElement == null && totalCreditValue < config.max_cap_cr_year) {

                if (draggable.classList.contains('course_list')) {
                    const droppable = convertToCSObj(draggable);
                    newUl.appendChild(droppable);
                } else {
                    newUl.appendChild(draggable);
                }
            } else if (totalCreditValue < config.max_cap_cr_year) {  //insert element
                if (draggable.classList.contains('course_list')) {
                    const droppable = convertToCSObj(draggable);
                    newUl.insertBefore(droppable, afterElement);
                } else {
                    newUl.insertBefore(draggable, afterElement);
                }
            }
            if (totalCreditValue > config.max_cr_year) { //if we have an overflow of weights in a year
                console.log("OVERFLOW")
                var data = creditValueData;
                highlightOverflow(newUl, data);
            }
            checkDuplicates();
            addDragTag();
            colorCourseList();
            if (!ignore) {
                warnDuplicates(duplicate);
                if (!duplicate) {
                    duplicate = false;
                }
            }
        })


        newUl.style.minHeight = "400px";
        newUlDiv.appendChild(newUl);

        // attach the styles and content for the spans and append to parent
        newSpan1.classList.add('mb-2', 'mt-3');
        newSpan1.style.userSelect = "none";
        newSpan1.appendChild(document.createTextNode("Year " + yearNum));
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
    }
    //ELSE: SHOULD NOTIFY USER THAT THEY CANNOT ADD MORE THAN 10 YEARS
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
            if (courseList.item(i).innerText.substring(0, 9) == courseSchd.item(j).innerText.substring(0.9)) {
                courseList.item(i).classList.add('list-group-item-success');
                break;
            }
        }
    }
}

