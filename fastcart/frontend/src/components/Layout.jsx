import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
      <Sidebar />
        {/* <main className="content-area">
          {children}
        </main> */}
      </div>
    </div>
  );
};

export default Layout;


// import React from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import './Layout.css';

// const Layout = ({ children }) => {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content-container">
//         <Header />
//         <main className="content-area">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;



// import React from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';
// import './Layout.css';

// const Layout = ({ children }) => {
//   return (
//     <div className="app-container">
//       <Sidebar />
//       <div className="main-content">
//         <Header />
//         <main className="content-area">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout



// import React from 'react';
// import Sidebar from './Sidebar';
// import Header from './Header';


// const Layout = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-gray-50">
      

//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header />
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

//export default Layout;


// import React from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const Layout = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <Sidebar />
//       <div className="flex-1 flex flex-col overflow-hidden">
//         <Header />
//         <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-4">
//           {children}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Layout;