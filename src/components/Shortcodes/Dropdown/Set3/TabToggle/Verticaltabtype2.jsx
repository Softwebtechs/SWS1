// App.js
import React, { useState } from 'react';


const Tab = ({ title, isActive, onClick }) => {
    return (
        <button
            style={{
                color: isActive ? 'white' : 'gray',

                padding: '8px 20px',
                borderRadius: '1px',
                cursor: 'pointer',
                backgroundColor: isActive ? 'orange' : '#d3d3d3',

                zIndex: isActive ? '1' : '0',
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

const Verticaltabtype2 = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <>


            <div className="flex flex-col justify-center items-center md:gap-10 gap-7 font-poppins mt-20">
                <h1 className="md:text-5xl text-3xl w-full font-bold text-orange-500 flex justify-center gap-4 ">
                    VERICAL   <span className="text-blue-950">TABS TYPE 3</span>
                </h1>
            </div>
            <div className="flex flex-row container mx-auto mt-10 md:px-32 ml-0 md:max-lg:px-10  lg:max:xl:px-14 ">
                <div className="flex flex-col gap-0.5 w-[500px] h-[200px] text-xl text-gray-500  font-semibold hover:text-orange-500">
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

                <div className=" ml-10  w-full ">
                    <TabContent isActive={activeTab === 'tab1'}>
                        <div class="flex flex-col gap-7">
                            <h1 class="text-4xl font-bold font-poppins">Imperdiet Aliquam</h1>
                            <p>Proin tincidunt porta enim, vitae fermentum sem laoreet nec. Nam ut lorem posuere, consectetur erat a, lacinia quam. Aenean sit amet sodales neque, eu imperdiet quam. Praesent congue dictum libero. Curabitur lobortis diam est, eu hendrerit nunc viverra vitae. Nunc aliquam semper commodo. Nulla porta libero nulla, eget commodo justo lacinia quis. Nulla at sapien eu lectus tempor volutpat rhoncus vitae purus. Proin tincidunt porta enim, vitae fermentum sem laoreet nec. Nam ut lorem posuere, consectetur erat a, lacinia quam. Aenean sit amet sodales neque, eu imperdiet quam. Praesent congue dictum libero. Curabitur lobortis diam est, eu hendrerit nunc viverra vitae.</p>
                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab2'}>
                        <div class="flex flex-col gap-7">
                            <h1 class="text-4xl font-bold font-poppins">Imperdiet Aliquam</h1>
                            <p>Proin tincidunt porta enim, vitae fermentum sem laoreet nec. Nam ut lorem posuere, consectetur erat a, lacinia quam. Aenean sit amet sodales neque, eu imperdiet quam. Praesent congue dictum libero. Curabitur lobortis diam est, eu hendrerit nunc viverra vitae. Nunc aliquam semper commodo. Nulla porta libero nulla, eget commodo justo lacinia quis. Nulla at sapien eu lectus tempor volutpat rhoncus vitae purus. Proin tincidunt porta enim, vitae fermentum sem laoreet nec. Nam ut lorem posuere, consectetur erat a, lacinia quam. Aenean sit amet sodales neque, eu imperdiet quam. Praesent congue dictum libero. Curabitur lobortis diam est, eu hendrerit nunc viverra vitae.</p>
                        </div>
                    </TabContent>
                    <TabContent isActive={activeTab === 'tab3'}>
                        <div class="flex flex-col gap-7">
                            <h1 class="text-4xl font-bold font-poppins">Imperdiet Aliquam</h1>
                            <p>Proin tincidunt porta enim, vitae fermentum sem laoreet nec. Nam ut lorem posuere, consectetur erat a, lacinia quam. Aenean sit amet sodales neque, eu imperdiet quam. Praesent congue dictum libero. Curabitur lobortis diam est, eu hendrerit nunc viverra vitae. Nunc aliquam semper commodo. Nulla porta libero nulla, eget commodo justo lacinia quis. Nulla at sapien eu lectus tempor volutpat rhoncus vitae purus. Proin tincidunt porta enim, vitae fermentum sem laoreet nec. Nam ut lorem posuere, consectetur erat a, lacinia quam. Aenean sit amet sodales neque, eu imperdiet quam. Praesent congue dictum libero. Curabitur lobortis diam est, eu hendrerit nunc viverra vitae.</p>
                        </div>
                    </TabContent>
                </div>
            </div>


        </>
    );
};

export default Verticaltabtype2;
