{
  console.log("Inject[Lat Long Extension]::  Let's see..");
  // Create the initial InfoWindow.
  let dmap = window.map || window.AtMap.MapObj;
  console.log("[Here]: \n", dmap);
  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Lat/Lng!",
    position: dmap.center.toJSON(),
  });
  infoWindow.open(dmap);
  // Configure the click listener.
  dmap.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    let locObj = mapsMouseEvent.latLng.toJSON();
    console.log(locObj);
    let latLng = `${locObj.lat},${locObj.lng}`;
    infoWindow.setContent(latLng);
    let newUrl = `https://www.google.com/maps/dir/'${latLng}'/35.63691500932938,+139.78068749537925`;
    window.open(newUrl);
    infoWindow.open(dmap);
  });
}
