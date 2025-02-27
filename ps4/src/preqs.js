import React, { useEffect, useState } from "react";
import SetPatchComponent from "./register";
import Web3Connector from "./Web3Connector";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const MyComponent = () => {
  let Navigate = useNavigate();
  const [c1, setC1] = useState(0);
  const [dt5, setDt5] = useState([]);
  const [selectedPatchIndex, setSelectedPatchIndex] = useState(null);
  const [showSetPatchComponent, setShowSetPatchComponent] = useState(false);
  const [account, setAccount] = useState("");
  const [contract1, setContract1] = useState(null);
  const [contractStatus, setContractStatus] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (contract1) {
        // Fetch c1 value
        const c1Value = await contract1.methods.reqcount().call();
        setC1(c1Value);
        console.log(c1Value);

        // Fetch dt5 values
        const dt5Array = [];
        for (let i = 0; i < c1Value; i++) {
          const data = await contract1.methods.getarr(i + 1).call();
          console.log(data);
          dt5Array.push(data);
        }
        setDt5(dt5Array);
        console.log(dt5Array);
      }
    };

    fetchData();
  }, [contract1]);
  const handleButtonClick2 = (index) => {
    // setSelectedPatchIndex(index);
    Navigate(`/developer/reupload/${index}`);
  };

  const handleButtonClick = (index) => {
    // setSelectedPatchIndex(index);
    Navigate(`/developer/register/${index}`);
  };

  return (
    <>
      <div>
        <Web3Connector
          setAccount={setAccount}
          setContract={setContract1} // Update the contract1 state value
          setContractStatus={setContractStatus}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Request No.</th>
            <th>Bug Descriptions</th>
            <th>Features</th>
          </tr>
        </thead>
        <tbody>
          {dt5.map((data, index) => {
            if (data[4] == 0 && data[5] === "upload") {
              return (
                <tr key={index}>
                  <td>{parseInt(data[0])}</td>
                  <td>{data[2]}</td>
                  <td>{data[3]}</td>
                  <td>
                    <button
                      className="btn mx-3 btn-danger"
                      onClick={() => handleButtonClick(data[0])}
                    >
                      Upload
                    </button>
                  </td>
                </tr>
              );
            } else if (data[4] == 0 && data[5] === "reupload") {
              return (
                <tr key={index}>
                  <td>{parseInt(data[0])}</td>
                  <td>{data[2]}</td>
                  <td>{data[3]}</td>
                  <td>
                    <button
                      className="btn mx-3 btn-danger"
                      onClick={() => handleButtonClick2(data[0])}
                    >
                      Reupload
                    </button>
                  </td>
                  <td>{`Reason for rejection: ${data[6]}`}</td>
                </tr>
              );
            } else {
              return null;
            }
          })}

        </tbody>
      </table>
    </>
  );
};

export default MyComponent;
