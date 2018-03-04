// HTML adhoc Structure
var $div = d3.select('#tableation');
var $div2 = d3.select('#pagination')
var $form = $div.append('form').attr('class', 'my-3');
var $table = $div.append('table').attr('class', 'table');
var $tHead = $table.append('thead').attr('class', 'thead-light');
var $tBody = $table.append('tbody');
var $tHeadRow = $tHead.append('tr');


//------------------------------------------------------------------------------------//

// Form

$formGroup = $form.append('div').attr('class', 'form-group');

// date
$formGroup.append('input').attr('class', 'form-control').attr('id', 'dateID').attr('type', 'date').attr('min', '2010-01-01').attr('max', '2014-05-08');

// city
var placeholderText = "city"
$formGroup.append('input').attr('class', 'form-control my-1').attr('id', 'cityID').attr('type', 'text').attr('placeholder', placeholderText);

// state
placeholderText = "state"
$formGroup.append('input').attr('class', 'form-control my-1').attr('id', 'stateID').attr('type', 'text').attr('placeholder', placeholderText);

// country
placeholderText = "country"
$formGroup.append('input').attr('class', 'form-control my-1').attr('id', 'countryID').attr('type', 'text').attr('placeholder', placeholderText);


// shape
placeholderText = "shape"
$formGroup.append('input').attr('class', 'form-control my-1').attr('id', 'shapeID').attr('type', 'text').attr('placeholder', placeholderText);

// submit button
$formGroup.append('button').attr('class', 'btn btn-secondary mt-3').attr('type', 'submit').html("Submit");


//------------------------------------------------------------------------------------//

// table

d3.select('button').on('click', function (event){
    d3.event.preventDefault();

    // clear table table body if it already exists
    if (!$tBody.empty()){
        $tBody.html('');
    }


    var dateSelect = d3.select('#dateID').node().value;
    var citySelect = d3.select('#cityID').node().value;
    var stateSelect = d3.select('#stateID').node().value;
    var countrySelect = d3.select('#countryID').node().value;
    var shapeSelect = d3.select('#shapeID').node().value;

    // build table
    var selected  = renderTable(dateSelect, citySelect, stateSelect, countrySelect, shapeSelect, filter);

    // pagination
    var pages = pagination(selected);
    d3.select('#step1')
        .classed('select', true);


    var counter = 0;
    for (let i=0; i<10; i++){
        $tBodyRow = $tBody.append('tr');
        for (let j=0; j<7; j++){
            $tBodyRow.append('td').html(selected[counter]);
            counter++;
        }
    }


    // select button and render the table
    for (let i=0; i<Math.ceil(pages); i++){
        d3.select('#step' + (i + 1)).on('click', function(){
            // clear table table body if it already exists
            if (!$tBody.empty()){
                $tBody.html('');
            }

            d3.selectAll('.paginate')
                .classed('select', false);

            d3.select('#step' + (i + 1))
                .classed('select', true);


            var counter = (1 * (i*70));
            for (let j=0; j<10; j++){
                $tBodyRow = $tBody.append('tr');
                for (let k=0; k<7; k++){
                    $tBodyRow.append('td').html(selected[counter]);
                    counter++;
                }
            }
        });
    }

    // var down = 0;

    // d3.select('#forward').on('click', function(){
    //     down++
    //     document.getElementById('step' + down).click()
    // });

    // d3.select('#forward').on('click', function(){
    //     down--
    //     document.getElementById('step' + down).click()
    // });




});


//------------------------------------------------------------------------------------//

