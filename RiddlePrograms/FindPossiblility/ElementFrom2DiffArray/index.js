var elementsInList1 = [];
var elementsInList2 = [];
var totalPairs = [];
var favorablePairs = [];

function findOutPossibility() {
  var N = getTotalNumberOfPairs();
  var E = blahblahblah();
  var propability = probility(E, N);

  var resultHeadTxt = document.getElementById("resultHeader");
  resultHeadTxt.innerText = "The Propability is: " + propability.toString();
  renderTotalNumberOfPairs();
}

function getTotalNumberOfPairs() {
  var arrayA = [];
  var arrayB = [];
  //step 1 : get elemnts from Array A
  arrayA = document.getElementById("array1txt").value.split(",");
  //step 2 : get elements from Array B
  arrayB = document.getElementById("array2txt").value.split(",");
  //step 3 : find out total number of Pairs - N
  // N => (A X B)
  var totalNumberOfPairs = arrayA.length * arrayB.length;

  //return total number of pairs that can be obtained N
  return totalNumberOfPairs;
}

function blahblahblah() {
  var arrayA = [];
  var arrayB = [];
  var numberOfFavourableOutcome = 0;
  //get elemnts from Array A
  arrayA = document.getElementById("array1txt").value.split(",");
  elementsInList1 = arrayA;
  //get elements from Array B
  arrayB = document.getElementById("array2txt").value.split(",");
  elementsInList2 = arrayB;
  //find out the number of Pairs in which Element A is smaller than the Element from Array B

  if (
    arrayA != null &&
    arrayA.length > 0 &&
    arrayB != null &&
    arrayB.length > 0
  ) {
    //Step 1
    //compare each element from Array A with Array B

    //iterate Array A
    Array.prototype.forEach.call(arrayA, function (elem) {
      //iterate Array B
      for (i = 0; i < arrayB.length; i++) {
        //compare current Array A Element with current Array B element

        //Step 1A
        //If Element is smaller than the element in Array B
        //increase the count
        if (parseInt(elem) < parseInt(arrayB[i])) numberOfFavourableOutcome++;
      }
    });
  }

  //Step 2
  // return the count
  return numberOfFavourableOutcome;
}

function probility(numberOfFavourableOutcome, numberOfTotalOutcomes) {
  //Finding out propability
  // P -> numberofFavourableOutcome / numberOfTotalOutcomes --> mathematically

  //constraint
  if (numberOfTotalOutcomes >= numberOfFavourableOutcome)
    return (numberOfFavourableOutcome / numberOfTotalOutcomes).toFixed(2);
  else return 0;
}

function renderTotalNumberOfPairs() {
  //Step 1
  //iterate arrayA and arrayB
  Array.prototype.forEach.call(elementsInList1, function (elemFromA) {
    for (var i = 0; i < elementsInList2.length; i++) {
      //Step 1A
      //pick total number of Pairs
      totalPairs.push({ A: elemFromA, B: elementsInList2[i] });

      //Step 1B
      // pick favourable Pairs
      if (parseInt(elemFromA) < parseInt(elementsInList2[i])) {
        favorablePairs.push({ A: elemFromA, B: elementsInList2[i] });
      }
    }
  });

    //show Total Pairs
    //Step 2A
    var totalPairsHtml = renderHTMLFromArray(totalPairs);
    //show favorable Pairs
    //Step 2B
    var favorablePairsHtml = renderHTMLFromArray(favorablePairs);

    document.getElementById('outputTotalPairs').innerHTML = totalPairsHtml;

    document.getElementById('outputFavorablePairs').innerHTML = favorablePairsHtml;


  var resultDiv = document.getElementById('resultSection');
  resultDiv.style.display = ''
}
 

function renderHTMLFromArray(arrayData)
{
    var HtmlData = '';
    Array.prototype.forEach.call(arrayData, function(element)
    {
        //render total Pair column 
        HtmlData += '<td>' + element.A + ', ' + element.B + '</td> | ';
    });
    return HtmlData;
}