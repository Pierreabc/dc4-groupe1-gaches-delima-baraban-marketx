const products = [
    {
      "colors": ["Blue", "White", "Black"],
      "_id": "107fb5b75607497b96722bda5b504926",
      "name": "Campagne Google ADS 1",
      "Budget": 1849,
      "Date de debut" : "03/09/2023",
      "imageUrl": "kanap01.jpeg",
      "description": "Campagne Google ADS positionne sur notre nom de domaine",
      "altTxt": "Campagne Google ADS"
    },
    {
      "colors": ["Black/Yellow", "Black/Red"],
      "_id": "415b7cacb65d43b2b5c1ff70f3393ad1",
      "name": "Campagne Google ADS 2",
      "Budget": 4499,
      "Date de debut" : "01/07/2023",
      "imageUrl": "kanap02.jpeg",
      "description": "Campagne positionnée sur notre mot clé principal",
      "altTxt": "Campagne Google ADS"
    },
    {
      "colors": ["Green", "Red", "Orange"],
      "_id": "055743915a544fde83cfdfc904935ee7",
      "name": "Campange Facebook ADS",
      "Budget": 3199,
      "Date de debut" : "09/08/2023",
      "imageUrl": "kanap03.jpeg",
      "description": "Campagne outbound sur facebook ADS",
      "altTxt": "Campagne Facebook ADS"
    },
    {
      "colors": ["Pink", "White"],
      "_id": "a557292fe5814ea2b15c6ef4bd73ed83",
      "name": "Campagne Pinterest ADS",
      "Budget": 1499,
      "Date de debut" : "29/10/2023",
      "imageUrl": "kanap04.jpeg",
      "description": "Positionnement sur nos produits sur pinterest",
      "altTxt": "Campagne Pinterest"
    },
    {
      "colors": ["Grey", "Purple", "Blue"],
      "_id": "8906dfda133f4c20a9d0e34f18adcf06",
      "name": "Campagne Google ADS positionnée en retargeting",
      "Budget": 2249,
      "Date de debut" : "12/10/2023",
      "imageUrl": "kanap05.jpeg",
      "description": "On a lance une campagne Google ADS de retargeting pour voir si on pouvait augmenter notre ROI",
      "altTxt": "Campagne Google ADS"
    },
  ];
  
  exports.find = () => {
    return new Promise((resolve, reject) => resolve(JSON.parse(JSON.stringify(products))));
  }
  
  exports.findById = (id) => {
    return new Promise((resolve, reject) =>
      resolve(JSON.parse(JSON.stringify(products)).find(product =>
        product._id == id)
      )
    );
  }
  
  
  
  
  