import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";
import Bodytab from "components/body/Bodytab.js";
import BodyCard from "components/body/BodyCard.js";
// sections for this page/view
import Basics from "views/IndexSections/Basics.js";
import Navbars from "views/IndexSections/Navbars.js";
import Tabs from "views/IndexSections/Tabs.js";
import Pagination from "views/IndexSections/Pagination.js";
import Notifications from "views/IndexSections/Notifications.js";
import Typography from "views/IndexSections/Typography.js";
import JavaScript from "views/IndexSections/JavaScript.js";
import NucleoIcons from "views/IndexSections/NucleoIcons.js";
import Signup from "views/IndexSections/Signup.js";
import Examples from "views/IndexSections/Examples.js";
import Download from "views/IndexSections/Download.js";
import ClientAxios from '../utils/fetch.utils'

export default function Index() {
  var reactListDiv = document.querySelector('.list');

if (reactListDiv) {
    reactListDiv.remove();
}
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:    // call to check user
    ClientAxios.get('/api/customer/authen').then((response) => {
      console.log(response)
    })

    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
         
          {/* <Basics />
          <Navbars />
  <Tabs />*/}
          
          <BodyCard />
          <Bodytab/>
           {/* <Pagination />  
          <Notifications />
          <Typography />
          <JavaScript />
          <NucleoIcons />
          <Signup />
          <Examples />
          <Download />  */}

        </div>
        <Footer />
      </div>
    </>
  );
}
