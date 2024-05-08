// App.js
import React, { useState } from 'react';
import FramedverticalTab from './Framedvertical';

const Tab = ({ title, isActive, onClick }) => {
    return (
        <button
            style={{
                color: isActive ? 'orange' : 'gray',

                padding: '8px 16px',
                borderRadius: '1px',
                cursor: 'pointer',

                borderRight: isActive ? '3px solid orange' : 'none', // Conditional border style
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

const VerticalTab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div class="xl:flex xl:flex-row flex flex-col">
                <div>
                    <div className="flex flex-col md:ml-44 ml-0 md:max-lg:ml-10 lg:max:xl:ml-0  py-10 md:gap-10 gap-7 font-poppins mt-20">
                        <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex  gap-4 ">
                            STANDARD   <span className="text-blue-950">VERTICAL TABS</span>
                        </h1>
                    </div>
                    <div className="flex flex-row container mx-auto  md:ml-32 ml-0 md:max-lg:ml-10  lg:max:xl:ml-0 ">
                        <div className="flex flex-col gap-4 w-40 text-xl text-gray-500 font-semibold hover:text-orange-500">
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
                        <div className="border h-40 border-gray-200  mb-5"></div>

                        <div className=" ml-10 mt-5 w-[350px]">
                            <TabContent isActive={activeTab === 'tab1'}>
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-2xl font-bold font-poppins">General Information</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 1.</p>
                                </div>
                            </TabContent>
                            <TabContent isActive={activeTab === 'tab2'}>
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-2xl font-bold font-poppins">General Information</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 1.</p>
                                </div>
                            </TabContent>
                            <TabContent isActive={activeTab === 'tab3'}>
                                <div class="flex flex-col gap-4">
                                    <h1 class="text-2xl font-bold font-poppins">General Information</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 1.</p>
                                </div>
                            </TabContent>
                        </div>
                    </div>
                </div>
                <div>
                    <FramedverticalTab />
                </div>
            </div>
        </>
    );
};

export default VerticalTab;
