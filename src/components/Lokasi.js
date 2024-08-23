import React from 'react'

const Lokasi = () => {
  return (
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
    <h2 className="flex text-2xl lg:text-2xl font-bold text-gray-800 mb-6 text-center">Find Us</h2>
    <div className="overflow-hidden rounded-lg shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.13517366093!2d106.70098165404083!3d-6.222788175041661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e329dd60c7%3A0x4a688cc28782df28!2sKota%20Kasablanka!5e0!3m2!1sen!2sid!4v1692708624553!5m2!1sen!2sid"
        width="100%"
        height="300"
        className="border-0 "
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      ></iframe>
    </div>
  </div>
  )
}

export default Lokasi
