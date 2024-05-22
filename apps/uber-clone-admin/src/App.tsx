import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RideList } from "./ride/RideList";
import { RideCreate } from "./ride/RideCreate";
import { RideEdit } from "./ride/RideEdit";
import { RideShow } from "./ride/RideShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { DriverList } from "./driver/DriverList";
import { DriverCreate } from "./driver/DriverCreate";
import { DriverEdit } from "./driver/DriverEdit";
import { DriverShow } from "./driver/DriverShow";
import { RiderList } from "./rider/RiderList";
import { RiderCreate } from "./rider/RiderCreate";
import { RiderEdit } from "./rider/RiderEdit";
import { RiderShow } from "./rider/RiderShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ServiceBookingList } from "./serviceBooking/ServiceBookingList";
import { ServiceBookingCreate } from "./serviceBooking/ServiceBookingCreate";
import { ServiceBookingEdit } from "./serviceBooking/ServiceBookingEdit";
import { ServiceBookingShow } from "./serviceBooking/ServiceBookingShow";
import { ProviderList } from "./provider/ProviderList";
import { ProviderCreate } from "./provider/ProviderCreate";
import { ProviderEdit } from "./provider/ProviderEdit";
import { ProviderShow } from "./provider/ProviderShow";
import { NotificationList } from "./notification/NotificationList";
import { NotificationCreate } from "./notification/NotificationCreate";
import { NotificationEdit } from "./notification/NotificationEdit";
import { NotificationShow } from "./notification/NotificationShow";
import { ServiceList } from "./service/ServiceList";
import { ServiceCreate } from "./service/ServiceCreate";
import { ServiceEdit } from "./service/ServiceEdit";
import { ServiceShow } from "./service/ServiceShow";
import { SupportTicketList } from "./supportTicket/SupportTicketList";
import { SupportTicketCreate } from "./supportTicket/SupportTicketCreate";
import { SupportTicketEdit } from "./supportTicket/SupportTicketEdit";
import { SupportTicketShow } from "./supportTicket/SupportTicketShow";
import { ReviewList } from "./review/ReviewList";
import { ReviewCreate } from "./review/ReviewCreate";
import { ReviewEdit } from "./review/ReviewEdit";
import { ReviewShow } from "./review/ReviewShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"UberClone"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Ride"
          list={RideList}
          edit={RideEdit}
          create={RideCreate}
          show={RideShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Driver"
          list={DriverList}
          edit={DriverEdit}
          create={DriverCreate}
          show={DriverShow}
        />
        <Resource
          name="Rider"
          list={RiderList}
          edit={RiderEdit}
          create={RiderCreate}
          show={RiderShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ServiceBooking"
          list={ServiceBookingList}
          edit={ServiceBookingEdit}
          create={ServiceBookingCreate}
          show={ServiceBookingShow}
        />
        <Resource
          name="Provider"
          list={ProviderList}
          edit={ProviderEdit}
          create={ProviderCreate}
          show={ProviderShow}
        />
        <Resource
          name="Notification"
          list={NotificationList}
          edit={NotificationEdit}
          create={NotificationCreate}
          show={NotificationShow}
        />
        <Resource
          name="Service"
          list={ServiceList}
          edit={ServiceEdit}
          create={ServiceCreate}
          show={ServiceShow}
        />
        <Resource
          name="SupportTicket"
          list={SupportTicketList}
          edit={SupportTicketEdit}
          create={SupportTicketCreate}
          show={SupportTicketShow}
        />
        <Resource
          name="Review"
          list={ReviewList}
          edit={ReviewEdit}
          create={ReviewCreate}
          show={ReviewShow}
        />
      </Admin>
    </div>
  );
};

export default App;
