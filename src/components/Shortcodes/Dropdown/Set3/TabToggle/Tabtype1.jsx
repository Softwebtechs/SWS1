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
                borderBottom: isActive ? '1px solid white' : 'none', // Transparent bottom border for inactive tabs
                border: isActive ? '1px solid gray' : 'none', // Conditional full border
                zIndex: isActive ? '1' : '0', // Ensure active tab border is on top
                position: 'relative', // Ensure zIndex works
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

const Tabtype1 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    HORIZONTAL TABS  <span className="text-blue-950">TYPE 1</span>
                </h1>
            </div>
            <div className="container mx-auto p-4 md:px-44 px-14 lg:max-xl:px-14 md:max-lg:px-14"> {/* Container with border */}
                <div className="flex gap-4 text-xl text-gray-500 font-semibold">
                    <Tab
                        title="Tab 1"
                        isActive={activeTab === 'tab1'}
                        onClick={() => openTab('tab1')}
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
                <div className="border-t border-gray-200 mb-5"></div>
                <div className="flex flex-row gap-10">
                    <TabContent isActive={activeTab === 'tab1'}>
                        <div className="md:flex md:flex-row flex flex-col gap-10">
                            <div class="md:w-[600px] w-96 md:max-lg:w-80 lg:max-xl:w-[450px] flex flex-col gap-4">
                                <h1 class="font-bold text-xl font-poppins">How fast will be the process of insuring my vehicle</h1>
                                <p class="text-gray-500 ">Etiam volutpat gravida odio, finibus tincidunt odio tempor id. Nullam mollis dui lobortis, sagittis magna non, pharetra turpis. Nulla vestibulum gravida risus, sit amet sodales lorem malesuada vel. Aenean porta nec odio ut interdum. Ut pharetra porttitor neque. Maecenas a suscipit velit, vitae elementum lectus. In lectus leo, ullamcorper ut egestas eget, congue vitae dolor.</p>
                            </div>
                            <div class="md:w-[600px] w-96 md:max-lg:w-80 lg:max-xl:w-[450px] flex flex-col gap-4">
                                <h1 class="font-bold text-xl font-poppins">How fast will be the process of insuring my vehicle</h1>
                                <p class="text-gray-500 ">Etiam volutpat gravida odio, finibus tincidunt odio tempor id. Nullam mollis dui lobortis, sagittis magna non, pharetra turpis. Nulla vestibulum gravida risus, sit amet sodales lorem malesuada vel. Aenean porta nec odio ut interdum. Ut pharetra porttitor neque. Maecenas a suscipit velit, vitae elementum lectus. In lectus leo, ullamcorper ut egestas eget, congue vitae dolor.</p>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab2'}>
                        <div className="md:flex md:flex-row flex flex-col gap-10">
                            <div class="md:w-[600px] w-96 md:max-lg:w-80 lg:max-xl:w-[450px] flex flex-col gap-4">
                                <h1 class="font-bold text-xl font-poppins">How fast will be the process of insuring my vehicle</h1>
                                <p class="text-gray-500 ">Etiam volutpat gravida odio, finibus tincidunt odio tempor id. Nullam mollis dui lobortis, sagittis magna non, pharetra turpis. Nulla vestibulum gravida risus, sit amet sodales lorem malesuada vel. Aenean porta nec odio ut interdum. Ut pharetra porttitor neque. Maecenas a suscipit velit, vitae elementum lectus. In lectus leo, ullamcorper ut egestas eget, congue vitae dolor.</p>
                            </div>
                            <div class="md:w-[600px] w-96 md:max-lg:w-80 lg:max-xl:w-[450px] flex flex-col gap-4">
                                <h1 class="font-bold text-xl font-poppins">How fast will be the process of insuring my vehicle</h1>
                                <p class="text-gray-500 ">Etiam volutpat gravida odio, finibus tincidunt odio tempor id. Nullam mollis dui lobortis, sagittis magna non, pharetra turpis. Nulla vestibulum gravida risus, sit amet sodales lorem malesuada vel. Aenean porta nec odio ut interdum. Ut pharetra porttitor neque. Maecenas a suscipit velit, vitae elementum lectus. In lectus leo, ullamcorper ut egestas eget, congue vitae dolor.</p>
                            </div>
                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab3'}>
                        <div className="md:flex md:flex-row flex flex-col gap-10">
                            <div class="md:w-[600px] w-96 md:max-lg:w-80 lg:max-xl:w-[450px] flex flex-col gap-4">
                                <h1 class="font-bold text-xl font-poppins">How fast will be the process of insuring my vehicle</h1>
                                <p class="text-gray-500 ">Etiam volutpat gravida odio, finibus tincidunt odio tempor id. Nullam mollis dui lobortis, sagittis magna non, pharetra turpis. Nulla vestibulum gravida risus, sit amet sodales lorem malesuada vel. Aenean porta nec odio ut interdum. Ut pharetra porttitor neque. Maecenas a suscipit velit, vitae elementum lectus. In lectus leo, ullamcorper ut egestas eget, congue vitae dolor.</p>
                            </div>
                            <div class="md:w-[600px] w-96 md:max-lg:w-80 lg:max-xl:w-[450px] flex flex-col gap-4">
                                <h1 class="font-bold text-xl font-poppins">How fast will be the process of insuring my vehicle</h1>
                                <p class="text-gray-500 ">Etiam volutpat gravida odio, finibus tincidunt odio tempor id. Nullam mollis dui lobortis, sagittis magna non, pharetra turpis. Nulla vestibulum gravida risus, sit amet sodales lorem malesuada vel. Aenean porta nec odio ut interdum. Ut pharetra porttitor neque. Maecenas a suscipit velit, vitae elementum lectus. In lectus leo, ullamcorper ut egestas eget, congue vitae dolor.</p>
                            </div>
                        </div>
                    </TabContent>
                </div>
            </div>
        </>
    );
};

export default Tabtype1;
