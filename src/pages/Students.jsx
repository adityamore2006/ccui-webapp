const Students = () => {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900 text-center">Meet Our Student Team</h2>
            <div className="prose max-w-none">
                {/* Add student profiles here */}

                <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-slate-200 my-4">
                    <h3 className="font-semibold text-lg">Steering Committee</h3>
                    <p className="text-slate-600 text-sm">Leading the Charge</p>
                    <p className="text-slate-500 text-sm mt-2"></p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-slate-200 my-4">
                    <h3 className="font-semibold text-lg">Outreach Committee</h3>
                    <p className="text-slate-600 text-sm">Leading the Charge</p>
                    <p className="text-slate-500 text-sm mt-2"></p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-slate-200 my-4">
                    <h3 className="font-semibold text-lg">Fundraising Committee</h3>
                    <p className="text-slate-600 text-sm">Leading the Charge</p>
                    <p className="text-slate-500 text-sm mt-2"></p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-sm border border-slate-200 my-4">
                    <h3 className="font-semibold text-lg">Research Committee</h3>
                    <p className="text-slate-600 text-sm">Leading the Charge</p>
                    <p className="text-slate-500 text-sm mt-2"></p>
                </div>
            </div>
        </div>
    )
}

export default Students