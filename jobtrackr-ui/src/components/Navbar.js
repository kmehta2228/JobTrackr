import React from 'react';

const Navbar = ({ currentTab, setCurrentTab }) => {
    return (
        <nav className="bg-white shadow px-8 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
            <div className="text-2xl font-bold text-blue-600">💼 JobTrackr</div>
            <div className="space-x-4">
                <button
                    onClick={() => setCurrentTab('add')}
                    className={`px-4 py-2 rounded-lg font-semibold ${currentTab === 'add'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    ➕ Add Job
                </button>
                <button
                    onClick={() => setCurrentTab('view')}
                    className={`px-4 py-2 rounded-lg font-semibold ${currentTab === 'view'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                >
                    📄 View Jobs
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
