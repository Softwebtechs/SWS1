// App.js
import React, { useState } from 'react';

const Tab = ({ title, isActive, onClick }) => {
    return (
        <button
            style={{
                color: isActive ? 'orange' : 'gray',

                padding: '8px 16px',
                borderRadius: '4px',
                cursor: 'pointer',
                borderBottom: isActive ? '2px solid orange' : 'none', // Conditional border style
                zIndex: isActive ? '1' : '0', // Ensure orange border is on top of gray border
                position: 'relative',
            }}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

const TabContent = ({ isActive, children }) => {
    return <div style={{ display: isActive ? 'block' : 'none' }}>{children}</div>;
};

const StandardTab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    STANDARD   <span className="text-blue-950">TABS</span>
                </h1>
            </div>
            <div className="container mx-auto p-4 md:px-32 px-14 lg:max-xl:px-20 ">
                <div className="flex gap-4 text-xl text-gray-500 font-semibold hover:text-orange-500">
                    <Tab
                        title="Tab 1"
                        isActive={activeTab === 'tab1'}
                        onClick={() => openTab('tab1')}
                        className=""
                    />
                    <Tab
                        title="Tab 2"
                        isActive={activeTab === 'tab2'}
                        onClick={() => openTab('tab2')}
                    />
                    <Tab
                        title="Tab 3"
                        isActive={activeTab === 'tab3'}
                        onClick={() => openTab('tab3')}
                    />
                </div>
                <div className="border border-gray-200  mb-5"></div>

                <div className="text-gray-700 ">
                    <TabContent isActive={activeTab === 'tab1'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 1.</p>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab2'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 2.</p>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab3'}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 3.</p>
                    </TabContent>
                </div>
            </div>
        </>
    );
};

export default StandardTab;
