// App.js
import React, { useState } from 'react';

const Tab = ({ title, isActive, onClick }) => {
    return (
        <button
            style={{
                color: isActive ? 'white' : 'black',
                backgroundColor: isActive ? 'orange' : '#d3d3d3',
                padding: '8px 16px',
                borderRadius: '1px',
                cursor: 'pointer',

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

const Tabtype8 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    HORIZONTAL TABS <span className="text-blue-950">TYPE 8</span>
                </h1>
            </div>
            <div className="container mx-auto p-4 md:px-44 px-14 md:max-lg:px-10 lg:max-xl:px-20"> {/* Container with border */}
                <div className="flex gap-0.5 text-xl text-gray-500 font-semibold">
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

                <div >
                    <TabContent isActive={activeTab === 'tab1'}>
                        <div class="flex flex-col gap-7 mt-7">
                            <p class="text-xl font-poppins font-semibold">THE WORLD CLASS</p>
                            <h1 class="text-4xl font-poppins font-bold">PICK UP</h1>
                            <p className="text-gray-500 ">Pellentesque lacus quam, laoreet sed dictum vel, facilisis ac sem. In a hendrerit ipsum. Nunc a nulla metus. Phasellus semper massa eget ante accumsan imperdiet. Morbi luctus quam in mauris mattis, nec tristique diam pharetra. Mauris vel nulla sed sem interdum volutpat.</p>
                            <p className="text-gray-500 ">Morbi a posuere nulla, non ornare metus. Nam in massa in ipsum fringilla varius et venenatis ex. Fusce dapibus risus sed tellus elementum convallis. Morbi dictum, elit et lacinia finibus, nisi metus pretium erat, vel tristique mi felis et dolor.</p>

                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab2'}>
                        <div class="flex flex-col gap-7 mt-7">
                            <p class="text-xl font-poppins font-semibold">THE WORLD CLASS</p>
                            <h1 class="text-4xl font-poppins font-bold">PICK UP</h1>
                            <p className="text-gray-500 ">Pellentesque lacus quam, laoreet sed dictum vel, facilisis ac sem. In a hendrerit ipsum. Nunc a nulla metus. Phasellus semper massa eget ante accumsan imperdiet. Morbi luctus quam in mauris mattis, nec tristique diam pharetra. Mauris vel nulla sed sem interdum volutpat.</p>
                            <p className="text-gray-500 ">Morbi a posuere nulla, non ornare metus. Nam in massa in ipsum fringilla varius et venenatis ex. Fusce dapibus risus sed tellus elementum convallis. Morbi dictum, elit et lacinia finibus, nisi metus pretium erat, vel tristique mi felis et dolor.</p>

                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab3'}>
                        <div class="flex flex-col gap-7 mt-7">
                            <p class="text-xl font-poppins font-semibold">THE WORLD CLASS</p>
                            <h1 class="text-4xl font-poppins font-bold">PICK UP</h1>
                            <p className="text-gray-500 ">Pellentesque lacus quam, laoreet sed dictum vel, facilisis ac sem. In a hendrerit ipsum. Nunc a nulla metus. Phasellus semper massa eget ante accumsan imperdiet. Morbi luctus quam in mauris mattis, nec tristique diam pharetra. Mauris vel nulla sed sem interdum volutpat.</p>
                            <p className="text-gray-500 ">Morbi a posuere nulla, non ornare metus. Nam in massa in ipsum fringilla varius et venenatis ex. Fusce dapibus risus sed tellus elementum convallis. Morbi dictum, elit et lacinia finibus, nisi metus pretium erat, vel tristique mi felis et dolor.</p>

                        </div>
                    </TabContent>
                </div>
            </div>

        </>
    );
};

export default Tabtype8;
