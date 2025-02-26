const MapComponent = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1380.3322823394237!2d120.34070005301247!3d16.051283055600592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339167fd1cac4cb7%3A0x46938aef77eafeeb!2sRioferio%20Rd%2C%20Dagupan%2C%20Pangasinan!5e1!3m2!1sen!2sph!4v1740413864077!5m2!1sen!2sph"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map Embed"
    ></iframe>
  );
};

export default MapComponent;
