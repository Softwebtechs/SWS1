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

const Tabtype4 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>
            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    HORIZONTAL TABS  <span className="text-blue-950">TYPE 4</span>
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
                <div className="border-t border-gray-200 mt-3"></div>
                <div className="mt-3 ">
                    <TabContent isActive={activeTab === 'tab1'}>
                        <div class="lg:flex lg:flex-row flex flex-col gap-7">
                            <div class="flex flex-col text-gray-700 font-semibold text-l md:w-[700px] mt-5 gap-5">
                                <p>Hinc labitur eripuit ut eos, nusquam omnesque qui ex. Est brute tantas omnium at. Te ius erat fabulas complectitur,
                                    argumentum reprehendunt ad sed. Ei vis nonumy primis molestie, liber appellantur ne per. Pri euismod laoreet qualisque
                                    ad, eos amet lucilius ad, pri at putant eripuit. Ex ius laudem mollis appellantur, no est virtute salutandi, eu nam ludus
                                    nonumy indoctum.
                                </p>
                                <ul class="mt-4 list-disc">
                                    <li >Ornatus dolorum pericula at duo</li>
                                    <li class="mt-3">Ut duo dolor putent scribentur, ex viderer adolescens est.</li>
                                    <li class="mt-3">Usu erat blandit gubergren no.</li>
                                </ul>
                            </div>
                            <div class="w-[400px] h-96">
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab4-1.jpg" alt="" />
                            </div>
                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab2'}>
                        <div class="lg:flex lg:flex-row flex flex-col gap-7">
                            <div class="w-[400px] h-96">
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab4-2.jpg" alt="" />
                            </div>
                            <div class="flex flex-col text-gray-700 font-semibold text-l md:w-[700px] mt-5 gap-5">
                                <p>Hinc labitur eripuit ut eos, nusquam omnesque qui ex. Est brute tantas omnium at. Te ius erat fabulas complectitur,
                                    argumentum reprehendunt ad sed. Ei vis nonumy primis molestie, liber appellantur ne per. Pri euismod laoreet qualisque
                                    ad, eos amet lucilius ad, pri at putant eripuit. Ex ius laudem mollis appellantur, no est virtute salutandi, eu nam ludus
                                    nonumy indoctum.
                                </p>
                                <ul class="mt-4 list-disc">
                                    <li >Ornatus dolorum pericula at duo</li>
                                    <li class="mt-3">Ut duo dolor putent scribentur, ex viderer adolescens est.</li>
                                    <li class="mt-3">Usu erat blandit gubergren no.</li>
                                </ul>
                            </div>

                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab3'}>
                        <div class="lg:flex lg:flex-row flex flex-col gap-7">
                            <div class="flex flex-col text-gray-700 font-semibold text-l md:w-[700px] mt-5 gap-5">
                                <p>Hinc labitur eripuit ut eos, nusquam omnesque qui ex. Est brute tantas omnium at. Te ius erat fabulas complectitur,
                                    argumentum reprehendunt ad sed. Ei vis nonumy primis molestie, liber appellantur ne per. Pri euismod laoreet qualisque
                                    ad, eos amet lucilius ad, pri at putant eripuit. Ex ius laudem mollis appellantur, no est virtute salutandi, eu nam ludus
                                    nonumy indoctum.
                                </p>
                                <ul class="mt-4 list-disc">
                                    <li >Ornatus dolorum pericula at duo</li>
                                    <li class="mt-3">Ut duo dolor putent scribentur, ex viderer adolescens est.</li>
                                    <li class="mt-3">Usu erat blandit gubergren no.</li>
                                </ul>
                            </div>
                            <div class="w-[400px] h-96">
                                <img src="https://patrai.wpengine.com/wp-content/uploads/2019/04/tab4-3.jpg" alt="" />
                            </div>
                        </div>
                    </TabContent>
                </div>
            </div>
        </>
    );
};

export default Tabtype4;
