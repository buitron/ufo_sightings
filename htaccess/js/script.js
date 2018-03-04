function pagination(totalOutput){
    $div2.html('');

    // var pages = (d3.selectAll("tr").size() - 1)/10;
    var pages = (totalOutput.length/7)/10;

    if (pages > 1) {

        // back arrow
        // $div2
        // .append('button')
        // .append('span')
        //     .attr('id', 'back')
        //     .attr('class', 'paginate')
        //         .html('&laquo;');

        // in-between number selections
        for (let i=0; i<pages; i++){
            $div2
            .append('button')
                .attr('id', 'step' + (i + 1))
                .attr('class', 'paginate')
                    .html(i + 1);

        }

        // forward arrow
        // $div2
        // .append('button')
        // .append('span')
        //     .attr('id', 'forward')
        //     .attr('class', 'paginate')
        //         .html('&raquo;');
    }

    return (pages);
}


function renderTable(selection1, selection2, selection3, selection4, selection5, filteredData){

    var tHeaders = ['date', 'city', 'state', 'country', 'shape', 'duration_min', 'comment'];

    // clear headers before repopulating them
    if (!d3.selectAll('th').empty()){
        d3.selectAll('th').remove();
    }

    for (i=0; i<tHeaders.length; i++){
        $tHeadRow.append('th').attr('scope', 'col').html(tHeaders[i]);
    }

    return filteredData(selection1, selection2, selection3, selection4, selection5);

}


function formatData(inDate, inCity, inState, inCountry, inShape, data){
    var pct = moment.tz(inDate, "America/Los_Angeles");
    var gmt = pct.clone().tz("Europe/Dublin").format();

    var dt_from = new Date(gmt);
    var dt_to = new Date(data[j].datetime);

    var city_from = inCity.toLowerCase();
    var city_to = data[j].city.toLowerCase();

    var state_from = inState.toLowerCase();
    var state_to = data[j].state.toLowerCase();

    var country_from = inCountry.toLowerCase();
    var country_to = data[j].country.toLowerCase();

    var shape_from = inShape.toLowerCase();
    var shape_to = data[j].shape.toLowerCase();

    return {
        dateSelect : dt_from,
        dateData : dt_to,

        citySelect: city_from,
        cityData: city_to,

        stateSelect: state_from,
        stateData: state_to,

        countrySelect: country_from,
        countryData: country_to,

        shapeSelect: shape_from,
        shapeData: shape_to
    }
}


function populate(data, td){
    // $tBodyRow = $tBody.append('tr');

    var data = data[j];
    var fields = Object.keys(data);
    for (k=0; k<fields.length; k++){
        var field = fields[k];
        var insert = data[field];
        td.push(insert);

        // $tBodyRow.append('td').html(insert)

    }
}


function filter(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData){

    var ufoData = dataSet;
    var td = [];

    if (chosenDate && chosenCity && chosenState && chosenCountry && chosenShape){
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.citySelect == result.cityData && result.stateSelect == result.stateData && result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && chosenCity && chosenState && chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.citySelect == result.cityData && result.stateSelect == result.stateData && result.countrySelect == result.countryData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && chosenCity && chosenState && !chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.citySelect == result.cityData && result.stateSelect == result.stateData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && chosenCity && !chosenState && chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.citySelect == result.cityData && result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && !chosenCity && chosenState && chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.stateSelect == result.stateData && result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && chosenCity && chosenState && chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.citySelect == result.cityData && result.stateSelect == result.stateData && result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && chosenCity && chosenState && !chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.citySelect == result.cityData && result.stateSelect == result.stateData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && chosenCity && !chosenState && chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.citySelect == result.cityData && result.countrySelect == result.countryData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && !chosenCity && chosenState && chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.stateSelect == result.stateData && result.countrySelect == result.countryData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && chosenCity && chosenState && chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.citySelect == result.cityData && result.stateSelect == result.stateData && result.countrySelect == result.countryData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && chosenCity && !chosenState && !chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.citySelect == result.cityData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && !chosenCity && chosenState && !chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.stateSelect == result.stateData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && chosenCity && chosenState && !chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.citySelect == result.cityData && result.stateSelect == result.stateData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && !chosenCity && !chosenState && chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && chosenCity && !chosenState && chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.citySelect === result.cityData && result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && !chosenCity && chosenState && chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.stateSelect === result.stateData && result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && chosenCity && !chosenState && !chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.citySelect == result.cityData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && !chosenCity && chosenState && !chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.stateSelect == result.stateData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && chosenCity && chosenState && !chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.citySelect == result.cityData && result.stateSelect == result.stateData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && !chosenCity && !chosenState && !chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && chosenCity && !chosenState && !chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.citySelect == result.cityData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && !chosenCity && !chosenState && chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && !chosenCity && chosenState && chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.stateSelect == result.stateData && result.countrySelect == result.countryData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && !chosenCity && chosenState && !chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.stateSelect == result.stateData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && !chosenCity && !chosenState && chosenCountry && chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.countrySelect == result.countryData && result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    } else if (chosenDate && !chosenCity && !chosenState && chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() && result.countrySelect == result.countryData){
                populate(ufoData, td)

            }
        }
    } else if (!chosenDate && chosenCity && !chosenState && chosenCountry && !chosenShape) {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.citySelect == result.cityData && result.countrySelect == result.countryData){
                populate(ufoData, td)

            }
        }
    } else {
        for (j=0; j<ufoData.length; j++){
            let result = formatData(chosenDate, chosenCity, chosenState, chosenCountry, chosenShape, ufoData)

            if (result.dateSelect.getTime() === result.dateData.getTime() || result.citySelect == result.cityData || result.stateSelect == result.stateData || result.countrySelect == result.countryData || result.shapeSelect == result.shapeData){
                populate(ufoData, td)

            }
        }
    }
    return (td);
}
