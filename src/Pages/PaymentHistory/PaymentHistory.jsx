import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBistro from "../../Hooks/useBistro";
import SectionTitle from "../../SharedComponents/SectionTitle/SectionTitle";

const PaymentHistory = () => {
  const { user } = useBistro();
  const axiosSecure = useAxiosSecure();
  const [payments, setPayment] = useState([]);
  axiosSecure.get(`/payments/${user.email}`).then((res) => {
    setPayment(res.data);
  });

  return (
    <div>
      <SectionTitle subheading={"At a Glance!"} heading={"Payments History"} />
      <div>
        <h1 className="text-3xl font-semibold">Total Payments:  {payments?.length}</h1>
      </div>
      <div className="my-4">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-[#D1A054]">
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Transsaction_ID</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {payments?.map((payment,idx) => (
                <tr key={payment._id}>
                  <th>{idx+1}</th>
                  <td>{payment?.email}</td>
                  <td>{payment?.transactionId}</td>
                  <td>{payment?.status}</td>
                  <td>{payment?.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
