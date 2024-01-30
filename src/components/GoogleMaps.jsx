import React from "react";
import "../App.css";

function GoogleMaps() {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2832.398445337057!2d20.472648376065234!3d44.77268167107099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a70576248bf79%3A0xadaf5cff042d3bd0!2sFaculty%20of%20Organizational%20Sciences!5e0!3m2!1sen!2srs!4v1706539034182!5m2!1sen!2srs"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default GoogleMaps;
