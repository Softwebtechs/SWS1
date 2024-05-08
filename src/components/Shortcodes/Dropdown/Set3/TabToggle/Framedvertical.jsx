
import React, { useState } from 'react';

const Tab = ({ title, isActive, onClick }) => {
    return (
        <button
            style={{
                color: isActive ? 'orange' : 'gray',

                padding: '8px 37px',
                borderRadius: '1px',
                cursor: 'pointer',
                border: '1px solid gray',
                borderRight: isActive ? '3px solid white' : 'none', // Conditional border style
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

const FramedverticalTab = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="flex flex-col  px-7 py-10 md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex  gap-4 ">
                    FRAMED   <span className="text-blue-950">VERTICAL TABS</span>
                </h1>
            </div>
            <div className="flex flex-row container mx-auto p-4   lg:max-xl:px-20 ">
                <div className="flex flex-col justify-center items-center w-40 text-xl text-gray-500 font-semibold hover:text-orange-500">
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
                <div className="border h-full w-full border-gray-200  mb-5">

                    <div className=" ml-10 mt-5 w-[350px]">
                        <TabContent isActive={activeTab === 'tab1'}>
                            <div class="flex flex-col gap-4">
                                <h1 class="text-2xl font-bold font-poppins">Imperdiet Aliquam</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 1.</p>
                            </div>
                        </TabContent>
                        <TabContent isActive={activeTab === 'tab2'}>
                            <div class="flex flex-col gap-4">
                                <h1 class="text-2xl font-bold font-poppins">Imperdiet Aliquam</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 1.</p>
                            </div>
                        </TabContent>
                        <TabContent isActive={activeTab === 'tab3'}>
                            <div class="flex flex-col gap-4">
                                <h1 class="text-2xl font-bold font-poppins">Imperdiet Aliquam</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi hendrerit elit turpis, a porttitor tellus sollicitudin at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Tab 1.</p>
                            </div>
                        </TabContent>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FramedverticalTab;
