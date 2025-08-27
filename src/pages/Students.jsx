const Students = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">Student Team</h2>
            <div className="prose max-w-none">
                <p className="text-slate-600">
                    Meet our dedicated student team members who are passionate about financial literacy and credit union initiatives.
                </p>
                {/* Add student profiles here */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-200">
                        <h3 className="font-semibold text-lg">Student Name</h3>
                        <p className="text-slate-600 text-sm">Position</p>
                        <p className="text-slate-500 text-sm mt-2">Brief description...</p>
                    </div>
                    {/* More student cards... */}
                </div>
            </div>
        </div>
    )
}

export default Students