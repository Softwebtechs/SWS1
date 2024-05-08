// App.js
import React, { useState } from 'react';

const Tab = ({ title, isActive, onClick }) => {
    return (
        <button
            style={{
                color: isActive ? 'orange' : 'gray',
                backgroundColor: '#d3d3d3',
                padding: '20px 54px',
                borderRadius: '1px',
                cursor: 'pointer',
                // Transparent bottom border for inactive tabs
                // Conditional full border
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

const Tabtype6 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>

            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    HORIZONTAL TABS  <span className="text-blue-950">TYPE 6</span>
                </h1>
            </div>
            <div className="container mx-auto  ">

                <div className="flex justify-center items-center gap-1 mt-5 text-2xl text-gray-500 font-semibold">
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
                <div class="border-2 border-orange-500 w-full"></div>
                <div className=" bg-gray-200 w-full md:h-[600px] h-full md:max-lg:h-full md:px-32 px-14 lg:max-xl:px-20">
                    <div className=" ">
                        <TabContent isActive={activeTab === 'tab1'}>
                            <div class="lg:flex lg:flex-row flex flex-col px-10 py-10 gap-10">
                                <div class=" mt-3">
                                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab6-1.jpg" alt="" class="w-[700px] h-[450px]" />
                                </div>
                                <div class="flex flex-col w-full md:max-lg:w-full font-semibold text-l md:w-[700px] mt-5 gap-5">

                                    <h1 class="text-4xl font-poppins font-bold">Product your family</h1>
                                    <h2 class="text-blue-950 text-2xl">Qualified Doctors</h2>
                                    <p class="text-gray-700">Lorem ipsum dolor sit amet, nsectetur adipis cing elit. Nullam id arcu tortor. Sed  get sit ame egestas, cursus.</p>
                                    <h2 class="text-blue-950 text-2xl mt-5">Nsectetur Doctors</h2>
                                    <p class="text-gray-700">Lorem ipsum dolor sit amet, nsectetur adipis cing elit. Nullam id arcu tortor. Sed  get sit ame egestas, cursus.</p>
                                </div>

                            </div>
                        </TabContent>
                        <TabContent isActive={activeTab === 'tab2'}>
                            <div class="lg:flex lg:flex-row flex flex-col px-10 py-10 gap-10">

                                <div class="flex flex-col w-full md:max-lg:w-full font-semibold text-l md:w-[700px] mt-5 gap-5">

                                    <h1 class="text-4xl font-poppins font-bold">Product your family</h1>
                                    <h2 class="text-blue-950 text-2xl">Qualified Doctors</h2>
                                    <p class="text-gray-700">Lorem ipsum dolor sit amet, nsectetur adipis cing elit. Nullam id arcu tortor. Sed  get sit ame egestas, cursus.</p>
                                    <h2 class="text-blue-950 text-2xl mt-5">Nsectetur Doctors</h2>
                                    <p class="text-gray-700">Lorem ipsum dolor sit amet, nsectetur adipis cing elit. Nullam id arcu tortor. Sed  get sit ame egestas, cursus.</p>
                                </div>
                                <div class=" mt-3">
                                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab6-2.jpg" alt="" class="w-[700px] h-[450px]" />
                                </div>

                            </div>
                        </TabContent>
                        <TabContent isActive={activeTab === 'tab3'}>
                            <div class="lg:flex lg:flex-row flex flex-col px-10 py-10 gap-10">
                                <div class=" mt-3">
                                    <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab6-3.jpg" alt="" class="w-[700px] h-[450px]" />
                                </div>
                                <div class="flex flex-col w-full md:max-lg:w-full font-semibold text-l md:w-[700px] mt-5 gap-5">

                                    <h1 class="text-4xl font-poppins font-bold">Product your family</h1>
                                    <h2 class="text-blue-950 text-2xl">Qualified Doctors</h2>
                                    <p class="text-gray-700">Lorem ipsum dolor sit amet, nsectetur adipis cing elit. Nullam id arcu tortor. Sed  get sit ame egestas, cursus.</p>
                                    <h2 class="text-blue-950 text-2xl mt-5">Nsectetur Doctors</h2>
                                    <p class="text-gray-700">Lorem ipsum dolor sit amet, nsectetur adipis cing elit. Nullam id arcu tortor. Sed  get sit ame egestas, cursus.</p>
                                </div>

                            </div>
                        </TabContent>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Tabtype6;
