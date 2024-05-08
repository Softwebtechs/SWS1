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

const Tabtype2 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    HORIZONTAL TABS  <span className="text-blue-950">TYPE 2</span>
                </h1>
            </div>
            <div className="container mx-auto p-4 md:px-44 px-14 lg:max-xl:px-20">
                <div className="border-t border-gray-200 "></div> {/* Container with border */}
                <div className="flex justify-center items-center gap-7 text-xl text-gray-500 font-semibold">
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

                <div className="mt-3 ">
                    <TabContent isActive={activeTab === 'tab1'}>
                        <div class="flex flex-col text-gray-500 font-semibold text-l gap-5">
                            <p>Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            </p>
                            <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. </p>
                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab2'}>
                        <div class="flex flex-col text-gray-500 font-semibold text-l gap-5">
                            <p>Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            </p>
                            <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. </p>
                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab3'}>
                        <div class="flex flex-col text-gray-500 font-semibold text-l gap-5">
                            <p>Quisque volutpat mattis eros. Nullam malesuada erat ut ki diaml ka dhuddu pochu turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
                            </p>
                            <p>Aenean dignissim pellentesque felis. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. </p>
                        </div>
                    </TabContent>
                </div>
            </div>
        </>
    );
};

export default Tabtype2;
