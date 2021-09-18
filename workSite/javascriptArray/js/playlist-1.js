const playlist = [
  'So What',
  'Respect',
  'What a Wonderful World',
  'At Last',
  'Three Little Birds',
  'The Way You Look Tonight'
];

function createPlaylist(arr){
  let items = "";

  for(var i=0; i<arr.length; i++){
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

document.querySelector("main").innerHTML = `<ol>${createPlaylist(playlist)}</ol>`;
