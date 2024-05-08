// App.js
import React, { useState } from 'react';

const Tab = ({ title, isActive, onClick }) => {
    return (
        <button
            style={{
                color: isActive ? 'orange' : 'gray',
                backgroundColor: isActive ? 'white' : 'transparent',
                padding: '20px 24px',
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

const Tabtype9 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div class="h-full w-full bg-gray-200 py-7 mt-10">
                <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                    <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                        HORIZONTAL TABS  <span className="text-blue-950">TYPE 9</span>
                    </h1>
                </div>
                <div className="container mx-auto p-4 md:px-44 px-14 lg:max-xl:px-20">

                    <div className="flex justify-center items-center gap-7 text-2xl text-gray-500 font-semibold">
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
                    <div className=" bg-white md:h-[440px] h-full md:max-lg:h-full">
                        <div className=" ">
                            <TabContent isActive={activeTab === 'tab1'}>
                                <div class="lg:flex lg:flex-row flex flex-col px-10 gap-7">
                                    <div class="w-[400px] h-80 mt-3">
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab9-1.jpg" alt="" />
                                    </div>
                                    <div class="flex flex-col  font-semibold text-l md:w-[700px] mt-5 gap-5">
                                        <p class="text-xl font-poppins font-semibold">THE WORLD CLASS</p>
                                        <h1 class="text-4xl font-poppins font-bold">RESTAURANT & BANQUETS</h1>
                                        <p className="text-gray-500 ">Pellentesque lacus quam, laoreet sed dictum vel, facilisis ac sem. In a hendrerit ipsum. Nunc a nulla metus. Phasellus semper massa eget ante accumsan imperdiet. Morbi luctus quam in mauris mattis, nec tristique diam pharetra. Mauris vel nulla sed sem interdum volutpat.</p>
                                        <p className="text-gray-500 ">Morbi a posuere nulla, non ornare metus. Nam in massa in ipsum fringilla varius et venenatis ex. Fusce dapibus risus sed tellus elementum convallis. Morbi dictum, elit et lacinia finibus, nisi metus pretium erat, vel tristique mi felis et dolor.</p>
                                        <p class="text-orange-500 hover:text-gray-500 cursor-pointer">Service Hours :19:00-22:00</p>
                                    </div>

                                </div>
                            </TabContent>
                            <TabContent isActive={activeTab === 'tab2'}>
                                <div class="lg:flex lg:flex-row flex flex-col px-10 gap-7">

                                    <div class="flex flex-col  font-semibold text-l md:w-[700px] mt-5 gap-5">
                                        <p class="text-xl font-poppins font-semibold">THE WORLD CLASS</p>
                                        <h1 class="text-4xl font-poppins font-bold">RESTAURANT & BANQUETS</h1>
                                        <p className="text-gray-500 ">Pellentesque lacus quam, laoreet sed dictum vel, facilisis ac sem. In a hendrerit ipsum. Nunc a nulla metus. Phasellus semper massa eget ante accumsan imperdiet. Morbi luctus quam in mauris mattis, nec tristique diam pharetra. Mauris vel nulla sed sem interdum volutpat.</p>
                                        <p className="text-gray-500 ">Morbi a posuere nulla, non ornare metus. Nam in massa in ipsum fringilla varius et venenatis ex. Fusce dapibus risus sed tellus elementum convallis. Morbi dictum, elit et lacinia finibus, nisi metus pretium erat, vel tristique mi felis et dolor.</p>
                                        <p class="text-orange-500 hover:text-gray-500 cursor-pointer">Service Hours :19:00-22:00</p>
                                    </div>
                                    <div class="w-[400px] h-80 mt-3">
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab9-2.jpg" alt="" />
                                    </div>
                                </div>
                            </TabContent>
                            <TabContent isActive={activeTab === 'tab3'}>
                                <div class="lg:flex lg:flex-row flex flex-col px-10 gap-7">
                                    <div class="w-[400px] h-80 mt-3">
                                        <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab9-3.jpg" alt="" />
                                    </div>
                                    <div class="flex flex-col  font-semibold text-l md:w-[700px] mt-5 gap-5">
                                        <p class="text-xl font-poppins font-semibold">THE WORLD CLASS</p>
                                        <h1 class="text-4xl font-poppins font-bold">RESTAURANT & BANQUETS</h1>
                                        <p className="text-gray-500 ">Pellentesque lacus quam, laoreet sed dictum vel, facilisis ac sem. In a hendrerit ipsum. Nunc a nulla metus. Phasellus semper massa eget ante accumsan imperdiet. Morbi luctus quam in mauris mattis, nec tristique diam pharetra. Mauris vel nulla sed sem interdum volutpat.</p>
                                        <p className="text-gray-500 ">Morbi a posuere nulla, non ornare metus. Nam in massa in ipsum fringilla varius et venenatis ex. Fusce dapibus risus sed tellus elementum convallis. Morbi dictum, elit et lacinia finibus, nisi metus pretium erat, vel tristique mi felis et dolor.</p>
                                        <p class="text-orange-500 hover:text-gray-500 cursor-pointer">Service Hours :19:00-22:00</p>
                                    </div>

                                </div>
                            </TabContent>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tabtype9;
