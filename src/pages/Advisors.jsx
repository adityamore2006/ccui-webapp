const Advisors = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Board of Advisors</h2>
            <div className="prose max-w-none">
                <p className="text-slate-600">
                    Our experienced board of advisors provides guidance and expertise to help CCUI achieve its mission.
                </p>
                {/* Add advisor profiles here */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <h3 className="font-semibold text-lg">Advisor Name</h3>
                        <p className="text-slate-600 text-sm">Title/Company</p>
                        <p className="text-slate-500 text-sm mt-2">Brief bio...</p>
                    </div>
                    {/* More advisor cards... */}
                </div>
            </div>
        </div>
    )
}

export default Advisors