const JobCard = ({ title, company, location, salary, status }) => {
    // Normalisasi status (menerima boolean atau string "Open"/"Closed")
    const isOpen = typeof status === 'boolean' ? status : status === 'Open';

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-sm border border-gray-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
          <div>
              <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="job-card__title text-amber-900 text-xl font-bold leading-snug">
                      {title}
                  </h3>
                  {/* Badge Status yang Lebih Modern */}
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                      isOpen 
                          ? "bg-green-100 text-green-700" 
                          : "bg-red-100 text-red-700"
                  }`}>
                      {isOpen ? "Open" : "Closed"}
                  </span>
              </div>

              <div className="space-y-2 text-sm text-gray-600 mb-6">
                  <p className="flex items-center gap-1">
                      <span className="font-medium text-gray-400">Company:</span> 
                      <span className="text-gray-800 font-medium">{company}</span>
                  </p>
                  <p className="flex items-center gap-1">
                      <span className="font-medium text-gray-400">Location:</span> 
                      <span>{location}</span>
                  </p>
                  <p className="flex items-center gap-1">
                      <span className="font-medium text-gray-400">Salary:</span> 
                      <span className="font-semibold text-gray-900">{salary}</span>
                  </p>
              </div>
          </div>

          <button className="job-card__button w-full bg-blue-600 text-white font-medium px-4 py-2.5 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-sm">
              Lihat Detail
          </button>
        </div>
    );
};

export default JobCard;