function initMap() {
    // Example location - Placeholder for event venue
    var eventVenueLocation = { lat: -34.397, lng: 150.644}; // Update this with your event's actual location coordinates
    var mapEventVenue = new google.maps.Map(document.getElementById('map1'), {
        zoom: 15,
        center: eventVenueLocation
    });
    new google.maps.Marker({
        position: eventVenueLocation,
        map: mapEventVenue
    });

    // Example location - Placeholder for secondary event location, like a reception area
    var secondaryLocation = { lat: -34.400, lng: 150.650 }; // Update this with the secondary location's actual coordinates
    var mapSecondary = new google.maps.Map(document.getElementById('map2'), {
        zoom: 15,
        center: secondaryLocation
    });
    new google.maps.Marker({
        position: secondaryLocation,
        map: mapSecondary
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Placeholder event details
    var eventTitle = "Event Title Placeholder";
    var eventStart = '20240101T100000'; // Update with actual event start date and time
    var eventEnd = '20240101T120000';   // Update with actual event end date and time
    var eventLocation = "Event Location Address Placeholder";
    var eventDescription = "Event Description Placeholder";

    // Constructing the Google Calendar URL
    var googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${eventStart}/${eventEnd}&details=${encodeURIComponent(eventDescription)}&location=${encodeURIComponent(eventLocation)}`;
    document.getElementById('google-calendar').setAttribute('href', googleCalendarUrl);

    // Generating the iCalendar (.ics file) Data and URL
    var icsData = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${eventTitle}\nDTSTART:${eventStart}\nDTEND:${eventEnd}\nLOCATION:${eventLocation}\nDESCRIPTION:${eventDescription}\nEND:VEVENT\nEND:VCALENDAR`;
    var icalUrl = `data:text/calendar;charset=utf8,${encodeURIComponent(icsData)}`;
    document.getElementById('icalendar').setAttribute('href', icalUrl);
});

// Ensuring the initMap function is globally available for the Google Maps callback
window.initMap = initMap;
